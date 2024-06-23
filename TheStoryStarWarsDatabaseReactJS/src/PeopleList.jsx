import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SocialLinks = () => {
    return (
        <p>More From Star Wars:
            <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                <a href="https://twitter.com/starwars" className="social-link"><i className="bi bi-twitter-x"></i></a>
                <a href="https://www.facebook.com/StarWars" className="social-link"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/starwars/" className="social-link"><i className="bi bi-instagram"></i></a>
                <a href="https://twitter.com/starwars" className="social-link"><i className="bi bi-twitter"></i></a>
                <a href="https://www.youtube.com/user/starwars" className="social-link"><i className="bi bi-youtube"></i></a>
            </div>
        </p>
    );
}

const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState('https://swapi.dev/api/people/?page=1');
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(currentPage);
        setPeople(response.data.results);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    if (nextPage) {
      setCurrentPage(nextPage);
    }
  };

  const handlePreviousPage = () => {
    if (previousPage) {
      setCurrentPage(previousPage);
    }
  };

  const getIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  const formatBirthYear = (birthYear) => {
    // Example: Convert '19BBY' to a different format
    if (birthYear.endsWith('BBY')) {
      return `${birthYear.slice(0, -3)} years before the Battle of Yavin`;
    } else if (birthYear.endsWith('ABY')) {
      return `${birthYear.slice(0, -3)} years after the Battle of Yavin`;
    } else {
      return birthYear; // return as is if the format is not recognized
    }
  };

  return (
    <>
      <section id="schedule" className="schedule section" style={{ marginTop: '100px' }}>
      <div className="container section-title">
        <h2>The Story: Star Wars Database!<br /></h2>
        <SocialLinks />
      </div>
      <div className="container">
        <div className="tab-content row justify-content-center"  data-aos-delay="200">

            <h3 className="sub-heading">People List</h3>

            <div className="col-lg-9 tab-pane fade show active">

                {people.map((person) => (
                        <React.Fragment key={person.name}>
                         <div className="row schedule-item">
                            <div className="col-md-2" style={{ textTransform: 'capitalize' }}>
                                {person.gender}
                            </div>
                            <div className="col-md-10">
                                <div className="speaker">
                                    <img src="assets/img/droid.png" alt="Credits : https://icons8.com/icon/LOx-UYbK9yQs/stormtrooper"/>
                                </div>
                                <h4><Link to={`/people/${getIdFromUrl(person.url)}`}>{person.name}</Link> <span> ( {formatBirthYear(person.birth_year)} ) | {person.height} cm - {person.mass} kg</span></h4>
                                <p>Characteristics : <b>Hair Color </b> - {person.hair_color} |  <b>Skin Color </b> - {person.skin_color} |  <b>Eye Color </b> - {person.eye_color}</p>
                            </div>
                        </div>
                        </React.Fragment>
                ))}

                
            </div>

            <div className="col-lg-9">
            <br />
                <div className="text-center">
                    
                    <button className="btn btn-warning mr-2" onClick={handlePreviousPage} disabled={!previousPage}>
                        Previous
                    </button>
                    &nbsp;
                    <button className="btn btn-warning" onClick={handleNextPage} disabled={!nextPage}>
                        Next
                    </button>
                        
                </div>

                
            </div>
            
        </div>
      </div>
      </section>
    </>
  );
};

export default PeopleList;
