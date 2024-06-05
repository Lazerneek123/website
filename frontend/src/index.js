import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import candidateImage from './resourse/images/candidate.jpg';
import photo from './resourse/images/photo.jpg';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Головна</a></li>
          <li><a href="#">Про нас</a></li>
          <li><a href="#">Новини</a></li>
          <li><a href="#">Контакти</a></li>
        </ul>
      </nav>
      <div class="logo">
        <img src="logo192.png" alt="Сайт спротиву" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section class="hero">
      <h1>Сайт спротиву</h1>
      <p>Ми є об'єднанням людей, які борються за свободу та демократію в Україні.</p>
      <button>Долучитися до нас</button>
    </section>
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
    }
  ];

  const RepresentativeCard = ({ name, surname, score, party, image, candidateImage }) => (
    <div className="representative-card">
      <div className="rectangle" style={{ backgroundImage: `url(${candidateImage})` }}>
        <div className="score">
          <p>{score} ЗАШКВАРІВ</p>
        </div>
      </div>

      <div className="info">
        <h3 className="name">{name}</h3>
        <h3 className="surname">{surname}</h3>
        <div className="party-card">
          <img className="photo" src={image} alt={`${party}`} />
          <p className="party">{party}</p>
        </div>
      </div>
    </div>
  );

  const RepresentativeList = () => (
    <div className="representative-list">
      {representatives.map((rep, index) => (
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
      <h2>Новини</h2>
      <div className="app">
        <h1>Рейтинг зашкварів</h1>
        <p>Ця категорія сайту присвячена висвітленню депутатів та чиновників, які зрадили довіру народу та чинили злочини проти України.</p>
        <RepresentativeList />
      </div>
    </section>
  );
}

function Features() {
  return (
    <section class="features">
      <h2>Що ми робимо</h2>
      <ul>
        <li>
          <img src="logo192.png" alt="Іконка 1" />
          <h3>Організація протестів</h3>
          <p>Ми організовуємо мирні протести проти авторитаризму та порушення прав людини.</p>
        </li>
        <li>
          <img src="logo192.png" alt="Іконка 2" />
          <h3>Проведення кампаній</h3>
          <p>Ми проводимо інформаційні кампанії для поширення правди про ситуацію в Україні.</p>
        </li>
        <li>
          <img src="logo192.png" alt="Іконка 3" />
          <h3>Допомога постраждалим</h3>
          <p>Ми надаємо допомогу постраждалим від репресій та насильства.</p>
        </li>
      </ul>
    </section>
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

function Footer() {
  return (
    <footer>
      <p>© 2023 Сайт спротиву. Всі права захищені.</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Candidates />
      <Features />
      <News />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));