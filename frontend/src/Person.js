import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './css/Main.css';
import './css/Investigation.css';
import './css/Person.css';
import arrowRightUpBlack from './resourse/images/fontisto_arrow-right-black.png';
import icon from './resourse/images/icon.png';
import masking from './resourse/images/masking.png';
import facebookIcon from './resourse/images/facebook-icon.png';
import personImage from './resourse/images/candidate.jpg';
import Pagination from './Pagination.js';

function Title() {
  const location = useLocation();
  const { name, surname, score, party, image, candidateImage, description, position } = location.state || {};
  return (
    <div class="container-person">
      <div className="main-container">
        <div class="divheader1-person">
          <RepresentativeCard
            name={name}
            surname={surname}
            score={score}
            party={party}
            image={image}
            candidateImage={candidateImage}
          />
        </div>

        <div className="info-container">
          <h1 className="h1-name">{name} {surname}</h1>

          <div className="additional-info">
            <p className="description-person">{description}</p>

            <div className="party-info">
              <div class="party-card">
                <img class="photo-party-person" src={image} alt={`${party}`} />
                <p class="party">{party}</p>
              </div>
              <div class="party-card">
                <img class="photo-party-person" src={icon} alt={`${party}`} />
                <p class="party">{position}</p>
              </div>
            </div>

            <div className="social-icons">
              <div class="facebook-icon-person" style={{ backgroundImage: `url(${facebookIcon})` }} />
              <img src={facebookIcon} alt="Facebook" />
              <img src={facebookIcon} alt="Facebook" />
            </div>
          </div>
        </div>
      </div>


      <div class="investigation-header-info">
        <div class="associated-persons-info">
          <div class="sub-header"> Пов’язані особи: </div>
          <div class="associated-persons">
            {/*investigation.investigatedPersons.map(person =>
              <Link class="person" href={"http://localhost:3000/person/" + person.id}>
                <img class="person-icon" src={personImage} />
                <p class="associated-person-name">{person.name + " " + person.surname}</p>
              </Link>
              )*/

              investigation.map(person =>
                <Link class="person" href={"http://localhost:3000/person/" + person.id}>
                  <img class="person-icon" src={personImage} />
                  <p class="associated-person-name">{person.name + " " + person.surname}</p>
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

let investigation = await getInvestigation();

/*async function getInvestigation() {
  const path = window.location.href.slice(window.location.origin.length);
  const inv = /([/]investigation[/])([\d\w-])+/g
  if (path.match(inv) != null) {
    console.log(path.match(inv));
    let data = await fetch("http://localhost:8080" + path, { method: 'GET', headers: { 'Authorization': 'Basic ' + btoa("user" + ":" + "admin") } })
      .then((response) => response.json());
    return data;
  }
  return null;
}*/

async function getInvestigation() {
  const people = [
    { id: 1, name: 'Максим', surname: 'Шевченко' },
    { id: 2, name: 'Максим', surname: 'Шевченко' },
    { id: 3, name: 'Максим', surname: 'Шевченко' }
  ];
  return people;
}

const RepresentativeCard = ({ candidateImage }) => (
  <div class="representative-card-person">
    <div class="rectangle-person" style={{ backgroundImage: `url(${candidateImage})` }}>
      <img class="masking" src={masking} alt="Masking Image"></img>
    </div>
  </div>
);

function LatestInvestigations() {
  const location = useLocation();
  const { name, surname, score, party, image, candidateImage } = location.state || {};

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(investigations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentInvestigations = investigations.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div class="latest-investigations-main">
      <div class="latest-rating-full-header">
        <div class="latest-rating-left">
          <div class="rating">{score} ЗАШКВАРІВ</div>
          <div class="descriptionNews">Оновлюваний перелік епізодів корупції, хабарництва, зловживання владою, некомпетентності та інших неприйнятних вчинків представників влади.</div>
        </div>
        <Link to="/investigations" class="latest-rating-right">
          <div class="labelRating">Всі Зашквари</div>
          <img class="arrowRightUpBlack" src={arrowRightUpBlack} />
        </Link>
      </div>
      <div class="latest-investigations-person">
        <div class="latest-investigation-flow">
          {currentInvestigations.map(item => (
            <div class="investigation-card" key={item.id}>
              <div class="investigation-card-content">
                <div class="investigation-card-header">
                  <img class="person-icon" src={personImage} alt="Person" />
                  <div class="investigation-card-text">{item.name}</div>
                  <div class="investigation-card-count">{item.points}</div>
                </div>
                <span class="investigation-card-date">{item.date}</span>
                <div class="investigation-card-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

const investigations = [
  { id: 1, name: 'Maксим Петренко', date: '22 БЕР 2024', label: 'Депутат викритий на хабарі: час для справедливості!', points: '+5' },
  { id: 2, name: 'Олег Сидорунко', date: '23 БЕР 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+4' },
  { id: 3, name: 'Олена Петренко', date: '23 БЕР 2024', label: 'Корупція у владних коридорах: потрібні рішучі дії!', points: '+2' },
  { id: 4, name: 'Maксим Петренко', date: '24 БЕР 2024', label: 'Політик фальсифікував вибори: громадськість має обєднатися!', points: '+3' },
  { id: 5, name: 'Maксим Петренко', date: '31 БЕР 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+1' },
  { id: 6, name: 'Maксим Петренко', date: '01 КВІ 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+3' },
  { id: 7, name: 'Maксим Петренко', date: '22 БЕР 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+5' },
  { id: 8, name: 'Олег Сидорунко', date: '23 БЕР 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+4' },
  { id: 9, name: 'Олена Петренко', date: '23 БЕР 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+2' },
  { id: 10, name: 'Maксим Петренко', date: '24 БЕР 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+3' },
  { id: 11, name: 'Maксим Петренко', date: '31 БЕР 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+1' },
  { id: 12, name: 'Maксим Петренко', date: '01 КВІ 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+3' },
  { id: 13, name: 'Maксим Петренко', date: '01 КВІ 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+3' },
  { id: 14, name: 'Maксим Петренко', date: '01 КВІ 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+1' },
  { id: 15, name: 'Maксим Петренко', date: '01 КВІ 2024', label: 'Незаконне збагачення політиків - це злочин проти народу: час покласти край!', points: '+3' }
];

function Person() {
  return (
    <div>
      <Title />
      <LatestInvestigations />
    </div>
  );
}

export default Person;