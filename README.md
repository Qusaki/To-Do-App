# 📝 FastAPI To-Do App

A modern, full-stack to-do application built with **FastAPI** (backend) and **React** (frontend). This project is designed for learning FastAPI backend development through hands-on practice.

## 🎯 Project Goals

- **Learn FastAPI**: Practice building REST APIs with FastAPI
- **CRUD Operations**: Implement Create, Read, Update, Delete functionality
- **Database Integration**: Work with databases using SQLAlchemy
- **API Design**: Design clean and intuitive REST endpoints
- **Error Handling**: Implement proper error handling and validation
- **Testing**: Write tests for API endpoints

## ✨ Features

- ✅ Add new tasks
- ✅ Mark tasks as completed/incomplete
- ✅ Edit task titles
- ✅ Delete tasks
- ✅ View task statistics
- ✅ Responsive design
- ✅ Real-time updates
- ✅ Error handling with user feedback

## 🛠 Tech Stack

### Frontend (Already Implemented)
- **React 18** - Modern React with hooks
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icons
- **CSS3** - Modern styling with gradients and animations

### Backend (To Be Implemented)
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - SQL toolkit and ORM
- **Pydantic** - Data validation using Python type hints
- **SQLite/PostgreSQL** - Database (your choice)
- **Uvicorn** - ASGI server

## 🚀 Setup Instructions

### Frontend Setup
The frontend is already fully implemented! To run it:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

The frontend will run on `http://localhost:3000` and expects the backend API at `http://localhost:8000`.

### Backend Setup (You'll implement this!)
You'll create the FastAPI backend step by step. The backend should:

1. Run on `http://localhost:8000`
2. Provide REST API endpoints for todo operations
3. Handle CORS for frontend communication
4. Use a database to persist todos

## 📡 API Endpoints (To Be Implemented)

Your FastAPI backend should implement these endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/todos` | Get all todos |
| `POST` | `/todos` | Create a new todo |
| `PUT` | `/todos/{id}` | Update a todo |
| `DELETE` | `/todos/{id}` | Delete a todo |
| `GET` | `/` | Health check endpoint |

## 📊 Data Models

### Todo Model
```json
{
  "id": 1,
  "title": "Learn FastAPI",
  "completed": false,
  "created_at": "2024-01-01T12:00:00Z",
  "updated_at": "2024-01-01T12:00:00Z"
}
```

## 🎨 Frontend Features

The React frontend includes:

- **Modern UI**: Clean, gradient-based design
- **Real-time Updates**: Immediate feedback for all operations
- **Error Handling**: User-friendly error messages
- **Responsive Design**: Works on desktop and mobile
- **Task Statistics**: Shows completion progress
- **Inline Editing**: Edit tasks directly in the list
- **Loading States**: Visual feedback during API calls

## 🧪 Testing

Once you implement the backend, you can test:

1. **Manual Testing**: Use the React frontend
2. **API Testing**: Use tools like Postman or curl
3. **Unit Tests**: Write FastAPI test cases
4. **Integration Tests**: Test frontend-backend communication

## 📝 Development Notes

- The frontend uses a proxy configuration to forward API calls to `localhost:8000`
- CORS must be configured in FastAPI to allow frontend requests
- The frontend expects specific JSON response formats
- Error responses should include meaningful messages

## 🚀 Deployment

After completing the backend:

1. **Frontend**: Can be deployed to Netlify, Vercel, or GitHub Pages
2. **Backend**: Can be deployed to Heroku, Railway, or DigitalOcean
3. **Database**: Use PostgreSQL for production

## 📚 Learning Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [Pydantic Documentation](https://pydantic-docs.helpmanual.io/)

---

**Ready to start building the backend? Let's go! 🚀**
