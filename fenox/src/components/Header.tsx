import { Link } from "react-router-dom";
import "../styles/Header.css";
function Header() {
  return (
    <header className="app-header">
      <div className="link-container">
        <Link to={"#"} className="first-link">Правила участия</Link>
        <Link to={"#"} className="second-link">Каталог подарков</Link>
        <Link to={"#"}className="third-link">Партнёры</Link>
      </div>
      <div className="center">
        <img src="/fenox.png" alt="Logo" />
      </div>
      <div className="right">
        <button className="sign-in-button">Войти</button>
      </div>
    </header>
  )
}

export default Header;