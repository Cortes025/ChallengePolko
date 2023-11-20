import React, { useState } from 'react';
import DataGrid from './Components/DataGrid/DataGrid';
import DataTableSelect from './Components/DataTableSelect/DataTableSelect';
import DataTableSummary from './Components/DataTableSummary/DataTableSummary';

import './App.css'

const App = () => {
  const [cart, setCart] = useState([]);
  const products = [
    {
      "id": 1,
      "producto": "Arroz Blanco",
      "cantidad": 1,
      "descripcion": "Arroz Blanco",
      "precioUnitario": 100
    },
    {
      "id": 2,
      "producto": "Gaseosa",
      "cantidad": 1,
      "descripcion": "Gaseosa",
      "precioUnitario": 80
    },
    {
      "id": 3,
      "producto": "Fernet",
      "cantidad": 1,
      "descripcion": "Fernet",
      "precioUnitario": 150
    },
    {
      "id": 4,
      "producto": "Pan",
      "cantidad": 1,
      "descripcion": "Pan",
      "precioUnitario": 25
    },
    {
      "id": 5,
      "producto": "Café",
      "cantidad": 1,
      "descripcion": "Café",
      "precioUnitario": 50
    }
  ]
  

  const handleSelectItem = (selectedProduct) => {
    const existingItem = cart.find((item) => item.id === selectedProduct.id);
  
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === selectedProduct.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...selectedProduct, cantidad: 1 }]);
    }
  };

  const handleRemoveItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  return (
    <div className='main-container'>
      <div className='main-top'>
        <DataGrid cart={cart} onRemoveItem={handleRemoveItem} Titulo={"Listado"} onIncreaseQuantity={handleIncreaseQuantity} onDecreaseQuantity={handleDecreaseQuantity}/>
      </div>
      <div className='main-bottom'>
        <div className='sector'>
          <h2>Seleccionar nuevo producto</h2>
          <DataTableSelect products={products} onSelectItem={handleSelectItem} />
        </div>
        <div className='sector'>
          <h2>Detalles de la compra</h2>
          <DataTableSummary cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default App;