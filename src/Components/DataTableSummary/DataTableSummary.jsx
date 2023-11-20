import React from 'react';

const DataTableSummary = ({ cart }) => {
  const totalAmount = cart.reduce((total, item) => total + item.cantidad, 0);
  const totalPrice = cart.reduce((total, item) => total + item.precioUnitario * item.cantidad, 0);

  return (
    <table>
      <thead>
        <tr>
          <th>Total de Productos</th>
          <th>Precio Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{totalAmount}</td>
          <td>${totalPrice}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DataTableSummary