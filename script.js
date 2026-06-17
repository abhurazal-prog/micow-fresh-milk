/* Mi CoW Fresh Milk - style.css */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f9ff;
    color: #333;
    line-height: 1.6;
}

/* Header */

header {
    background: #0d6efd;
    color: white;
    padding: 15px 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.logo {
    display: flex;
    align-items: center;
    gap: 15px;
}

.logo img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: white;
}

.logo h1 {
    font-size: 28px;
}

.logo p {
    font-size: 14px;
}

/* Navigation */

nav {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    text-decoration: underline;
}

/* Hero */

.hero {
    background: linear-gradient(to right, #d8ecff, #ffffff);

    text-align: center;

    padding: 80px 20px;
}

.hero h2 {
    font-size: 40px;
    color: #0d6efd;
    margin-bottom: 15px;
}

.hero p {
    font-size: 18px;
    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.btn-primary,
.btn-whatsapp {
    padding: 12px 25px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
}

.btn-primary {
    background: #0d6efd;
    color: white;
}

.btn-primary:hover {
    background: #0b5ed7;
}

.btn-whatsapp {
    background: #25d366;
    color: white;
}

.btn-whatsapp:hover {
    background: #1ebe5b;
}

/* Sections */

.products-section,
.about,
.delivery,
.contact,
.cart-section {
    padding: 60px 20px;
    text-align: center;
}

.products-section h2,
.about h2,
.delivery h2,
.contact h2,
.cart-section h2 {
    color: #0d6efd;
    margin-bottom: 30px;
}

/* Products */

.products {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.product {
    background: white;
    width: 280px;

    border-radius: 15px;

    padding: 20px;

    box-shadow: 0 5px 20px rgba(0,0,0,0.1);

    transition: 0.3s;
}

.product:hover {
    transform: translateY(-8px);
}

.product img {
    width: 100%;
    height: 250px;
    object-fit: contain;
}

.product h3 {
    margin-top: 15px;
}

.size {
    color: #666;
}

.price {
    color: #0d6efd;
    font-size: 26px;
    font-weight: bold;
    margin: 15px 0;
}

.buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.buttons button,
.buttons a {
    border: none;
    padding: 12px;

    border-radius: 8px;

    text-decoration: none;
    font-weight: bold;

    cursor: pointer;
}

.buttons button {
    background: #0d6efd;
    color: white;
}

.buttons button:hover {
    background: #0b5ed7;
}

.buttons a {
    background: #25d366;
    color: white;
}

.buttons a:hover {
    background: #1ebe5b;
}

/* Cart */

#cart-items {
    background: white;

    max-width: 500px;

    margin: auto;

    padding: 20px;

    border-radius: 10px;

    box-shadow: 0 3px 15px rgba(0,0,0,0.1);

    margin-bottom: 20px;
}

/* Delivery */

.delivery ul {
    list-style: none;
}

.delivery li {
    margin: 10px 0;
}

/* Footer */

footer {
    background: #0d6efd;
    color: white;

    text-align: center;

    padding: 25px;
}

/* Floating WhatsApp */

.whatsapp-float {
    position: fixed;

    right: 20px;
    bottom: 20px;

    width: 60px;
    height: 60px;

    background: #25d366;
    color: white;

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 30px;

    text-decoration: none;

    box-shadow: 0 5px 20px rgba(0,0,0,0.2);

    z-index: 999;
}

.whatsapp-float:hover {
    transform: scale(1.1);
}

/* Mobile */

@media (max-width: 768px) {

    header {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }

    nav {
        justify-content: center;
    }

    .hero h2 {
        font-size: 30px;
    }

    .products {
        flex-direction: column;
        align-items: center;
    }
}