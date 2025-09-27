from fastapi import APIRouter, Depends, HTTPException, status
from schemas.task import TaskResponse, TaskCreate, TaskUpdate
from typing import List
from models.task import Task
from database import get_db
from sqlalchemy.orm import Session

router = APIRouter()

@router.post('/', response_model=TaskResponse)
def create_task(
    new_task: TaskCreate,
    db: Session = Depends(get_db)
):
    if not new_task.title:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Task title is required")

    db_task = Task(**new_task.dict())
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task

@router.get('/', response_model=List[TaskResponse])
def get_tasks(
    db: Session = Depends(get_db)
):
    tasks = db.query(Task).all()
    return tasks

@router.put('/{task_id}', response_model=TaskResponse)
def update_task(
    task_id: int,
    task_update: TaskUpdate,
    db: Session = Depends(get_db)
):
    db_task = db.query(Task).filter(Task.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    
    # Update task fields
    update_data = task_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_task, field, value)
    
    db.commit()
    db.refresh(db_task)
    return db_task

@router.delete('/{task_id}')
def delete_task(
    task_id: int,
    db: Session = Depends(get_db)
):
    db_task = db.query(Task).filter(Task.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    
    db.delete(db_task)
    db.commit()
    return {"message": "Task deleted successfully"}