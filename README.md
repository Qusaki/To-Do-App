# 📝 FastAPI To-Do App

A modern, full-stack to-do application built with **FastAPI** (backend) and **React** (frontend). This project demonstrates a complete CRUD application with database persistence and real-time updates.

## 🎯 Project Overview

✅ **Completed Features**:
- **FastAPI Backend**: Complete REST API with CRUD operations
- **PostgreSQL Database**: Persistent data storage with SQLAlchemy ORM
- **React Frontend**: Modern UI with real-time updates
- **Full Integration**: Frontend and backend working seamlessly
- **Error Handling**: Comprehensive error handling and validation
- **CORS Configuration**: Proper cross-origin resource sharing setup

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

### Frontend ✅
- **React 18** - Modern React with hooks
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icons
- **CSS3** - Modern styling with gradients and animations

### Backend ✅
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - SQL toolkit and ORM
- **Pydantic** - Data validation using Python type hints
- **PostgreSQL** - Production-ready database
- **Uvicorn** - ASGI server
- **python-dotenv** - Environment variable management

## 🚀 Setup Instructions

### Prerequisites
- **Node.js** (v14 or higher)
- **Python** (v3.8 or higher)
- **PostgreSQL** (v12 or higher)

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Create virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install fastapi uvicorn sqlalchemy psycopg2-binary python-dotenv
   ```

4. **Create `.env` file**:
   ```bash
   DATABASE_URL=postgresql://username:password@localhost:5432/todo_db
   ```

5. **Create PostgreSQL database**:
   ```sql
   CREATE DATABASE todo_db;
   ```

6. **Start the backend server**:
   ```bash
   uvicorn main:app --reload
   ```
   Backend runs on `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm start
   ```
   Frontend runs on `http://localhost:3000`

## 📡 API Endpoints ✅

The FastAPI backend implements these endpoints:

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| `GET` | `/todos/` | Get all todos | ✅ |
| `POST` | `/todos/` | Create a new todo | ✅ |
| `PUT` | `/todos/{id}` | Update a todo | ✅ |
| `DELETE` | `/todos/{id}` | Delete a todo | ✅ |
| `GET` | `/docs` | Interactive API documentation | ✅ |

## 📊 Data Models

### Task Model
```json
{
  "id": 1,
  "title": "Learn FastAPI",
  "completed": false
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

### Available Testing Methods:

1. **Interactive Frontend**: Use the React app at `http://localhost:3000`
2. **API Documentation**: Visit `http://localhost:8000/docs` for Swagger UI
3. **Manual API Testing**: Use tools like Postman or curl
4. **Database Verification**: Check PostgreSQL for data persistence

### Example API Calls:
```bash
# Get all todos
curl http://localhost:8000/todos/

# Create a new todo
curl -X POST http://localhost:8000/todos/ \
  -H "Content-Type: application/json" \
  -d '{"title": "New Task", "completed": false}'

# Update a todo
curl -X PUT http://localhost:8000/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# Delete a todo
curl -X DELETE http://localhost:8000/todos/1
```

## 📝 Project Structure

```
To-Do-App/
├── backend/
│   ├── main.py              # FastAPI application entry point
│   ├── database.py          # Database configuration
│   ├── models/
│   │   └── task.py          # SQLAlchemy models
│   ├── schemas/
│   │   └── task.py          # Pydantic schemas
│   ├── routes/
│   │   └── todos.py         # API route handlers
│   └── .env                 # Environment variables
├── frontend/
│   ├── src/
│   │   ├── App.js           # Main React component
│   │   ├── App.css          # Styling
│   │   └── index.js         # React entry point
│   └── package.json         # Frontend dependencies
└── README.md                # This file
```

## 🚀 Deployment

### Production Deployment Options:

1. **Frontend**:
   - Netlify, Vercel, or GitHub Pages
   - Build with: `npm run build`

2. **Backend**:
   - Heroku, Railway, DigitalOcean, or AWS
   - Use production WSGI server like Gunicorn

3. **Database**:
   - PostgreSQL on Heroku, AWS RDS, or DigitalOcean
   - Update `DATABASE_URL` in production environment

### Environment Variables for Production:
```bash
DATABASE_URL=postgresql://user:pass@host:port/dbname
CORS_ORIGINS=https://your-frontend-domain.com
```

## 📚 Learning Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [Pydantic Documentation](https://pydantic-docs.helpmanual.io/)

## 🎉 Project Status

**✅ COMPLETED!** This is a fully functional full-stack to-do application with:

- ✅ FastAPI backend with complete CRUD operations
- ✅ PostgreSQL database integration
- ✅ React frontend with modern UI
- ✅ Real-time updates and error handling
- ✅ CORS configuration for seamless integration
- ✅ Production-ready code structure

**🚀 Ready for production deployment!**

---

*Built with ❤️ using FastAPI and React*
