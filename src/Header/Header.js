import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => (
    <div className="header-container">
        <Link to="/">Products</Link>
        <Link to="/add">Add Product</Link>
    </div>
);
