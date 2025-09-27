from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import todos
from database import engine, Base

app = FastAPI(
    title="To-Do App API",
    description="A modern FastAPI backend for the To-Do application",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(todos.router, prefix="/todos", tags=["todos"])

Base.metadata.create_all(bind=engine)