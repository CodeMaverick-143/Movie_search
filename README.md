## 🎬 Movie Search App

A sleek and modern movie search platform built with **React.js (Frontend)** and **Django (Backend)** using **TMDB API** to fetch movie data.

---

## 🚀 Features

- ✅ Search for movies in real-time using **The Movie Database (TMDB) API**
- ✅ **Clean & modern UI** with a **dark-light gradient theme**
- ✅ **Responsive design** for desktop and mobile
- ✅ **Movie details** with posters and descriptions
- ✅ **Smooth animations & hover effects**

---

## 🛠️ Tech Stack

### Frontend (React.js)

- **React.js (Vite)**
- **CSS (Gradient + Glassmorphism)**
- **Axios (For API requests)**

### Backend (Django)

- **Django REST Framework**
- **TMDB API Integration**
- **CORS Handling**

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/CodeMaverick-143/movie-search-app.git
cd movie-search-app
```

### 2️⃣ Backend (Django) Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

> Django will run on `http://127.0.0.1:8000/`

---

### 3️⃣ Frontend (React.js) Setup

```bash
cd movie_frontend
npm install
npm run dev
```

> React will run on `http://localhost:5173/`

---

## 🔌 API Configuration

1. Sign up at [TMDB](https://www.themoviedb.org/) and get your API key.  
2. Set up the Django backend to use your **API key** in `settings.py`:

```python
TMDB_API_KEY = "your_api_key_here"
```

---

## 🖥️ Folder Structure

```
movie-search-app/
│── backend/                  # Django Backend
│   ├── api/                  # API Logic
│   ├── settings.py           # Django Settings
│   ├── urls.py               # Backend Routes
│   └── views.py              # Movie Fetching Logic
│── movie_frontend/           # React Frontend
│   ├── src/                  
│   │   ├── components/       
│   │   │   ├── SearchMovies.jsx   
│   │   │   ├── MovieCard.jsx  
│   │   ├── styles/           
│   │   │   ├── SearchMovies.css   
│   │   ├── App.jsx           
│   ├── public/              
│   ├── index.html            
│── README.md                 # Documentation
│── requirements.txt          # Backend Dependencies
│── package.json              # Frontend Dependencies
```

---

## 📷 Screenshots

🎬 **Home Page**  
![Home Page](https://via.placeholder.com/600x300?text=Movie+Search+Home)

🔎 **Search Results**  
![Search Results](https://via.placeholder.com/600x300?text=Search+Results)

---

## 🌟 Future Improvements

- [ ] **Pagination** for better search results  
- [ ] **Movie Details Page** with trailers  
- [ ] **User Authentication** for favorites & reviews  

---

## 🛠️ Contributing

Want to improve this project? Follow these steps:  
1. **Fork** this repo  
2. **Create a new branch** (`git checkout -b feature-name`)  
3. **Make your changes** and commit (`git commit -m "Added feature"`)  
4. **Push to your fork** (`git push origin feature-name`)  
5. **Open a Pull Request** 🚀  

---

## 📜 License

This project is **open-source** and available under the **MIT License**.

---

## 📬 Contact

💼 **Arpit Sarang**  
🔗 [LinkedIn](https://www.linkedin.com/in/arpit-sarang-ab0b63320/)  
🐙 [GitHub](https://github.com/CodeMaverick-143)  
📧 **Email:** [nexawebs.tech@gmail.com](mailto:nexawebs.tech@gmail.com)  

---

🔥 **Made with ❤️ by Arpit Sarang** 🚀

## 🎬 Movie Search App

A sleek and modern movie search platform built with **React.js (Frontend)** and **Django (Backend)** using **TMDB API** to fetch movie data.

![Movie Search App Preview](https://via.placeholder.com/800x400?text=Movie+Search+App)

---

## 🚀 Features

- ✅ Search for movies in real-time using **The Movie Database (TMDB) API**
- ✅ **Clean & modern UI** with a **dark-light gradient theme**
- ✅ **Responsive design** for desktop and mobile
- ✅ **Movie details** with posters and descriptions
- ✅ **Smooth animations & hover effects**

---

## 🛠️ Tech Stack

### Frontend (React.js)

- **React.js (Vite)**
- **CSS (Gradient + Glassmorphism)**
- **Axios (For API requests)**

### Backend (Django)

- **Django REST Framework**
- **TMDB API Integration**
- **CORS Handling**

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/CodeMaverick-143/movie-search-app.git
cd movie-search-app
```

### 2️⃣ Backend (Django) Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

> Django will run on `http://127.0.0.1:8000/`

---

### 3️⃣ Frontend (React.js) Setup

```bash
cd movie_frontend
npm install
npm run dev
```

> React will run on `http://localhost:5173/`

---

## 🔌 API Configuration

1. Sign up at [TMDB](https://www.themoviedb.org/) and get your API key.  
2. Set up the Django backend to use your **API key** in `settings.py`:

```python
TMDB_API_KEY = "your_api_key_here"
```

---

## 🖥️ Folder Structure

```
movie-search-app/
│── backend/                  # Django Backend
│   ├── api/                  # API Logic
│   ├── settings.py           # Django Settings
│   ├── urls.py               # Backend Routes
│   └── views.py              # Movie Fetching Logic
│── movie_frontend/           # React Frontend
│   ├── src/                  
│   │   ├── components/       
│   │   │   ├── SearchMovies.jsx   
│   │   │   ├── MovieCard.jsx  
│   │   ├── styles/           
│   │   │   ├── SearchMovies.css   
│   │   ├── App.jsx           
│   ├── public/              
│   ├── index.html            
│── README.md                 # Documentation
│── requirements.txt          # Backend Dependencies
│── package.json              # Frontend Dependencies
```

---

## 📷 Screenshots

🎬 **Home Page**  
![Home Page](https://via.placeholder.com/600x300?text=Movie+Search+Home)

🔎 **Search Results**  
![Search Results](https://via.placeholder.com/600x300?text=Search+Results)

---

## 🌟 Future Improvements

- [ ] **Pagination** for better search results  
- [ ] **Movie Details Page** with trailers  
- [ ] **User Authentication** for favorites & reviews  

---

## 🛠️ Contributing

Want to improve this project? Follow these steps:  
1. **Fork** this repo  
2. **Create a new branch** (`git checkout -b feature-name`)  
3. **Make your changes** and commit (`git commit -m "Added feature"`)  
4. **Push to your fork** (`git push origin feature-name`)  
5. **Open a Pull Request** 🚀  

---

## 📜 License

This project is **open-source** and available under the **MIT License**.

---

## 📬 Contact

💼 **Arpit Sarang**  
🔗 [LinkedIn](https://www.linkedin.com/in/arpit-sarang-ab0b63320/)  
🐙 [GitHub](https://github.com/CodeMaverick-143)  
📧 **Email:** [nexawebs.tech@gmail.com](mailto:nexawebs.tech@gmail.com)  

---

🔥 **Made with ❤️ by Arpit Sarang** 🚀

