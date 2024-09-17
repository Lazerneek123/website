import React from 'react';
import ReactDOM from 'react-dom';
import './css/Investigation.css';
import arrow from './resourse/images/Vector.png';
import arrowRightUp from './resourse/images/arrow-right-up.png';
import personImage from './resourse/images/candidate.jpg';
import arrowRightUpBlack from './resourse/images/fontisto_arrow-right-black.png';
import { Link } from "react-router-dom";
import DOMPurify from 'dompurify';
import markdownit from 'markdown-it'

const investigations = [
    { id: 1, name: 'Maксим Петренко', date: '22 БЕР 2024', label: 'Депутат викритий на хабарі: час для справедливості!', points: '+5' },
    { id: 2, name: 'Олег Сидорунко', date: '23 БЕР 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+4' },
    { id: 3, name: 'Олена Петренко', date: '23 БЕР 2024', label: 'Корупція у владних коридорах: потрібні рішучі дії!', points: '+2' },
    { id: 4, name: 'Maксим Петренко', date: '24 БЕР 2024', label: 'Політик фальсифікував вибори: громадськість має обєднатися!', points: '+3' },
    { id: 5, name: 'Maксим Петренко', date: '31 БЕР 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+1' },
    { id: 6, name: 'Maксим Петренко', date: '01 КВІ 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+3' }
];
const md = markdownit({
    html: true
})
function getMarkdownContent() {
    return DOMPurify.sanitize(md.render(`
Сьогодні правоохоронні органи оголосили про викриття корупційної схеми, до якої був залучений чиновник Максим Шевченко.

<a style="background-color: #DE442C80; color: black; font-weight: 600;" href="https://www.nabu.gov.ua/">Згідно з НАБУ</a>, чиновник Максим Шевченко використовував своє службове становище для корупційних схем. В результаті його дій державі було завдано збитків на суму 100 000 000 гривень.

<img style="width: 100%" src="https://media.cnn.com/api/v1/images/stellar/prod/200601192505-01-protest-presidents.jpg" />

Максим Шевченко був затриманий та йому пред'явлено звинувачення у корупції та зловживанні службовим положенням. Важливість розслідування та покарання: 
- Цей випадок є свідченням корупції в Україні. 
- Важливо, щоб подібні злочини розслідувалися та каралися. 
- Це допоможе запобігти подібним випадкам у майбутньому.

Цей випадок є черговим свідченням корупції, яка, на жаль, все ще поширена в Україні. Важливо, щоб подібні злочини розслідувалися та каралися, щоб запобігти подібним випадкам у майбутньому.
`));
}

function MarkdownHtmlContent() {
    const sanitizedHtml = getMarkdownContent();
    return <div class="markdown-content" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}

function InvestigationInfo() {
    return (
        <div class="page-container">
            <div class="breadcrumb">
                <div>
                    <Link class="breadcrumb-link" to="/">Головна</Link>
                    <img class="breadcrumb-arrow" src={arrow} />
                </div>
                <div>
                    <Link class="breadcrumb-link" to="/investigations">Зашквари</Link>
                    <img class="breadcrumb-arrow" src={arrow} />
                </div>
                <div>
                    <div class="lower-intensity-color">Журналістське розслідування викриває давно забуті корупційні схеми в уряді</div>
                </div>
            </div>
            <div class="investigation-header-info">
                <span class="date">22 БЕР 2024</span>
                <div class="investigation-header">Журналістське розслідування викриває давно забуті корупційні схеми в уряді</div>
                <div class="investigation-header-description">Цей випадок є черговим свідченням корупції, яка, на жаль, все ще поширена в Україні. Важливо, щоб подібні злочини розслідувалися та каралися, щоб запобігти подібним випадкам у майбутньому.</div>
                <div class="associated-persons-info">
                    <div class="sub-header"> Пов’язані особи: </div>
                    <div class="associated-persons">

                        <Link to="/person" class="person">
                            <img class="person-icon" src={personImage} />
                            <p class="associated-person-name">Максим Шевченко</p>
                        </Link>
                        <Link to="/person" class="person">
                            <img class="person-icon" src={personImage} />
                            <p class="associated-person-name">Максим Шевченко</p>
                        </Link>
                        <Link to="/person" class="person">
                            <img class="person-icon" src={personImage} />
                            <p class="associated-person-name">Максим Шевченко</p>
                        </Link>
                        <Link to="/person" class="person">
                            <img class="person-icon" src={personImage} />
                            <p class="associated-person-name">Максим Шевченко</p>
                        </Link>
                        <Link to="/person" class="person">
                            <img class="person-icon" src={personImage} />
                            <p class="associated-person-name">Максим Шевченко</p>
                        </Link>
                        <Link to="/person" class="person">
                            <img class="person-icon" src={personImage} />
                            <p class="associated-person-name">Максим Шевченко</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Sources() {
    return (
        <div class="sources">
            <div class="sub-header"> Список Джерел </div>
            <div class="source">
                <a class="source-header" href="">
                    Національне антикорупційне бюро України (НАБУ)
                    <img class="arrowRightUp" src={arrowRightUp} />
                </a>
                <p class="source-description">Максим Шевченко затриманий за підозрою в корупції!</p>
            </div>
            <div class="source">
                <a class="source-header" href="">
                    Національне антикорупційне бюро України (НАБУ)
                    <img class="arrowRightUp" src={arrowRightUp} />
                </a>
                <p class="source-description">Корупційна схема чиновника розкрита!
                    100 000 гривень збитків державі: Максим Шевченко відповість за свої дії!</p>
            </div>
            <div class="source">
                <a class="source-header" href="">
                    Національне антикорупційне бюро України (НАБУ)
                    <img class="arrowRightUp" src={arrowRightUp} />
                </a>
                <p class="source-description">Чиновник Максим Шевченко затриманий за підозрою в корупції!
                    Високопосадовець викритий у хабарництві!</p>
            </div>
        </div>
    );
}

function LatestInvestigations() {
    return (
        <div class="latest-investigations">
            <div class="latest-investigations-full-header">
                <div>
                    <div class="latest-investigations-header-l">Останні Зашквари</div>
                    <div class="latest-investigationss-description">Оновлюваний перелік епізодів корупції, хабарництва, зловживання владою, некомпетентності та інших неприйнятних вчинків представників влади.</div>
                </div>
                <a class="latest-rating-right" href='/investigations'>
                    <div class="labelRating">Всі Зашквари</div>
                    <img class="arrowRightUpBlack" src={arrowRightUpBlack} />
                </a>
            </div>
            <div class="latest-investigation-flow">
                {investigations.map(item => (

                    <Link to="/investigation" class="investigation-card" key={item.id}>
                        <div class="investigation-card-content">
                            <div class="investigation-card-header">
                                <img class="person-icon" src={personImage} alt="Person" />
                                <div class="investigation-card-text">{item.name}</div>
                                <div class="investigation-card-count">{item.points}</div>
                            </div>
                            <span class="investigation-card-date">{item.date}</span>
                            <div class="investigation-card-label">{item.label}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function Investigation() {
    return (
        <div>
            <InvestigationInfo />
            <MarkdownHtmlContent />
            <Sources />
            <LatestInvestigations />
        </div>
    );
}

export default Investigation;