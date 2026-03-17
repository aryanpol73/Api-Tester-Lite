# API Tester Lite

API Tester Lite is a lightweight developer tool for testing HTTP APIs directly from the browser.
It allows developers to quickly send requests, inspect responses, and manage API testing workflows.

The project is built with **React + Vite (Frontend)** and **Node.js + Express (Backend)**.

---

## Features

- ⚡ Send HTTP requests (GET, POST, PUT, DELETE)
- 🌍 Environment variables support (`{{baseUrl}}`)
- 🧾 JSON request body handling
- 📂 Collections to save APIs
- 🕘 Request history tracking
- 📊 Response viewer with status & response time
- 📱 Installable as a Progressive Web App (PWA)
- 🚀 Fast and lightweight interface

---

## Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Tailwind CSS
- Zustand (state management)
- Axios
- vite-plugin-pwa

### Backend
- Node.js
- Express
- Axios

## 🌐 Live Demo

- 🔗 Frontend: https://api-tester-lite.vercel.app  
- 🔗 Backend: https://api-tester-lite.onrender.com  

---

## Project Structure

```
API-Tester-Lite/
│
├── Backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules
│
├── Frontend/
│   ├── public/
│   │   ├── apitester-icon-192.png
│   │   ├── apitester-icon-512.png
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── RequestBuilder.jsx
│   │   │   ├── ResponseViewer.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── store/
│   │   │   ├── collectionStore.js
│   │   │   ├── environmentStore.js
│   │   │   └── historyStore.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── node_modules
│
├── .gitignore
├── README.md
```

---

## Installation

Clone the repository

```
git clone https://github.com/aryanpol73/Api-Tester-Lite.git
cd Api-Tester-Lite
```

---

### Backend Setup

```
cd Backend
npm install
npm start
```

Backend runs on

```
http://localhost:5000
```

---

### Install Frontend

```
cd Frontend
npm install
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## 🚀 Live Demo
https://api-tester-lite.vercel.app

## 📸 Screenshots

### Main API Testing
<img width="1871" height="1081" alt="Api-Tester-Lite-image1" src="https://github.com/user-attachments/assets/4ed34c90-ab75-4fab-abc0-f6774d706c5f" />

### POST Request Example 
<img width="1907" height="982" alt="Api-Tester-Lite-image2" src="https://github.com/user-attachments/assets/2349fdb4-16e4-4dad-bde4-d9089a45a1da" />


## 💡 Why I built this
To deeply understand:
-API workflows
-Frontend ↔ Backend communication
-State management (Zustand)
-Deployment (Vercel + Render)
-Progressive Web Apps (PWA)

## Example API Test

Example request
You can test the tool using a public API like JSONPlaceholder.
### 🔹 GET Request
```
GET https://jsonplaceholder.typicode.com/posts
```
### 🔹 POST Request
```
POST https://jsonplaceholder.typicode.com/posts


**Body**
```json
{
  "title": "test",
  "body": "hello world",
  "userId": 1
}
```
### Environmental Variables
```
Add a variable:
baseUrl = https://jsonplaceholder.typicode.com

Then use:
{{baseUrl}}/posts

Response:
{
  "title": "test",
  "body": "hello world",
  "userId": 1,
  "id": 101
}
```
---

## Deployment

Frontend can be deployed on **Vercel**.

Backend can be deployed on:

* Render
* Railway
* Vercel Serverless Functions

---

## Use Cases

* Testing REST APIs
* Debugging backend services
* Learning HTTP request structure
* Lightweight Postman alternative

---

## Future Improvements

* GraphQL request support
* Request collections export/import
* OAuth authentication
* Team workspaces
* Response time analytics

---


