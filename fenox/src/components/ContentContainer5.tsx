import { useNavigate } from "react-router-dom";
import "../styles/ContentContainer5.css";

function ContentContainer5() {
  const navigate = useNavigate();

  return (
    <div className="bonus-container">
      <div className="secondary-container">
        <div className="info-container">
          <div className="header-container">
            ДАРИМ БОНУС<br />
            ЗА РЕГИСТРАЦИЮ: 100 БАЛЛОВ
          </div>
        </div>
        <div className="button-container">
          <button className="sign-in" onClick={() => navigate("/empty")}><span className="sign-in-text">ВОЙТИ</span></button>
          <button className="sign-up" onClick={() => navigate("/empty")}><span className="sign-up-text">ЗАРЕГИСТРИРОВАТЬСЯ</span></button>
        </div>
      </div>

    </div>
  )
}
export default ContentContainer5;