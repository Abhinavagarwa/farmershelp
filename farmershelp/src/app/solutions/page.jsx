"use client"
import Image from 'next/image';
import Styles from './page.css';
import Link from 'next/link';
import {useState} from "react";

export default function SoilTest() {
    const [soilData, setSoilData] = useState({
      pH: '',
      nitrogen: '',
      phosphorus: '',
      potassium: '',
      organicMatter: '',
    });

  const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
      const { name, value } = e.target;
      setSoilData({
        ...soilData,
        [name]: value, 
      });
      console.log(`Updated ${name}: ${value}`);  
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setResult(null); 
      try {
        const response = await fetch('../api/soil-test', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(soilData),
        });
        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error('Error submitting soil data:', error);
      } finally {
        setLoading(false);
      }
    };

    return(
        <div>
            <h1 className="head">Farmershelp</h1>
            <div class="topnav">
                <Link href="/home">Home</Link>
                <Link href="/solutions" class="active">Solution</Link>
                <Link href="/organizations">Organizations</Link>
                <Link href="/aboutus">About us</Link>
                <Link href="/schemes">Schemes</Link>
            </div>
            <img className="image" src="https://www.strategy-business.com/media/image/44106699_1000x500.jpg" alt="error loading image"></img>
            <h1>Soil Test</h1>
      <form onSubmit={handleSubmit}>
        <label>
          pH:
          <input type="number" name="pH" value={soilData.pH} onChange={handleChange} />
        </label>
        <hr></hr>
        <label>
          Nitrogen (N):
          <input type="number" name="nitrogen" value={soilData.nitrogen} onChange={handleChange} />
        </label>
        <hr />
        <label>
          Phosphorus (P):
          <input type="number" name="phosphorus" value={soilData.phosphorus} onChange={handleChange} />
        </label>
        <hr />
        <label>
          Potassium (K):
          <input type="number" name="potassium" value={soilData.potassium} onChange={handleChange} />
        </label>
        <hr />
        <label>
          Organic Matter:
          <input type="number" name="organicMatter" value={soilData.organicMatter} onChange={handleChange} />
        </label>
        <hr />
        <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {loading && <p>Processing soil data...</p>}
        </div>
    )
}