import './home.css';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const getSearchResults = async (event) => {
    if (event.keyCode === 13) {
      const searchValue = inputRef.current.value;
      const response = await fetch('http://localhost:5000/getEmployees?query='+searchValue);
      const data = await response.json();
      navigate('/searchResults', { state: { results: data } });
    }
  }
  
  return (
    <div className="App">
      <div>
        <h1 className="mainHeader">ES Demo</h1>
        <div className="search-container">
          <input className="searchBar" placeholder='search employees here' type={'text'} ref={inputRef} onKeyDown={getSearchResults}></input>
        </div>
      </div>
    </div>
  );
}

export default Home;
