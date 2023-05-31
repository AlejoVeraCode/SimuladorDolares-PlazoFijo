import styles from "./Table.module.css";
import { data } from "../../Data/data.js";

const TableComponent = () => {
  return (
    // Contenedor de la tabla
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Año</th>
            <th>Mes</th>
            <th>Incremento porcentual $USD respecto al mes anterior</th>
            <th>Precio al 1 de cada mes</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapea los datos de la tabla y crea una fila por cada elemento */}
          {data.map((data, index) => (
            <tr key={index}>
              {/* Celda para el mes */}
              <td>{data.year}</td>
              <td>{data.month}</td>
              
              {/* Celda para el incremento porcentual */}
              <td>{data.percentage}</td>
              <td>{data.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

