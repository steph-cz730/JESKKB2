import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import About from './About';
import Contact from './Contact';

function App() {
  const [nasaData, setNasaData] = useState(null);
  const [wikiData, setWikiData] = useState(null);

useEffect(() => {
  const fetchNASAData = async () => {
    try {
      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=cIPsR3j79PvPN818xRioqvwRCrw3A9Tzw5bIr7J0');
      setNasaData(response.data);
    } catch (error) {
      console.error('Error fetching NASA data:', error);
    }
  };

  const fetchWikiData = async () => {
    try {
      const response = await fetch('https://api.wikimedia.org/core/v1/wikipedia/en/page/', { 
        method: 'get', 
        headers: new Headers({
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1NWQ5YjY3NGQ3MmI3ZTkzYWU5NzllNWJjZTE2M2E1ZiIsImp0aSI6IjljZTQ2ZjBjMDc3MGFkMjZiY2Q1ZWIyZmMzYjRiZjI1OTUwOWFjMGNmODA1MDAwNWMyNWFlMWRmZjczNjQ2NzRjNDZjMGFkMDk1NTg4MWExIiwiaWF0IjoxNzA2MjMyMTgzLjE3Mzk1NSwibmJmIjoxNzA2MjMyMTgzLjE3Mzk1OCwiZXhwIjoxNzA2MjQ2NTgzLjE3MDE2MSwic3ViIjoiNzQ4MjQxMzMiLCJpc3MiOiJodHRwczovL21ldGEud2lraW1lZGlhLm9yZyIsInJhdGVsaW1pdCI6eyJyZXF1ZXN0c19wZXJfdW5pdCI6NTAwMCwidW5pdCI6IkhPVVIifSwic2NvcGVzIjpbImJhc2ljIl19.aIUDEDh-IwpQWbieCbpKHImxBrEhJscAQ0iMUbpGOJiswSAzmb41MIz-rG03H8k8xsq4X8eMGI7RyO85B_Idl4Q9bnylFi_Er4Hi0g4bNoVKJBVQOapxkixJjhTRcvMmqSZVYBGoUlhhXcTgnK3IYxL6htTHiLZbGBNy40q9w4ezHSpI6mWuOBS6ElFSuXYSUfkZUrOIC04fO5EE-w2edN29YCYxv5RFX8LuvQ6ayEkbg7X-yS9qFhXMGFHQRmJKs_eds9hzfbgKCvQDO1n2ZfXZLMu-DozAQZ2ws4WVLZnYULJ7Fjl0vu2BefHiofWy2VX-CvT9WShQOXzr6hxmiNaA5DoDSqGUmyPkDDzAMoq4BS_i-Wf7yd5A-72LBdlfwrPP7xoCJ-SnQ86njRN4lzXKJw9uflhZnnRADxarodPq22FkkIzxF5_y86wTeeh7ZxvzugtZZax_vA91hWXRxgyxynIVy__AYpvphxuwEafW9iA5Rb59mDr0J5_Dddjxu2HlpXKszYCp-M9OoyPPGP2I3ainSXL7gg3uInUm4Wr_7l5OWtSm92BP_MtsrS90KADcd4BeGP0_ClK9Ja9w40jup4K-EJWO47T9AcrhoASG6btwaUkJuz7c0pLQsfQJUuqlDQYS6afkO3v7mIr_DIDhIVD72pr_eY-3Df2p50E',
        })
    });
    setWikiData(response.data);
    } catch (error) {
      console.error('Error fetching Wiki data:', error);
    }
  };
  fetchWikiData();
  fetchNASAData();
}, []);

return (
  <div>
    <header>
      <h1>Mystery Educator</h1>
    </header>
    <body>
      {nasaData && wikiData && (
        <div>
          <About nasaData={nasaData} wikiData={wikiData}/>
          <Contact/>
        </div>
      )}
    </body>
  </div>
);
}

export default App;
