import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function Dashboard() {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState('https://swapi.dev/api/people/?page=1');
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  const [count, setCount] = useState(1)
  
//   function nextPage() {
//     setCount(count + 1)
//   }

//   function prevPage() {
//     setCount(count === 1 ? 1 : count - 1)
//   }

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

//   useEffect(() => {
//     fetch("https://swapi.dev/api/people/").then(res => res.json()).then(
//       data => setListPeople(data)
//     )
//   }, [count])

  return (
    <>
      <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {people.map((person) => (
          <li key={person.name}>
          <a href={person.url} target="_blank" rel="noopener noreferrer">
            {person.name}
          </a> - {person.height}cm - {person.mass}kg
        </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={!previousPage}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={!nextPage}>
          Next
        </button>
      </div>
    </div>

      {/* <main>
        <header>
          <p>{ count }</p>
        </header>
        <button onClick={prevPage}>Prev Page</button>
        <button onClick={nextPage}>Next Page</button>
        <article>
          <h3>{ people?.name } { people?.count }</h3>
          <p>Height: { people?.height } Cm</p>
          <p>Mass: { people?.mass } Kg</p>
          <p>Gender: { people?.gender }</p>
        </article>
      </main> */}
    </>
  )
}

export default Dashboard
