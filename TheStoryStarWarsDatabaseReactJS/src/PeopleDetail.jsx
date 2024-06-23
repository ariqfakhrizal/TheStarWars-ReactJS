import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PeopleDetail = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [films, setFilms] = useState([]);
    const [species, setSpecies] = useState([]);
    const [starships, setStarships] = useState([]);
    const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        setPerson(response.data);
         // Fetch additional data
         await fetchAdditionalData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchAdditionalData = async (data) => {
        const fetchPromises = (urls) => urls.map(url => axios.get(url).then(res => res.data));
  
        if (data.films.length) {
          const filmsData = await Promise.all(fetchPromises(data.films));
          setFilms(filmsData);
        }
        if (data.species.length) {
          const speciesData = await Promise.all(fetchPromises(data.species));
          setSpecies(speciesData);
        }
        if (data.starships.length) {
          const starshipsData = await Promise.all(fetchPromises(data.starships));
          setStarships(starshipsData);
        }
        if (data.vehicles.length) {
          const vehiclesData = await Promise.all(fetchPromises(data.vehicles));
          setVehicles(vehiclesData);
        }
      };

    fetchPerson();
  }, [id]);

  if (!person) {
    return <div>Loading...</div>;
  }

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
    <section id="faq" className="faq section" style={{ marginTop: '100px' }}>
      
      <div className="container">

      <Link className="btn btn-danger" to="/">Back to List</Link>
      <br/>
      <br/>
        <div className="row justify-content-center">

            <div className="col-lg-6" data-aos-delay="100">

                <div className="faq-container">

                    <div className="card" style={{ width: '100%' }}>
                        <div className="card-body">
                            <div className="container section-title">
                            <h2>{person.name} </h2>
                            </div>
                        </div>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Birth Year  - { formatBirthYear(person.birth_year)}</li>
                            <li className="list-group-item">Height - { person.height} cm </li>
                            <li className="list-group-item">Mass - { person.mass} kg </li>
                            <li className="list-group-item">Hair Color - {person.hair_color}</li>
                            <li className="list-group-item">Skin Color - {person.skin_color}</li>
                            <li className="list-group-item">Gender - {person.gender}</li>
                        </ul>
                                            
                    </div>
                
                </div>
            </div>

            <div className="col-sm-6" data-aos-delay="100">

                <div className="faq-container">

                    <div className="card" style={{ width: '100%' }}>
                        <div className="card-body">
                            <div className="container section-title">
                            <h2>References </h2>
                            </div>
                        </div>

                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Films
                                        </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <ul>
                                                    {films.map((film) => (
                                                    <li key={film.url}>{film.title}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                        
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Species
                                        </button>
                                        </h2>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <ul>
                                                {species.map((specie) => (
                                                <li key={specie.url}>{specie.name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                    
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Starships
                                        </button>
                                        </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <ul>
                                                {starships.map((starship) => (
                                                <li key={starship.url}>{starship.name}</li>
                                                ))}
                                            </ul>
                                            
                                        </div>
                                        </div>
                                    </div>


                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Vehicles
                                        </button>
                                        </h2>
                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <ul>
                                                {vehicles.map((vehicle) => (
                                                <li key={vehicle.url}>{vehicle.name}</li>
                                                ))}
                                            </ul>
                                            
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                            
                    </div>
                    
                    {/* <div className="faq-item faq-active">
                        <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                        <div className="faq-content">
                        <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                        </div>
                        <i className="faq-toggle bi bi-chevron-right"></i>
                    </div>

                    <div className="faq-item">
                        <h3>Feugiat scelerisque varius morbi enim nunc faucibus?</h3>
                        <div className="faq-content">
                        <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                        </div>
                        <i className="faq-toggle bi bi-chevron-right"></i>
                    </div> */}
                </div>
            </div>
        </div>
      </div>


     
      {/* <div className="container">
      <div>
        <h1>{person.name}</h1>
        <p><strong>Height:</strong> {person.height} cm</p>
        <p><strong>Mass:</strong> {person.mass} kg</p>
        <p><strong>Hair Color:</strong> {person.hair_color}</p>
        <p><strong>Skin Color:</strong> {person.skin_color}</p>
        <p><strong>Eye Color:</strong> {person.eye_color}</p>
        <p><strong>Birth Year:</strong> {person.birth_year}</p>
        <p><strong>Gender:</strong> {person.gender}</p>

        <h2>Films</h2>
        <ul>
            {films.map((film) => (
            <li key={film.url}>{film.title}</li>
            ))}
        </ul>

        <h2>Species</h2>
        <ul>
            {species.map((specie) => (
            <li key={specie.url}>{specie.name}</li>
            ))}
        </ul>

        <h2>Starships</h2>
        <ul>
            {starships.map((starship) => (
            <li key={starship.url}>{starship.name}</li>
            ))}
        </ul>

        <h2>Vehicles</h2>
        <ul>
            {vehicles.map((vehicle) => (
            <li key={vehicle.url}>{vehicle.name}</li>
            ))}
        </ul>

        <Link to="/">Back to List</Link>
        </div>
      </div> */}
      </section>
    </>
   
  );
};

export default PeopleDetail;
