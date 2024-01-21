import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [nasaData, setNasaData] = useState(null);
  const [harvardData, setHarvardData] = useState(null);
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=cIPsR3j79PvPN818xRioqvwRCrw3A9Tzw5bIr7J0')
    .then(response => setNasaData(response.data))
    .catch(error => console.error('Error fetching NASA data:', error));

    axios.get('https://api.harvard.edu/data?api_key=YOUR_HARVARD_API_KEY')
    .then(response => setHarvardData(response.data))
    .catch(error => console.error('Error fetching Harvard data:', error));
  }, []);

  return (
      <div>
        <header>
          <h1>Mystery Educator</h1>
        </header>
        <body>

        </body>
      </div>
  )
}

export default App
