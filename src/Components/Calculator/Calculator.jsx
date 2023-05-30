import React, { useState } from "react";
import "../../App.css";

const Calculator = () => {
  // Definimos los estados iniciales utilizando el hook useState
  const [dollarAmount, setDollarAmount] = useState(0); // Estado para almacenar el monto en dólares
  const [conversionRate, setConversionRate] = useState(0); // Estado para almacenar el tipo de cambio
  const [pesoAmount, setPesoAmount] = useState(0); // Estado para almacenar el monto en pesos
  const [additionalTax, setAdditionalTax] = useState(0); // Estado para almacenar el impuesto adicional

  // Definimos la clave de la API y la URL para obtener el tipo de cambio
  const apiKey = "CSMOQOM9QS0KGI8E";
  const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=ARS&apikey=${apiKey}`;

  // Función asincrónica para obtener el tipo de cambio de la API
  const fetchConversionRate = async () => {
    try {
      const response = await fetch(url); // Realizamos la petición a la API
      const data = await response.json(); // Convertimos la respuesta a formato JSON
      const rate = parseFloat(
        data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
      ); // Obtenemos el tipo de cambio de los datos
      setConversionRate(rate); // Actualizamos el estado del tipo de cambio
    } catch (error) {
      console.error("Error fetching conversion rate:", error); // Mostramos un mensaje de error si la petición falla
    }
  };

  // Manejador del evento de envío del formulario
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Evitamos el comportamiento predeterminado de envío del formulario
    fetchConversionRate(); // Obtenemos el tipo de cambio desde la API
    setPesoAmount(dollarAmount * conversionRate); // Calculamos y actualizamos el monto en pesos
    calculateAdditionalTax(dollarAmount); // Calculamos el impuesto adicional
  };

  // Manejador del cambio en el campo de monto en dólares
  const handleDollarChange = (event) => {
    const amount = parseFloat(event.target.value); // Obtenemos el valor numérico del campo
    setDollarAmount(amount); // Actualizamos el estado del monto en dólares
  };

  // Función para calcular el impuesto adicional
  const calculateAdditionalTax = (amount) => {
    if (amount > 300) {
      const additionalTaxAmount = amount * conversionRate * 1.75 * 0.25; // Calculamos el impuesto adicional
      setAdditionalTax(additionalTaxAmount); // Actualizamos el estado del impuesto adicional
    } else {
      setAdditionalTax(0); // Si el monto es menor o igual a 300, el impuesto adicional es cero
    }
  };

  const showAdditionalTaxColumn = dollarAmount > 300; // Variable para determinar si se muestra la columna de impuesto adicional

  return (
    <div className="CalculatorContainer">
      <h1 className="CalculatorTitle">Calculadora de Conversión</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="number"
          className="CalculatorInput"
          value={dollarAmount}
          onChange={handleDollarChange}
        />
        <button type="submit">Calcular</button>
      </form>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Valor de Conversión</th>
              <th>Valor + Impuesto Retiro en Efectivo</th>
              <th>Valor + Impuesto Plataformas Digitales</th>
              {showAdditionalTaxColumn && (
                <th>Valor + Impuesto Bienes Personales</th>
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{conversionRate.toFixed(2)}</td>
              <td>{(dollarAmount * conversionRate * 1.75).toFixed(2)}</td>
              <td>{(dollarAmount * conversionRate * 1.74).toFixed(2)}</td>
              {showAdditionalTaxColumn && (
                <td>
                  {(
                    dollarAmount * conversionRate * 1.75 +
                    additionalTax
                  ).toFixed(2)}
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
