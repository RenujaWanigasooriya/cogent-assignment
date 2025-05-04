
# 🚀 Cogent Assignment

This is a modern, mobile-friendly React + NodeJS + MySQL + CSS recreation of the Cogent Solutions event landing page: 
**[Reimagine Banking with Finastra](https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/)**

---

## ✨ Features

- Responsive React components
- Styled using CSS
- Event agenda and overview sections
- Contact form (MySQL)
- Smooth transitions and clean layout

---

## Folder Structure

```
/src
  /Screenshots
  /Backend
    /routes
      -contact.js
    -.env
    -db.js
    -package-lock.json
    -package.json
    -server.js
  /Frontend
    /public
      -images
    /src
      /components
        -AboutEvent.js
        -AboutFinastra.js
        -Agenda.js
        -Banner.js
        -Footer.js
        -Navbar.js
        -RegistrationForm.js
        -Speaker.js
        -TopReasons.js
      /css
        -AboutEvent.css
        -AboutFinastra.css
        -Agenda.css
        -Banner.css
        -Footer.css
        -Navbar.css
        -RegistrationForm.css
        -Speaker.css
        -TopReasons.css
      /images
      -App.js
      -App.css
      -index.css
      -index.js


```
---

## 📸 Screenshots

> Add your screenshots below inside a `/screenshots` folder:

- ![Screenshot 1](./screenshots/1s.png)
- ![Screenshot 1](./screenshots/2s.png)
- ![Screenshot 1](./screenshots/3s.png)
- ![Screenshot 1](./screenshots/4s.png)
- ![Screenshot 1](./screenshots/5s.png)
- ![Screenshot 1](./screenshots/6s.png)
- ![Screenshot 1](./screenshots/7s.png)
- ![Screenshot 1](./screenshots/8s.png)
- ![Screenshot 1](./screenshots/9s.png)
- ![Screenshot 1](./screenshots/10s.png)

---

## 🛠️ Technologies Used

- React
- CSS
- NodeJS
- MySQL

---

## ⚙️ Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/RenujaWanigasooriya/cogent-assignment
   Open two terminals
   cd Frontend (in the 1st terminal)
   cd Backend (in the 2nd terminal)
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the app:
   ```bash
   npm start
   ```
4. Change the .env file with MySQL configurations
---
##  🛠️ MySQL Table Setup
```bash
CREATE DATABASE IF NOT EXISTS contact_db;

USE contact_db;

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  message TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
---

## 🧯 Fix for `ERR_OSSL_EVP_UNSUPPORTED` Error (Node.js + Webpack Issue)

If you see this error while running `npm start`:

```
Error: error:0308010C:digital envelope routines::unsupported
```

### ✅ Solution:

#### Option 1: Use Node with legacy OpenSSL support

For Windows:
```bash
set NODE_OPTIONS=--openssl-legacy-provider && npm start
```

For macOS/Linux:
```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

#### Option 2: Add `.env` File

1. Create a `.env` file in the root of your project
2. Add this line:
   ```
   NODE_OPTIONS=--openssl-legacy-provider
   ```

Then run:
```bash
npm start
```

---

## 🧾 License

This project is for assignment purposes only.
