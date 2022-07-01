import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Header/Header';
import { AddProducts } from './Products/AddProducts';
import { ProductList } from './Products/ProductList';

export function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/add" element={<AddProducts />} />
            </Routes>
        </div>
    );
}
