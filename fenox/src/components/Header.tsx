import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate();
  
  return (
    <header className="app-header">
      <div className="link-container">
        <Link to={"/empty"} className="first-link">Правила участия</Link>
        <Link to={"/empty"} className="second-link">Каталог подарков</Link>
        <Link to={"/empty"} className="third-link">Партнёры</Link>
      </div>
      <div className="center">
        <Link to={"/"}>
          <img src="/fenox.png" alt="Logo" />
        </Link>
      </div>
      <div className="right">
        <button className="sign-in-button" onClick={() => navigate("/empty")}>ВОЙТИ</button>
      </div>
    </header >
  )
}

export default Header;