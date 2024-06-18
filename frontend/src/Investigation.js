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

const md = markdownit({
    html: true
})

const months = new Map([
    [1, "СІЧ"],
    [2, "ЛЮТ"],
    [3, "БЕР"],
    [4, "КВІ"],
    [5, "ТРА"],
    [6, "ЧЕР"],
    [7, "ЛИП"],
    [8, "СЕР"],
    [9, "ВЕР"],
    [10, "ЖОВ"],
    [11, "ЛИС"],
    [12, "ГРУ"]
]);

function formatDate(date) {
    let parsedDate = date.split("T")[0].split("-");
    let year = Number(parsedDate[0]);
    let month = months.get(Number(parsedDate[1]));
    let day = Number(parsedDate[2]);
    return day + " " + month + " " + year;
}

async function getInvestigation() {
    const path = window.location.href.slice(window.location.origin.length);
    let data = await fetch("http://localhost:8080" + path, { method: 'GET', headers: { 'Authorization': 'Basic ' + btoa("user" + ":" + "admin") } })
        .then((response) => response.json());
    return data;
}

async function getLatestInvestigations() {
    const path = window.location.href.slice(window.location.origin.length);
    let data = await fetch("http://localhost:8080/latest-investigations?pageSize=6", { method: 'GET', headers: { 'Authorization': 'Basic ' + btoa("user" + ":" + "admin") } })
        .then((response) => response.json());
    return data;
}

let investigation = await getInvestigation();
let latestInvestigations = await getLatestInvestigations();
let investigationDate = formatDate(investigation.publishDate);

function getMarkdownContent() {
    return DOMPurify.sanitize(md.render(investigation.content));
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
                    <div class="lower-intensity-color">{investigation.label}</div>
                </div>
            </div>
            <div class="investigation-header-info">
                <span class="date">{investigationDate}</span>
                <div class="investigation-header">{investigation.label}</div>
                <div class="investigation-header-description">{investigation.description}</div>
                <div class="associated-persons-info">
                    <div class="sub-header"> Пов’язані особи: </div>
                    <div class="associated-persons">
                    {investigation.investigatedPersons.map( person =>
                        <Link class="person" href={"http://localhost:3000/person/"+person.id}>
                            <img class="person-icon" src={personImage} />
                            <p class="associated-person-name">{person.name+" "+person.surname}</p>
                        </Link>
                        )} 
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
            {investigation.sources.map( source =>
            <div class="source">
                <a class="source-header" href={source.link}>
                    {source.name}
                    <img class="arrowRightUp" src={arrowRightUp} />
                </a>
                <p class="source-description">{source.label}</p>
            </div>
            )}
        </div>
    );
}

function LatestInvestigations() {
    return (
        <div class="latest-investigations">
            <div class="latest-investigations-full-header">
                <div class="latest-investigations-left">
                    <div class="latest-investigations-header">Останні Зашквари</div>
                    <div class="latest-investigations-description">Оновлюваний перелік епізодів корупції, хабарництва, зловживання владою, некомпетентності та інших неприйнятних вчинків представників влади.</div>
                </div>
                <a class="latest-investigations-right" href='/investigations'>
                    <div class="label">Всі Зашквари</div>
                    <img class="arrowRightUpBlack" src={arrowRightUpBlack} />
                </a>
            </div>
            <div class="latest-investigation-flow">
            {latestInvestigations.map( investigation =>
                <a class="investigation-card" href={"http://localhost:3000/investigation/"+investigation.id}>
                    <div class="investigation-card-content">
                        <div class="investigation-card-header">
                            <img class="person-icon" src={personImage} />
                            <div class="investigation-card-text">{investigation.investigatedPersons[0].name+ " "+investigation.investigatedPersons[0].surname}</div>
                            {investigation.investigatedPersons.length != 1 &&
                            <div class="investigation-card-text">+investigation.investigatedPersons.length}</div>
                            }
                        </div>
                        <span class="investigation-card-date">{formatDate(investigation.publishDate)}</span>
                        <div class="investigation-card-label">{investigation.label}</div>
                    </div>
                </a>
            )}
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