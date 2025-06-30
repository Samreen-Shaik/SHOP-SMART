import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="hero-section">
        <nav className="navbar">
          <div className="nav-brand">
            <h1>🛒 SHOP-SMART</h1>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#demo">Demo</a>
            <a href="#tech">Technology</a>
          </div>
        </nav>
        
        <div className="hero-content">
          <h1>Your Complete Grocery Shopping Solution</h1>
          <p>A full-stack MERN application with separate user and admin interfaces</p>
          <div className="hero-buttons">
            <button className="btn-primary">View User Interface</button>
            <button className="btn-secondary">View Admin Panel</button>
          </div>
        </div>
      </header>

      <section id="features" className="features-section">
        <div className="container">
          <h2>Application Overview</h2>
          
          <div className="architecture-grid">
            <div className="arch-card frontend">
              <h3>🎨 Frontend (React)</h3>
              <ul>
                <li>User Interface for shopping</li>
                <li>Admin Dashboard for management</li>
                <li>Responsive design with Bootstrap</li>
                <li>Styled Components for custom styling</li>
                <li>Protected routes with authentication</li>
              </ul>
            </div>
            
            <div className="arch-card backend">
              <h3>⚙️ Backend (Node.js + Express)</h3>
              <ul>
                <li>RESTful API endpoints</li>
                <li>JWT authentication</li>
                <li>Password hashing with bcrypt</li>
                <li>CORS enabled</li>
                <li>Comprehensive error handling</li>
              </ul>
            </div>
            
            <div className="arch-card database">
              <h3>🗄️ Database (MongoDB)</h3>
              <ul>
                <li>User & Admin collections</li>
                <li>Products & Categories</li>
                <li>Orders & Payments</li>
                <li>Shopping Cart & Feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="demo-section">
        <div className="container">
          <h2>Key Features</h2>
          
          <div className="features-grid">
            <div className="feature-card user-features">
              <h3>👤 User Features</h3>
              <div className="feature-list">
                <div className="feature-item">
                  <strong>🔐 Authentication</strong>
                  <p>Secure login/signup with JWT tokens</p>
                </div>
                <div className="feature-item">
                  <strong>🛍️ Product Browsing</strong>
                  <p>Search and filter products by category</p>
                </div>
                <div className="feature-item">
                  <strong>🛒 Shopping Cart</strong>
                  <p>Add/remove items, manage quantities</p>
                </div>
                <div className="feature-item">
                  <strong>📦 Order Management</strong>
                  <p>Place orders, track status, view history</p>
                </div>
                <div className="feature-item">
                  <strong>💳 Payment Options</strong>
                  <p>COD, Credit/Debit card support</p>
                </div>
              </div>
            </div>
            
            <div className="feature-card admin-features">
              <h3>👨‍💼 Admin Features</h3>
              <div className="feature-list">
                <div className="feature-item">
                  <strong>📊 Dashboard</strong>
                  <p>Overview of products, users, orders</p>
                </div>
                <div className="feature-item">
                  <strong>📝 Product Management</strong>
                  <p>Add, edit, delete products</p>
                </div>
                <div className="feature-item">
                  <strong>📂 Category Management</strong>
                  <p>Organize products by categories</p>
                </div>
                <div className="feature-item">
                  <strong>📋 Order Processing</strong>
                  <p>Update order status, manage deliveries</p>
                </div>
                <div className="feature-item">
                  <strong>👥 User Management</strong>
                  <p>View and manage user accounts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="tech-section">
        <div className="container">
          <h2>Technology Stack</h2>
          
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-tags">
                <span className="tech-tag react">React 18</span>
                <span className="tech-tag">React Router</span>
                <span className="tech-tag">Bootstrap 5</span>
                <span className="tech-tag">Styled Components</span>
                <span className="tech-tag">Axios</span>
                <span className="tech-tag">JS Cookies</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-tags">
                <span className="tech-tag node">Node.js</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">JWT</span>
                <span className="tech-tag">Bcrypt</span>
                <span className="tech-tag">CORS</span>
                <span className="tech-tag">Nodemon</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Database</h3>
              <div className="tech-tags">
                <span className="tech-tag mongo">MongoDB</span>
                <span className="tech-tag">Mongoose</span>
                <span className="tech-tag">MongoDB Atlas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="api-section">
        <div className="container">
          <h2>API Endpoints Overview</h2>
          
          <div className="api-grid">
            <div className="api-category">
              <h3>🔐 Authentication</h3>
              <div className="endpoint">POST /login</div>
              <div className="endpoint">POST /register</div>
              <div className="endpoint">POST /adminlogin</div>
              <div className="endpoint">POST /adminregister</div>
            </div>
            
            <div className="api-category">
              <h3>🛍️ Products</h3>
              <div className="endpoint">GET /products</div>
              <div className="endpoint">POST /add-products</div>
              <div className="endpoint">PUT /products/:id</div>
              <div className="endpoint">DELETE /products/:id</div>
            </div>
            
            <div className="api-category">
              <h3>📦 Orders</h3>
              <div className="endpoint">GET /orders</div>
              <div className="endpoint">POST /orders</div>
              <div className="endpoint">PUT /orders/:id</div>
              <div className="endpoint">GET /my-orders/:id</div>
            </div>
            
            <div className="api-category">
              <h3>🛒 Cart</h3>
              <div className="endpoint">POST /add-to-cart</div>
              <div className="endpoint">GET /cart/:id</div>
              <div className="endpoint">DELETE /remove-from-cart/:id</div>
            </div>
          </div>
        </div>
      </section>

      <section className="database-section">
        <div className="container">
          <h2>Database Schema</h2>
          
          <div className="schema-grid">
            <div className="schema-card">
              <h4>Users Collection</h4>
              <ul>
                <li>firstname, lastname</li>
                <li>username (unique)</li>
                <li>email, password</li>
              </ul>
            </div>
            
            <div className="schema-card">
              <h4>Products Collection</h4>
              <ul>
                <li>productname, description</li>
                <li>price, image, category</li>
                <li>countInStock, rating</li>
                <li>dateCreated</li>
              </ul>
            </div>
            
            <div className="schema-card">
              <h4>Orders Collection</h4>
              <ul>
                <li>user, productId</li>
                <li>quantity, price</li>
                <li>status, paymentMethod</li>
                <li>address, createdAt</li>
              </ul>
            </div>
            
            <div className="schema-card">
              <h4>Categories Collection</h4>
              <ul>
                <li>category (unique)</li>
                <li>description</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 SHOP-SMART Grocery Web Application. A comprehensive MERN stack e-commerce solution.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;