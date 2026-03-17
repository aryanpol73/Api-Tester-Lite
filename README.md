# API Tester Lite

API Tester Lite is a lightweight developer tool for testing HTTP APIs directly from the browser.
It allows developers to quickly send requests, inspect responses, and manage API testing workflows.

The project is built with **React + Vite (Frontend)** and **Node.js + Express (Backend)**.

---

## Features

* Send HTTP requests (GET, POST, PUT, DELETE)
* Custom request headers and body
* JSON response viewer
* Request history tracking
* Collections to organize saved requests
* Environment variable support
* Lightweight and fast interface
* Progressive Web App (PWA) support

---

## Tech Stack

Frontend

* React
* Vite
* JavaScript
* CSS

Backend

* Node.js
* Express
* Axios

Deployment

* Vercel (Frontend)
* Render / Railway / Serverless (Backend)

---

## Project Structure

```
api-tester-lite
│
├── Backend
│   ├── server.js
│   ├── package.json
│
├── Frontend
│   ├── src
│   │   ├── components
│   │   │   ├── RequestBuilder.jsx
│   │   │   └── ResponseViewer.jsx
│   │   ├── store
│   │   │   └── historyStore.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
```

---

## Installation

Clone the repository

```
git clone https://github.com/yourusername/api-tester-lite.git
```

Navigate into the project

```
cd api-tester-lite
```

---

### Install Backend

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

## Example API Test

Example request

```
GET https://jsonplaceholder.typicode.com/posts/1
```

Response

```
{
  "userId": 1,
  "id": 1,
  "title": "...",
  "body": "..."
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

## License

MIT License
