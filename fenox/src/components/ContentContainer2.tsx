import "../styles/ContentContainer2.css"
import FAU1027 from "../../public/gifts/FAU1027.jpg";
import FAE2005 from "../../public/gifts/FAE2005.jpg";
import FAE2004 from "../../public/gifts/FAE2004.jpg";
import FAO1002 from "../../public/gifts/FAO1002.jpg";
import FAU1082 from "../../public/gifts/FAU1082.jpg";
import FAU2005 from "../../public/gifts/FAU2005.jpg";

function ContentContainer2() {
  return (
    <div className="gifts-container">
      <div className="header-container">
        <div className="header-itself">
          <h2 className="title">
            КАТАЛОГ ПОДАРКОВ
          </h2>
        </div>
        <button className="see-all-button">
          <span className="see-all-text">Посмотреть все</span>
          <span className="arrow-right"> &gt;</span>
        </button>
      </div>
      <div className="slider">
        <div className="gift">
          <img src={FAU1027} alt="gift" />
          <span className="inscription">Автовизитка 3 в 1</span>
        </div>
        <div className="gift">
          <img src={FAE2005} alt="gift" />
          <span className="inscription">FM-трансмиттер</span>
        </div>
        <div className="gift">
          <img src={FAE2004} alt="gift" />
          <span className="inscription">Вентилятор автомобильный на солнечной энергии</span>
        </div>
        <div className="gift">
          <img src={FAO1002} alt="gift" />
          <span className="inscription">Накидка защитная на лобовое стекло, 240*145 см</span>
        </div>
        <div className="gift">
          <img src={FAU1082} alt="gift" />
          <span className="inscription">Органайзер на спинку заднего сиденья, 95*46 см</span>
        </div>
        <div className="gift">
          <img src={FAU2005} alt="gift" />
          <span className="inscription">Аккумулятор внешний, 15000 mAh</span>
        </div>
        <div className="gift">
          <img src={FAU1027} alt="gift" />
          <span className="inscription">Автовизитка 3 в 1</span>
        </div>
        <div className="gift">
          <img src={FAE2005} alt="gift" />
          <span className="inscription">FM-трансмиттер</span>
        </div>
        <div className="gift">
          <img src={FAE2004} alt="gift" />
          <span className="inscription">Вентилятор автомобильный на солнечной энергии</span>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer2;