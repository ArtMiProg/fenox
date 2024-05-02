import "../styles/ContentContainer1.css";

function ContentContainer1() {
  return (
    <div className="first-container">
      <div className="secondary-container">
        <div className="info-container">
          <h1 className="head-container">
            ПРОГРАММА ЛОЯЛЬНОСТИ<br />
            FENOX GOLD
          </h1>
          <p className="text-container">
            Вы владелец СТО или магазина автозапчатсей. Регистрируйтесь и выбирайте подарки!
          </p>
        </div>
        <div className="button-container">
          <button className="sign-in"><span className="sign-in-text">ВОЙТИ</span></button>
          <button className="sign-up"><span className="sign-up-text">ЗАРЕГИСТРИРОВАТЬСЯ</span></button>
        </div>
      </div>

      <div className="cards-container">
        <div className="card">
          <div className="card-header">РЕГИСТРИРУЙТЕСЬ</div>
          <div className="card-text">Приветственные бонусы, в размере 100 баллов</div>
        </div>
        <div className="card">
          <div className="card-header">ПОЛУЧАЙТЕ БАЛЛЫ</div>
          <div className="card-text">Покупайте товары FENOX и получайте баллы</div>
        </div>
        <div className="card">
          <div className="card-header">ЗАБИРАЙТЕ БОНУСЫ</div>
          <div className="card-text">Обменивайте баллы на подарки из каталога</div>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer1;