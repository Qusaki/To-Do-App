import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Trash2, Check, X, Edit3, Save } from 'lucide-react';
import './App.css';

const API_BASE_URL = 'http://localhost:8000';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch todos from backend
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/todos`);
      setTodos(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch todos. Make sure the backend is running.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add new todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      const response = await axios.post(`${API_BASE_URL}/todos`, {
        title: newTodo.trim(),
        completed: false
      });
      setTodos([...todos, response.data]);
      setNewTodo('');
      setError('');
    } catch (err) {
      setError('Failed to add todo. Make sure the backend is running.');
      console.error('Error adding todo:', err);
    }
  };

  // Toggle todo completion
  const toggleTodo = async (id, completed) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/todos/${id}`, {
        completed: !completed
      });
      setTodos(todos.map(todo => 
        todo.id === id ? response.data : todo
      ));
      setError('');
    } catch (err) {
      setError('Failed to update todo. Make sure the backend is running.');
      console.error('Error updating todo:', err);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
      setError('');
    } catch (err) {
      setError('Failed to delete todo. Make sure the backend is running.');
      console.error('Error deleting todo:', err);
    }
  };

  // Start editing
  const startEditing = (id, title) => {
    setEditingId(id);
    setEditingText(title);
  };

  // Save edit
  const saveEdit = async (id) => {
    if (!editingText.trim()) return;

    try {
      const response = await axios.put(`${API_BASE_URL}/todos/${id}`, {
        title: editingText.trim()
      });
      setTodos(todos.map(todo => 
        todo.id === id ? response.data : todo
      ));
      setEditingId(null);
      setEditingText('');
      setError('');
    } catch (err) {
      setError('Failed to update todo. Make sure the backend is running.');
      console.error('Error updating todo:', err);
    }
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="app">
      <div className="todo-container">
        <header className="header">
          <h1>📝 FastAPI To-Do App</h1>
          <p className="subtitle">Manage your tasks efficiently</p>
          {totalCount > 0 && (
            <div className="stats">
              {completedCount} of {totalCount} tasks completed
            </div>
          )}
        </header>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={addTodo} className="add-todo-form">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="todo-input"
          />
          <button type="submit" className="add-button">
            <Plus size={20} />
          </button>
        </form>

        <div className="todos-list">
          {loading ? (
            <div className="loading">Loading todos...</div>
          ) : todos.length === 0 ? (
            <div className="empty-state">
              <p>No tasks yet. Add one above! 🚀</p>
            </div>
          ) : (
            todos.map(todo => (
              <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <button
                  onClick={() => toggleTodo(todo.id, todo.completed)}
                  className="toggle-button"
                >
                  {todo.completed ? <Check size={18} /> : <div className="unchecked" />}
                </button>

                {editingId === todo.id ? (
                  <div className="edit-form">
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      className="edit-input"
                      autoFocus
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') saveEdit(todo.id);
                        if (e.key === 'Escape') cancelEdit();
                      }}
                    />
                    <div className="edit-actions">
                      <button onClick={() => saveEdit(todo.id)} className="save-button">
                        <Save size={16} />
                      </button>
                      <button onClick={cancelEdit} className="cancel-button">
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="todo-text">{todo.title}</span>
                    <div className="todo-actions">
                      <button
                        onClick={() => startEditing(todo.id, todo.title)}
                        className="edit-button"
                      >
                        <Edit3 size={16} />
                      </button>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="delete-button"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>

        <footer className="footer">
          <p>Built with FastAPI + React</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
