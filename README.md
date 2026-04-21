# 🍳 AI Recipe Generator – Frontend

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-S3-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"/>
  <img src="https://img.shields.io/badge/Axios-HTTP-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>
</p>

<p align="center">
  🌐 Modern React frontend for an AI-powered recipe generation platform, deployed on AWS
</p>

---

## 🌟 Overview

The **AI Recipe Generator Frontend** is a modern, responsive React application that provides an intuitive interface for interacting with AI-powered backend services.

It allows users to:

- Generate recipes using AI
- Manage pantry items
- Plan meals and shopping lists

The application communicates with a REST API hosted on AWS EC2 and delivers a fast, scalable, and user-friendly experience.

---

## 🏗 Architecture

```text
User (Browser)
     ↓
React Frontend (Vite - AWS S3)
     ↓
REST API (Node.js, Express - Docker on EC2)
     ↓
Neon PostgreSQL Database
```

---

## 🚀 Features

- 🔐 **JWT-Based Authentication**
  Secure login and signup using JSON Web Tokens. Tokens are stored on the client and attached to API requests.

- 🤖 **AI Recipe Generation Interface**
  Interactive UI to generate recipes powered by backend AI (Gemini API).

- 🥫 **Pantry Management**
  Add, update, and track pantry items with real-time syncing via REST APIs.

- 📅 **Meal Planning Dashboard**
  Organise meals dynamically with real-time backend integration.

- 🛒 **Shopping List Generator**
  Automatically generate shopping lists based on pantry and meal plans.

- 🌐 **Cloud Deployment (AWS S3)**
  Hosted as a static website for high availability and scalability.

- ⚡ **API Integration (Axios)**
  Efficient communication with backend services deployed on AWS EC2.

- 📦 **Optimised Build (Vite)**
  Fast development and high-performance production builds.

---

## 🛠 Tech Stack

- 🎨 **Frontend:** React (Vite)
- 🔗 **API Communication:** Axios
- ☁️ **Hosting:** AWS S3 (Static Website Hosting)
- ⚙️ **Backend:** Node.js (Express, Docker on EC2)
- 🗄️ **Database:** Neon PostgreSQL

---

## 📸 Screenshots

_Add real screenshots to improve recruiter visibility_

```markdown
![Home Page](./screenshots/home.png)
![Dashboard](./screenshots/dashboard.png)
```

---

## 🌐 Live Website

👉 http://ai-recipe-generator-frontend-sai123.s3-website-ap-southeast-2.amazonaws.com

---

## ⚙️ Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://<EC2-IP>:8000/api
```

---

## 💻 Run Locally

```bash
npm install
npm run dev
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## ☁️ Deployment

- 🚀 Hosted on AWS S3 (Static Website Hosting)
- 🌍 Accessible globally via public URL
- 🔗 Connected to backend API on EC2
- 🐳 Backend containerised using Docker

---

## 🔗 Backend API

```text
http://<EC2-IP>:8000/api
```

---

## 🔮 Future Improvements

- 🌍 Add AWS CloudFront (CDN) for better performance
- 🔒 Enable HTTPS (SSL)
- 🔁 Implement CI/CD (GitHub Actions)
- 📱 Improve mobile responsiveness and UX
- 🧠 Enhance AI capabilities with better prompts

---

## 🧠 Key Learnings

- Built a scalable frontend using React and Vite
- Integrated REST APIs with JWT-based authentication
- Deployed a production-ready frontend on AWS S3
- Connected frontend with a Dockerised backend on EC2
- Designed UI for AI-powered dynamic content

---

## 👨‍💻 Author

**Sai Chaitanya**

- 📍 Sydney, Australia
- 💼 Open to opportunities
- 🔗 LinkedIn: https://www.linkedin.com/in/sai-chaitanya-73b598284/
- 💻 GitHub: https://github.com/sai02-creator

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
