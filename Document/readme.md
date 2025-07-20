SHOPSMART: YOUR DIGITAL GROCERY STORE

DESCRIPTION

ShopSmart is a modern full-stack web application that delivers a smooth and efficient digital grocery shopping experience. Customers can explore grocery items by category, view product details, add items to their cart, and complete secure purchases. The platform also supports admin functionality for managing products and inventory (with future scope for seller-specific panels).

Built with React, Tailwind CSS, Node.js, Express, and MongoDB, ShopSmart is designed to be scalable, responsive, and easy to maintain.



TECH STACK

Technology       - Purpose
React            - Frontend UI
Tailwind CSS     - Responsive styling
Vite             - React build tool (for fast dev)
Axios            - HTTP client for API requests
Node.js          - Server-side JavaScript runtime
Express.js       - Backend API framework
MongoDB          - NoSQL database
Mongoose         - MongoDB object modeling tool



FOLDER STRUCTURE

grocery-aisle-digital-hub-main/
│
├── frontend/                → Frontend (React)
│   ├── src/
│   │   ├── components/    → Reusable UI components (Header, Footer)
│   │   ├── contexts/      → Cart context API
│   │   ├── pages/         → App pages (Home, Cart, etc.)
│   │   ├── data/          → Sample product data (optional)
│   │   └── main.tsx       → Entry point
│
├── backend/               → Backend (Node.js + Express)
│   ├── models/            → Mongoose models (Product, etc.)
│   ├── routes/            → API route handlers
│   ├── scripts/           → DB seeding scripts
│   ├── data/              → Seed data (JSON)
│   └── server.js          → Main server file



FEATURES

FOR USERS
- Browse 25–30 grocery items across categories
- Filter and sort products by name or price
- Add items to cart with real-time feedback
- View product image, unit, discount, and description

FOR ADMINS
- Add, update, or delete products (future scope)
- View inventory stats and sales insights (future scope)



TECH HIGHLIGHTS

- Global cart state using React Context API
- RESTful API with Express.js and MongoDB
- Product database population via seeding script (seed.js)
- Responsive design using Tailwind CSS
- Clean, modular codebase for easy collaboration



GETTING STARTED

CLONE THE REPOSITORY

git clone https://github.com/Samreen-Shaik/SHOP-SMART.git
cd grocery-aisle-digital-hub-main



BACKEND SETUP

cd backend
npm install

Seed database:
node scripts/seed.js

Start server:
node server.js

API runs at: http://localhost:5000/api/products



FRONTEND SETUP

cd client
npm install
npm run dev

App runs at: http://localhost:5173



FUTURE IMPROVEMENTS

- User authentication with JWT
- Admin panel for product and order management
- Payment gateway integration
- Product ratings and reviews
- Order history and tracking



DEMO VIDEO


[![Watch on YouTube](https://youtu.be/pP_LloCau5k?si=QTlk-CrgGu0ngZ8N)



