import styles from "./Table.module.css";

const TableComponent = () => {
  // Define los datos de la tabla
  const tableData = [
    { month: "Enero 2021", porcentaje: "1.7%" },
    { month: "Febrero 2021", porcentaje: "2.3%" },
    { month: "Marzo 2021", porcentaje: "3.1%" },
    { month: "Abril 2021", porcentaje: "3.8%" },
    { month: "Mayo 2021", porcentaje: "4.6%" },
    { month: "Junio 2021", porcentaje: "5.3%" },
    { month: "Julio 2021", porcentaje: "6.1%" },
    { month: "Agosto 2021", porcentaje: "6.9%" },
    { month: "Septiembre 2021", porcentaje: "7.6%" },
    { month: "Octubre 2021", porcentaje: "8.4%" },
    { month: "Noviembre 2021", porcentaje: "9.1%" },
    { month: "Diciembre 2021", porcentaje: "9.9%" },
    { month: "Enero 2022", porcentaje: "10.6%" },
    { month: "Febrero 2022", porcentaje: "11.4%" },
    { month: "Marzo 2022", porcentaje: "12.1%" },
    { month: "Abril 2022", porcentaje: "12.9%" },
    { month: "Mayo 2022", porcentaje: "13.6%" },
    { month: "Junio 2022", porcentaje: "14.3%" },
    { month: "Julio 2022", porcentaje: "15.0%" },
    { month: "Agosto 2022", porcentaje: "15.7%" },
    { month: "Septiembre 2022", porcentaje: "16.4%" },
    { month: "Octubre 2022", porcentaje: "17.1%" },
    { month: "Noviembre 2022", porcentaje: "17.8%" },
    { month: "Diciembre 2022", porcentaje: "18.5%" },
    { month: "Enero 2023", porcentaje: "19.2%" },
    { month: "Febrero 2023", porcentaje: "19.9%" },
    { month: "Marzo 2023", porcentaje: "20.6%" },
    { month: "Abril 2023", porcentaje: "21.3%" },
    { month: "Mayo 2023", porcentaje: "22.0%" },
  ];

  return (
    // Contenedor de la tabla
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Mes</th>
            <th>Incremento porcentual $USD respecto al mes anterior</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapea los datos de la tabla y crea una fila por cada elemento */}
          {tableData.map((data, index) => (
            <tr key={index}>
              {/* Celda para el mes */}
              <td>{data.month}</td>
              {/* Celda para el incremento porcentual */}
              <td>{data.porcentaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
