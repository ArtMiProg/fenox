import "../styles/ContentContainer3.css";
import One_rub from "../../public/gift-cards/One_rub.jpg";
import One_and_half from "../../public/gift-cards/One_and_half.jpg"
import Two_rub from "../../public/gift-cards/Two_rub.jpg"
import Three_rub from "../../public/gift-cards/Three_rub.jpg";
import Four_rub from "../../public/gift-cards/Four_rub.jpg";



function ContentContainer3() {

  return (
    <div className="giftcards-container">
      <div className="header-container">
        <div className="header-itself">
          <div className="title">
            ПОДАРОЧНЫЕ КАРТЫ
          </div>
        </div>
      </div>
      <div className="gift-cards">
        <div className="gift-card">
          <img src={One_rub} alt="gift-card" />
          <div className="inscription-plus">
            <span className="inscription">Электронный сертификат Ozon номиналом 1000 руб.</span>
            <button className="plus-button"><span className="plus">+</span></button>
          </div>
        </div>
        <div className="gift-card">
          <img src={One_and_half} alt="gift-card" />
          <div className="inscription-plus">
            <span className="inscription">Электронный сертификат Ozon номиналом 1500 руб.</span>
            <button className="plus-button"><span className="plus">+</span></button>
          </div>
        </div>
        <div className="gift-card">
          <img src={Two_rub} alt="gift-card" />
          <div className="inscription-plus">
            <span className="inscription">Электронный сертификат Ozon номиналом 2000 руб.</span>
            <button className="plus-button"><span className="plus">+</span></button>
          </div>
        </div>
        <div className="gift-card">
          <img src={Three_rub} alt="gift-card" />
          <div className="inscription-plus">
            <span className="inscription">Электронный сертификат Ozon номиналом 3000 руб.</span>
            <button className="plus-button"><span className="plus">+</span></button>
          </div>
        </div>
        <div className="gift-card">
          <img src={Four_rub} alt="gift-card" />
          <div className="inscription-plus">
            <span className="inscription">Электронный сертификат Ozon номиналом 4000 руб.</span>
            <button className="plus-button"><span className="plus">+</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentContainer3;