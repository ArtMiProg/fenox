import "../styles/ContentContainer2.css"
import FAU1027 from "../../public/gifts/FAU1027.jpg";
import FAE2005 from "../../public/gifts/FAE2005.jpg";
import FAE2004 from "../../public/gifts/FAE2004.jpg";
import FAO1002 from "../../public/gifts/FAO1002.jpg";
import FAU1082 from "../../public/gifts/FAU1082.jpg";
import FAU2005 from "../../public/gifts/FAU2005.jpg";
import { useNavigate } from "react-router-dom";

function ContentContainer2() {
const navigate = useNavigate();
const gifts = [
  { imageSrc: FAU1027, inscription: "Автовизитка 3 в 1" },
  { imageSrc: FAE2005, inscription: "FM-трансмиттер" },
  { imageSrc: FAE2004, inscription: "Вентилятор автомобильный на солнечной энергии" },
  { imageSrc: FAO1002, inscription: "Накидка защитная на лобовое стекло, 240*145 см" },
  { imageSrc: FAU1082, inscription: "Органайзер на спинку заднего сиденья, 95*46 см" },
  { imageSrc: FAU2005, inscription: "Аккумулятор внешний, 15000 mAh" },
];

  return (
    <div className="gifts-container">
      <div className="header-container">
        <div className="header-itself">
          <h2 className="title">
            КАТАЛОГ ПОДАРКОВ
          </h2>
        </div>
        <button className="see-all-button" onClick={() => navigate("/empty")}>
          <span className="see-all-text">Посмотреть все</span>
          <span className="arrow-right"> &gt;</span>
        </button>
      </div>
      <div className="slider">
      {gifts.map((gift, index) => (
          <div className="gift" key={index}>
            <img src={gift.imageSrc} alt="gift" />
            <span className="inscription">{gift.inscription}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentContainer2;