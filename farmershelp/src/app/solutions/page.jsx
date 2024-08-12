"use client"
import Image from 'next/image';
import Styles from './page.css';
import Link from 'next/link';
import {useState} from "react";

export default function SoilTest() {
  const [pH, setPH] = useState('');
  const [nitrogen, setNitrogen] = useState('');
  const [phosphorus, setPhosphorus] = useState('');
  const [potassium, setPotassium] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    const res = await fetch('../api/soil-test.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        pH: parseFloat(pH), 
        nitrogen: parseFloat(nitrogen), 
        phosphorus: parseFloat(phosphorus), 
        potassium: parseFloat(potassium) 
      }),
    });

    if (!res.ok) {
      throw new Error('API request failed');
    }

    const data = await res.json();
    if (!data.soilQuality) {
      throw new Error('Unexpected data format');
    }

    setResult(data.soilQuality);
    setError(null);
  } catch (err) {
    setResult(null); 
    setError('Failed to analyze soil data. Please check your inputs.');
  }
  };

    return(
        <div>
            <h1 className="head">Farmershelp</h1>
            <hr></hr>
            <div class="topnav">
                <Link href="/home">Home</Link>
                <Link href="/solutions" class="active">Solution</Link>
                <Link href="/organizations">Organizations</Link>
                <Link href="/aboutus">About us</Link>
                <Link href="/schemes">Schemes</Link>
            </div>
            <img className="image" src="https://www.strategy-business.com/media/image/44106699_1000x500.jpg" alt="error loading image"></img>
            <h1>Soil Test</h1>
            <h1>Soil Testing</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>pH Level:</label>
          <input type="number" value={pH} onChange={(e) => setPH(e.target.value)} step="0.1" required />
        </div>
        <div>
          <label>Nitrogen (ppm):</label>
          <input type="number" value={nitrogen} onChange={(e) => setNitrogen(e.target.value)} required />
        </div>
        <div>
          <label>Phosphorus (ppm):</label>
          <input type="number" value={phosphorus} onChange={(e) => setPhosphorus(e.target.value)} required />
        </div>
        <div>
          <label>Potassium (ppm):</label>
          <input type="number" value={potassium} onChange={(e) => setPotassium(e.target.value)} required />
        </div>
        <button type="submit">Test Soil</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <p>Soil Quality: {result}</p>}
        </div>
    )
}