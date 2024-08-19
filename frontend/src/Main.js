import React, { useState } from 'react';
import './css/Main.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import candidateImage from './resourse/images/candidate.jpg';
import photo from './resourse/images/photo.jpg';
import duct from './resourse/images/duct.png';
import arrowRightUpBlack from './resourse/images/fontisto_arrow-right-black.png';
import personImage from './resourse/images/candidate.jpg';
import arrowRightUp from './resourse/images/arrow-right-up.png';

function Title() {
  return (
    <div class="containerMain">
      <div class="divheader1">
        <div class="divHeader">
          <div class="divHeaderTitle">
            <h1 class="header1">САЙТ <span class="highlight">СПРОТИВУ</span></h1>
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

function Candidates() {
  const representatives = [
    {
      name: "Максим",
      surname: "Шевченко",
      score: 59,
      party: "Слуга народу",
      image: photo,
      candidateImage: candidateImage
    },
    {
      name: "Олег",
      surname: "Сидоренко",
      score: 45,
      party: "Партія справедливості",
      image: photo,
      candidateImage: candidateImage
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 28,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 18,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage
    }, {
      name: "Олена",
      surname: "Петренко",
      score: 12,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 10,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 5,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(representatives.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const widthLine = 100 / totalPages;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = representatives.slice(startIndex, startIndex + itemsPerPage);


  const RepresentativeCard = ({ name, surname, score, party, image, candidateImage }) => (
    <div class="representative-card">
      <div class="rectangle" style={{ backgroundImage: `url(${candidateImage})` }}>
        <div class="score">
          <p>{score} ЗАШКВАРІВ</p>
        </div>
      </div>

      <div class="info">
        <h3 class="name">{name}</h3>
        <h3 class="surname">{surname}</h3>
        <div class="party-card">
          <img class="photo" src={image} alt={`${party}`} />
          <p class="party">{party}</p>
        </div>
      </div>
    </div>
  );

  const RepresentativeList = () => (
    <div class="representative-list">
      {selectedItems.map((rep, index) => (
        <RepresentativeCard
          key={index}
          name={rep.name}
          surname={rep.surname}
          score={rep.score}
          party={rep.party}
          image={rep.image}
          candidateImage={rep.candidateImage}
        />
      ))}
    </div>
  );

  return (
    <div class="news">
      <div class="app">
        <div class="divRating">
          <div class="latest-rating-full-header">
            <div class="latest-rating-left">
              <div class="rating">РЕЙТИНГ ЗАШКВАРІВ</div>
              <div class="descriptionNews">Ця категорія сайту присвячена висвітленню депутатів та чиновників, які зрадили довіру народу та чинили злочини проти України.</div>
            </div>
            <Link to="/persons" class="latest-rating-right">
              <div class="labelRating">Рейтинг зашкварів</div>
              <img class="arrowRightUpBlack" src={arrowRightUpBlack} />
            </Link>
          </div>
        </div>
        <RepresentativeList />
        <div style={{ height: `4px` }}>
          <div class="progress-bar">
            <div class="progress" style={{
              width: `${widthLine}%`,
              height: '4px',
              backgroundColor: '#DE442C',
              position: 'absolute',
              left: `${(currentPage - 1) * widthLine}%`
            }}></div>
          </div>
        </div>
        <div class="pagination-btns">
          <button class="btn" onClick={prevPage} disabled={currentPage === 1}>&lt;</button>
          <button class="btn" onClick={nextPage} disabled={currentPage === totalPages}>&gt;</button>
        </div>
        <div style={{ height: `4px` }}></div>
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
        <Link to="/investigations" class="investigation-header">
          ЗАШКВАРИ
          <img class="arrowRightUp" src={arrowRightUp} />
        </Link>
        <hr class="dividerInvestigation" />
        <Link to="/persons" class="investigation-header">
          ОСОБИ
          <img class="arrowRightUp" src={arrowRightUp} />
        </Link>
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
        <Link to="/investigations" class="latest-rating-right">
          <div class="labelRating">Всі Зашквари</div>
          <img class="arrowRightUpBlack" src={arrowRightUpBlack} />
        </Link>
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

function Main() {
  return (
    <div>
      <Title />
      <Candidates />
      <Investigation />
      <LatestInvestigations />
    </div>
  );
}

export default Main;