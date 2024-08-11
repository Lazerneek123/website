import React, { useState } from 'react';
import './css/Investigations.css';
import './css/Investigation.css';
import duct from './resourse/images/duct.png';
import personImage from './resourse/images/candidate.jpg';
import Pagination from './Pagination.js';
import image from './resourse/images/poster.png';

function Title() {
  return (
    <div class="divImageBody">
      <div class="divImage">
        <div class="container">
          <div class="divheader1">
            <div class="divHeader">
              <div class="divHeaderTitle">
                <h1 class="latest-investigations-header" >ОСТАННІ ЗАШКВАРИ</h1>
                <hr class="divider-latest-investigations-header" />
              </div>
              <p class="description">
                Оновлюваний перелік епізодів корупції, хабарництва, зловживання владою, некомпетентності та інших неприйнятних вчинків представників влади.
              </p>
            </div>

            <div class="arrows">
              <img class="arrow" src={duct} alt="Arrow Down" />
              <img class="arrow" src={duct} alt="Arrow Down" />
              <img class="arrow" src={duct} alt="Arrow Down" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const itemsPerPage = 2;

function LatestInvestigations() {
  const [currentPage, setCurrentPage] = useState(1);

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
  ];

  const totalPages = Math.ceil(investigations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentInvestigations = investigations.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div class="latest-investigations-main">
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
  );
}

function Investigations() {
  return (
    <div>
      <Title />
      <LatestInvestigations />
    </div>
  );
}

export default Investigations;