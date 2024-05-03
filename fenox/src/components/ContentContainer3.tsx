import "../styles/ContentContainer3.css";
import One_rub from "../../public/gift-cards/One_rub.jpg";
import One_and_half from "../../public/gift-cards/One_and_half.jpg"
import Two_rub from "../../public/gift-cards/Two_rub.jpg"
import Three_rub from "../../public/gift-cards/Three_rub.jpg";
import Four_rub from "../../public/gift-cards/Four_rub.jpg";

function ContentContainer3() {
  const giftCards = [
    { imageSrc: One_rub, inscription: "Электронный сертификат Ozon номиналом 1000 руб." },
    { imageSrc: One_and_half, inscription: "Электронный сертификат Ozon номиналом 1500 руб." },
    { imageSrc: Two_rub, inscription: "Электронный сертификат Ozon номиналом 2000 руб." },
    { imageSrc: Three_rub, inscription: "Электронный сертификат Ozon номиналом 3000 руб." },
    { imageSrc: Four_rub, inscription: "Электронный сертификат Ozon номиналом 4000 руб." },
  ];

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
        {giftCards.map((card, index) => (
          <div className="gift-card" key={index}>
            <img src={card.imageSrc} alt="gift-card" />
            <div className="inscription-plus">
              <span className="inscription">{card.inscription}</span>
              <button className="plus-button"><span className="plus">+</span></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentContainer3;