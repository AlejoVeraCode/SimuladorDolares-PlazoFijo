import { NavLink } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Calculadora de dolares a pesos</NavLink>
          </li>
          <li>
            <NavLink to="/history">Historial de aumento</NavLink>
          </li>
          <li>
            <NavLink to="/simulator">Simulador plazo Fijo</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
