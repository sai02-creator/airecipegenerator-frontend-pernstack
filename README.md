# 🍳 AI Recipe Generator – Frontend

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-S3-orange?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
  <img src="https://img.shields.io/badge/Axios-HTTP-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>
</p>

<p align="center">
  🌐 Modern React frontend for AI-powered recipe generation with cloud deployment
</p>

---

## 🌟 Overview

The **AI Recipe Generator Frontend** is a responsive web application that allows users to interact with the backend API to generate recipes using AI, manage pantry items, and plan meals.

It communicates with a REST API hosted on AWS EC2 and delivers a seamless user experience.

---

## 🏗 Architecture

```text id="2sz5zq"
Browser → React App (S3) → Backend API (EC2 Docker) → Neon PostgreSQL
```

---

## 🚀 Features

- 🔐 User Authentication (Login / Signup)
- 🤖 AI Recipe Generation UI
- 🥫 Pantry Management Interface
- 📅 Meal Planning Dashboard
- 🛒 Shopping List UI
- ⚡ Fast and responsive UI

---

## 🛠 Tech Stack

**Frontend:** React (Vite)
**API Communication:** Axios
**Hosting:** AWS S3
**Integration:** REST API (Node.js backend)

---

## 🌐 Live Website

👉 http://ai-recipe-generator-frontend-sai123.s3-website-ap-southeast-2.amazonaws.com

---

## ⚙️ Environment Variables

Create a `.env` file:

```env id="9tw3nn"
VITE_API_URL=http://<EC2-IP>:8000/api
```

---

## 💻 Run Locally

```bash id="5u3mx9"
npm install
npm run dev
```

---

## 📦 Build for Production

```bash id="r6a3aa"
npm run build
```

---

## ☁️ Deployment

- 🚀 Hosted on AWS S3
- 🌍 Served via static website hosting
- 🔗 Connected to backend API on EC2

---

## 🔗 Backend Connection

The frontend communicates with the backend API:

```text id="v02s2v"
http://<EC2-IP>:8000/api
```

---

---

## 👨‍💻 Author

**Sai Chaitanya**

- 🌐 Sydney, Australia
- 💼 Open to opportunities

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
