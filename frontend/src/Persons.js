import React, { useState } from 'react';
import './css/Main.css';
import './css/Investigation.css';
import candidateImage from './resourse/images/candidate.jpg';
import photo from './resourse/images/photo.jpg';
import duct from './resourse/images/duct.png';
import arrowRightUpBlack from './resourse/images/fontisto_arrow-right-black.png';
import personImage from './resourse/images/candidate.jpg';
import arrowRightUp from './resourse/images/arrow-right-up.png';


function Title() {
  return (
    <div class="container">
      <div class="divheader1">
        <div class="divHeader">
          <div class="divHeaderTitle">
            <h1 class="latest-investigations-header" style={{ textAlign: `center`}} >РЕЙТИНГ ЗАШКВАРІВ</h1>
            <hr class="divider" />
          </div>
          <p class="description">
            Проект створений для того, щоб дати можливість громадянам України контролювати дії влади та боротися з корупцією.
          </p>
        </div>

        <div class="arrows">
          <img class="arrow" src={duct} alt="Arrow Down" />
          <img class="arrow" src={duct} alt="Arrow Down" />
          <img class="arrow" src={duct} alt="Arrow Down" />
        </div>
      </div>
    </div>
  );
}

function Investigation() {
  return (
    <div class="appInvestigation">
      <div class="divRating">
        <div class="latest-rating-full-header">
          <div class="latest-investigation-left">
            <div class="headerInvestigation">ПАМ'ЯТАЙ ПРО УСІ ЗАШКВАРИ ДЕПУТАТІВ ТА ЧИНОВНИКІВ</div>
            <div class="subheaderInvestigation">Наша мета - інформувати громадськість про зашквари депутатів та чиновників, засудити їхню поведінку та сприяти їхньому покаранню.</div>
          </div>

        </div>
      </div>

      <div class="sectionInvestigation">
        <a class="investigation-header" href="">
          ЗАШКВАРИ
          <img class="arrowRightUp" src={arrowRightUp} />
        </a>
        <hr class="dividerInvestigation" />
        <a class="investigation-header" href="">
          ОСОБИ
          <img class="arrowRightUp" src={arrowRightUp} />
        </a>
      </div>
    </div>
  );
}

function LatestInvestigations() {
  return (
    <div class="latest-investigations-main">
      <div class="latest-rating-full-header">
        <div class="latest-rating-left">
          <div class="rating">ОСТАННІ ЗАШКВАРИ</div>
          <div class="descriptionNews">Оновлюваний перелік епізодів корупції, хабарництва, зловживання владою, некомпетентності та інших неприйнятних вчинків представників влади.</div>
        </div>
        <a class="latest-rating-right">
          <div class="labelRating">Всі Зашквари</div>
          <img class="arrowRightUpBlack" src={arrowRightUpBlack} />
        </a>
      </div>
      <div class="latest-investigation-flow">
        <div class="investigation-card">
          <div class="investigation-card-content">
            <div class="investigation-card-header">
              <img class="person-icon" src={personImage} />
              <div class="investigation-card-text">Maксим Петренко</div>
              <div class="investigation-card-text">+5</div>
            </div>
            <span class="investigation-card-date ">22 БЕР 2024</span>
            <div class="investigation-card-label">Незаконне збагачення політиків - це злочин проти народу: час покласти край!</div>
          </div>
        </div>
        <div class="investigation-card">
          <div class="investigation-card-content">
            <div class="investigation-card-header">
              <img class="person-icon" src={personImage} />
              <div class="investigation-card-text">Maксим Петренко</div>
              <div class="investigation-card-text">+5</div>
            </div>
            <span class="investigation-card-date ">22 БЕР 2024</span>
            <div class="investigation-card-label">Незаконне збагачення політиків - це злочин проти народу: час покласти край!</div>
          </div>
        </div>
        <div class="investigation-card">
          <div class="investigation-card-content">
            <div class="investigation-card-header">
              <img class="person-icon" src={personImage} />
              <div class="investigation-card-text">Maксим Петренко</div>
              <div class="investigation-card-text">+5</div>
            </div>
            <span class="investigation-card-date ">22 БЕР 2024</span>
            <div class="investigation-card-label">Незаконне збагачення політиків - це злочин проти народу: час покласти край!</div>
          </div>
        </div>
        <div class="investigation-card">
          <div class="investigation-card-content">
            <div class="investigation-card-header">
              <img class="person-icon" src={personImage} />
              <div class="investigation-card-text">Maксим Петренко</div>
              <div class="investigation-card-text">+5</div>
            </div>
            <span class="investigation-card-date ">22 БЕР 2024</span>
            <div class="investigation-card-label">Незаконне збагачення політиків - це злочин проти народу: час покласти край!</div>
          </div>
        </div>
        <div class="investigation-card">
          <div class="investigation-card-content">
            <div class="investigation-card-header">
              <img class="person-icon" src={personImage} />
              <div class="investigation-card-text">Maксим Петренко</div>
              <div class="investigation-card-text">+5</div>
            </div>
            <span class="investigation-card-date ">22 БЕР 2024</span>
            <div class="investigation-card-label">Незаконне збагачення політиків - це злочин проти народу: час покласти край!</div>
          </div>
        </div>
        <div class="investigation-card">
          <div class="investigation-card-content">
            <div class="investigation-card-header">
              <img class="person-icon" src={personImage} />
              <div class="investigation-card-text">Maксим Петренко</div>
              <div class="investigation-card-text">+5</div>
            </div>
            <span class="investigation-card-date ">22 БЕР 2024</span>
            <div class="investigation-card-label">Незаконне збагачення політиків - це злочин проти народу: час покласти край!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Investigations() {
  return (
    <div>
      <Title />
      <Investigation />
      <LatestInvestigations />
    </div>
  );
}

export default Investigations;