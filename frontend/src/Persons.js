import React, { useState } from 'react';
import './css/Main.css';
import './css/Investigation.css';
import './css/Persons.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import candidateImage from './resourse/images/candidate.jpg';
import photo from './resourse/images/photo.jpg';
import duct from './resourse/images/duct.png';
import Pagination from './Pagination.js';


function Title() {
  return (
    <div class="container">
      <div class="divheader1">
        <div class="divHeader">
          <div class="divHeaderTitle">
            <h1 class="latest-investigations-header" style={{ textAlign: `center` }} >РЕЙТИНГ ЗАШКВАРІВ</h1>
            <hr class="divider-latest-investigations-header" />
          </div>
          <p class="description">
            Ця категорія сайту присвячена висвітленню депутатів та чиновників, які зрадили довіру народу та вчинили злочини проти України.
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
      candidateImage: candidateImage,
      description: "Олег Сидоренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    },
    {
      name: "Олег",
      surname: "Сидоренко",
      score: 45,
      party: "Партія справедливості",
      image: photo,
      candidateImage: candidateImage,
      description: "Олег Сидоренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 28,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage,
      description: "Олена Петренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 18,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage,
      description: "Олена Петренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    }, {
      name: "Олена",
      surname: "Петренко",
      score: 12,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage,
      description: "Олена Петренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 10,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage,
      description: "Олена Петренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 9,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage,
      description: "Олена Петренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 9,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage,
      description: "Олена Петренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 8,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage,
      description: "Олена Петренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 6,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage,
      description: "Олена Петренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 5,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage,
      description: "Олена Петренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 5,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage,
      description: "Олена Петренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 2,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage,
      description: "Олена Петренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    },
    {
      name: "Олена",
      surname: "Петренко",
      score: 1,
      party: "Голос України",
      image: photo,
      candidateImage: candidateImage,
      description: "Олена Петренко народився в малому місті. Має вищу освіту з економіки та права. Працює у держслужбі, спеціалізується на фінансах. Швидко ріс у кар'єрі, ставши начальником відділу фінансового моніторингу.",
      position: "Начальник відділу фінансового моніторингу"
    }
  ];

  const itemsPerPage = 12;
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


  const RepresentativeCard = ({ name, surname, score, party, image, candidateImage, description, position }) => (
    <div class="representative-card">
      <Link to={{ pathname: "/person", state: { name, surname, score, party, image, candidateImage, description, position } }}>
        <div class="rectangle1" style={{ backgroundImage: `url(${candidateImage})` }}>
          <div class="rectangle" >
            <div class="score">
              <p>{score} ЗАШКВАРІВ</p>
            </div>
          </div>
        </div>
      </Link>

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
    <div class="representative-list-person">
      {selectedItems.map((rep, index) => (
        <RepresentativeCard
          key={index}
          name={rep.name}
          surname={rep.surname}
          score={rep.score}
          party={rep.party}
          image={rep.image}
          candidateImage={rep.candidateImage}
          description={rep.description}
          position={rep.position}
        />
      ))}
    </div>
  );

  return (
    <section class="news-person">
      <div class="app-person">
        <RepresentativeList />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}

function Investigations() {
  return (
    <div>
      <Title />
      <Candidates />
    </div>
  );
}

export default Investigations;