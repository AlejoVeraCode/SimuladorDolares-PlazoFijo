import React, { useState } from "react";
import "../../App.css";

const SimuladorPlazoFijo = () => {
  // Estado para el monto inicial
  const [montoInicial, setMontoInicial] = useState(0);

  // Estado para la tasa de interés anual
  const [tasaInteresAnual, setTasaInteresAnual] = useState(0);

  // Estado para almacenar los resultados del cálculo
  const [resultados, setResultados] = useState([]);

  // Función para calcular el plazo fijo
  const calcularPlazoFijo = () => {
    const tasaInteresMensual = tasaInteresAnual / 12 / 100;
    let monto = montoInicial;
    const nuevosResultados = [];

    for (let mes = 1; mes <= 12; mes++) {
      const interes = monto * tasaInteresMensual;
      const montoTotal = monto + interes;

      nuevosResultados.push({
        mes,
        montoInicial: monto,
        interes,
        montoTotal,
      });

      monto = montoTotal;
    }

    setResultados(nuevosResultados);
  };

  // Manejador de cambio para el input de monto inicial
  const handleMontoInicialChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setMontoInicial(0); // Establecer el valor predeterminado cuando no es un número válido
    } else {
      setMontoInicial(value);
    }
  };

  // Manejador de cambio para el input de tasa de interés anual
  const handleTasaInteresAnualChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setTasaInteresAnual(0); // Establecer el valor predeterminado cuando no es un número válido
    } else {
      setTasaInteresAnual(value);
    }
  };

  return (
    <div className="SimulatorContainer">
      <h1 className="SimulatorTitle">Simulador de Plazo Fijo</h1>
      <br/>
      <h3>Modo de uso: Ingresar el valor en pesos que depositaremos en el plazo fijo e ingresar el TNA que nos dara el banco. Ej: 50000$ y la TNA en Argentina es de 97%</h3>
      <div>
        <label className="SimulatorLabel">Monto inicial:</label>
        <input
          type="number"
          className="SimulatorInput"
          placeholder="Ingresar monto inicial"
          value={montoInicial}
          onChange={(e) => setMontoInicial(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label className="SimulatorLabel">Tasa de interés anual:</label>
        <input
          type="number"
          className="SimulatorInput"
          placeholder="Tasa sugerida Argentina 97%"
          value={tasaInteresAnual}
          onChange={(e) => setTasaInteresAnual(parseFloat(e.target.value))}
        />
      </div>
      <button className="button" onClick={calcularPlazoFijo}>
        Calcular
      </button>
      {resultados.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Mes</th>
              <th>Monto Inicial</th>
              <th>Interés</th>
              <th>Monto Total</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((resultado) => (
              <tr key={resultado.mes}>
                <td>{resultado.mes}</td>
                <td>{resultado.montoInicial.toFixed(2)}</td>
                <td>{resultado.interes.toFixed(2)}</td>
                <td>{resultado.montoTotal.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SimuladorPlazoFijo;

