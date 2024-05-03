import { Link, useNavigate } from "react-router-dom";
import "../styles/ContentContainer4.css";

function ContentContainer4() {
    const navigate = useNavigate();
    const partnersData = [
        { logoText: "LOGO", title: "Наименование", legalTitle: "Юридическое наименование", link: "/empty" },
        { logoText: "LOGO", title: "Наименование", legalTitle: "Юридическое наименование", link: "/empty" },
        { logoText: "LOGO", title: "Наименование", legalTitle: "Юридическое наименование", link: "/empty" },
        { logoText: "LOGO", title: "Наименование", legalTitle: "Юридическое наименование", link: "/empty" },
        { logoText: "LOGO", title: "Наименование", legalTitle: "Юридическое наименование", link: "/empty" },
        { logoText: "LOGO", title: "Наименование", legalTitle: "Юридическое наименование", link: "/empty" }
    ];

    return (
        <div className="partners-container">
            <div className="header-container">
                <div className="header-itself">
                    <div className="title">
                        ПАРТНЁРЫ ПРОГРАММЫ
                    </div>
                    <button className="see-all-partners" onClick={() => navigate("/empty")}>
                        <span className="see-all-text">Посмотреть все</span>
                        <span className="arrow-right"> &gt;</span>
                    </button>
                </div>
            </div>
            <div className="partners-cards">
                {partnersData.map((partner, index) => (
                    <div className="partner-card" key={index}>
                        <div className="partner-logo"><span className="logo-text">{partner.logoText}</span></div>
                        <div className="partner-title">{partner.title}</div>
                        <div className="legal-title">{partner.legalTitle}</div>
                        <Link to={partner.link} className="partner-web-site">Сайт</Link>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ContentContainer4;