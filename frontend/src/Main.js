import React, { useState } from 'react';
import './css/Main.css';
import candidateImage from './resourse/images/candidate.jpg';
import photo from './resourse/images/photo.jpg';
import duct from './resourse/images/duct.png';


function Title() {
  return (
    <div class="container">
      <div class="header1">
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
      <div class="rectangle" style={{ backgroundImage: `url(${candidateImage})`, filter: 'grayscale(100%)' }}>
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
    <section class="news">
      <div class="app">
        <div class="divRating">
          <p class="rating">Рейтинг зашкварів</p>
          <p class="descriptionNews">Ця категорія сайту присвячена висвітленню депутатів та чиновників, які зрадили довіру народу та чинили злочини проти України.</p>
        </div>
        <div class="buttonRating">РЕЙТИНГ ЗАШКВАРІВ</div>
        <RepresentativeList />
        <div style={{ height: `4px` }}>
          <div class="progress-bar">
            <div class="progress" style={{
              /*width: `${(currentPage / totalPages) * 100}%`*/
              width: `${widthLine}%`,
                  height: '4px',
                  backgroundColor: '#DE442C',
                  position: 'absolute',
                  left: `${(currentPage - 1) * widthLine}%`
            }}></div>
          </div>
        </div>
        <div class="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>&lt;</button>
          <button onClick={nextPage} disabled={currentPage === totalPages}>&gt;</button>
        </div>
        <div style={{ height: `4px` }}></div>
      </div>
    </section>
  );
}

function Investigation() {
  return (
    <div class="appInvestigation">
      <div class="headerInvestigation">
        <h1>ПАМ'ЯТАЙ ПРО УСІ ЗАШКВАРИ ДЕПУТАТІВ ТА ЧИНОВНИКІВ</h1>
      </div>
      <div class="subheaderInvestigation">
        <p>Наша мета - інформувати громадськість про зашквари депутатів та чиновників, засудити їхню поведінку та сприяти їхньому покаранню.</p>
      </div>
      <div class="sectionInvestigation">
        <h2> ЗАШКВАРИ </h2>
        <h2> ОСОБИ </h2>
      </div>
    </div>
  );
}

function News() {
  return (
    <section class="news">
      <h2>Новини</h2>
      <ul>
        <li>
          <img src="logo192.png" alt="Новина 1" />
          <h3>Протест проти нового закону</h3>
          <p>Сьогодні відбулася мирна демонстрація проти нового закону про обмеження прав людини.</p>
        </li>
        <li>
          <img src="logo192.png" alt="Новина 2" />
          <h3>Кампанія проти корупції</h3>
          <p>Ми запустили нову кампанію проти корупції в Україні.</p>
        </li>
        <li>
          <img src="logo192.png" alt="Новина 3" />
          <h3>Допомога постраждалим від репресій</h3>
          <p>Ми надаємо допомогу постраждалим від репресій та насильства.</p>
        </li>
      </ul>
    </section>
  );
}

function Main() {
  return (
    <div>
      <Title />
      <Candidates />
      <Investigation />
      <News />
    </div>
  );
}

export default Main;