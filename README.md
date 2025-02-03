# FAQ Management System

## Overview
This is a **FAQ Management System** built using **Node.js** and **Express.js** that supports multilingual FAQs, caching with Redis, and an admin panel for management. The API provides a fast and efficient way to retrieve FAQs in different languages with pre-translated responses.

## Features
- **CRUD Operations** for FAQs (Create, Read, Update, Delete)
- **Multilingual Support** using Google Translate API
- **WYSIWYG Editor** for rich-text answers
- **Caching Mechanism** using Redis for fast response
- **Admin Panel** for managing FAQs easily
- **Unit Testing** with Mocha/Chai
- **Docker Support** for easy deployment

# Folder Structure

    │── src/
    │   ├── models/
    │   │   ├── faq.model.js
    │   ├── routes/
    │   │   ├── faq.routes.js
    │   ├── controllers/
    │   │   ├── faq.controller.js
    │   ├── middleware/
    │   │   ├── cache.js
    │   ├── utils/
    │   │   ├── translate.js
    │   ├── config/
    │   │   ├── db.js
    │   │   ├── redis.js
    │   ├── admin.js
    │   ├── server.js
    │── .env
    │── .gitignore
    │── package.json
    │── README.md


## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Caching:** Redis
- **Translation:** Google Translate API
- **Testing:** Mocha, Chai
- **Admin Panel:** React.js (if applicable)
- **Deployment:** Docker, AWS/Heroku (optional)

---

## Installation

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14+ recommended)
- **MongoDB** (locally or use MongoDB Atlas)
- **Redis** (for caching)
- **Docker** (optional for containerization)

### Clone the Repository
```bash
git clone https://github.com/your-username/faq-management.git
cd faq-management
```

### Install Dependencies
```bash
npm install express mongoose dotenv redis axios cors admin-bro @admin-bro/express @admin-bro/mongoose

```

### Set Up Environment Variables
Create a **.env** file in the root directory.

Start the Server
      
    npm start


## API Endpoints

### 1. Get All FAQs
**GET /api/faqs?lang=en**
```json
Response:
{
  "success": true,
  "faqs": [
    {
      "question": "What is FAQ Management System?",
      "answer": "It helps manage FAQs efficiently.",
      "language": "en"
    }
  ]
}
```

### 2. Create a New FAQ
**POST /api/faqs**
```json
Request Body:
{
  "question": "What is an API?",
  "answer": "An API is a way for applications to communicate.",
  "language": "en"
}
```

### 3. Get a Specific FAQ
**GET /api/faqs/:id**

### 4. Update an FAQ
**PUT /api/faqs/:id**

### 5. Delete an FAQ
**DELETE /api/faqs/:id**

---

## Redis Caching
- Translations are cached in Redis for **faster retrieval**.
- Cache invalidates when an FAQ is updated or deleted.

---

## Running Tests
To run unit tests:

    npm test



