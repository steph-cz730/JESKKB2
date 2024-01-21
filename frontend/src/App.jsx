import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import About from './About';
import Contact from './Contact';

function App() {
  const [nasaData, setNasaData] = useState(null);
  const [harvardData, setHarvardData] = useState(null);

useEffect(() => {
  const fetchNASAData = async () => {
    try {
      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=cIPsR3j79PvPN818xRioqvwRCrw3A9Tzw5bIr7J0');
      setNasaData(response.data);
    } catch (error) {
      console.error('Error fetching NASA data:', error);
    }
  };

  const fetchHarvardData = async () => {
    try {
      const response = await axios.get('https://api.harvard.edu/data?api_key=YOUR_HARVARD_API_KEY');
      setHarvardData(response.data);
    } catch (error) {
      console.error('Error fetching Harvard data:', error);
    }
  };

  fetchNASAData();
  fetchHarvardData();
}, []);

return (
  <div>
    <header>
      <h1>Mystery Educator</h1>
    </header>
    <body>
      {nasaData && harvardData && (
        <div>
          <About nasaData={nasaData} harvardData={harvardData}/>
          <Contact/>
        </div>
      )}
    </body>
  </div>
);
}

export default App;
