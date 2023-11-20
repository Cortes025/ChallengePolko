import React from 'react';
import './DataTableSelect'

const DataTableSelect = ({ products, onSelectItem }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio Unitario</th>
          <th>Seleccionar</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.producto}</td>
            <td>${product.precioUnitario}</td>
            <td>
              <button onClick={() => onSelectItem(product)}>Seleccionar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTableSelect