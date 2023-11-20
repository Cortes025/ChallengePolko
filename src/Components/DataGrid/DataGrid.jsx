import React, { useState } from 'react';
import './DataGrid.css'

const DataGrid = ({ cart, onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }) => {
  return (
    <table>
      <thead>
        <tr>
          <th style ={{textAlign: "center"}}>Cantidad</th>
          <th>Producto</th>
          <th>Precio Unitario</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.id}>
            <td style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
              {item.cantidad}
              <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
            </td>
            <td>{item.producto}</td>
            <td>${item.precioUnitario}</td>
            <td>${item.precioUnitario * item.cantidad}</td>
            <td style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <button onClick={() => onRemoveItem(item.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataGrid