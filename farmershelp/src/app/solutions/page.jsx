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
  const [organicMatter, setorganicMatter] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  let soiltest=''
  const resultsoil=()=>{
    if (pH < 6) {
      soiltest+='Increase soil pH by adding lime.';
    } else if (pH > 7.5) {
      soiltest+='Lower soil pH by adding sulfur or organic matter.';
    }
    else{
      soiltest+="Soil's pH is good"; 
    }
    if (nitrogen < 20) {
      soiltest+='Apply nitrogen-rich fertilizers such as urea or ammonium nitrate.';
    }

    if (phosphorus < 30) {
      soiltest+='Apply phosphorus fertilizers like superphosphate.';
    }

    if (potassium < 40) {
      soiltest+='Apply potassium-rich fertilizers like potassium sulfate.';
    }

    if (organicMatter < 2) {
      soiltest+='Incorporate compost or organic matter into the soil.';
    }
    setResult(soiltest);
  }
    return(
        <div className='container'>
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
            <h3>Steps for the soil test</h3>
            <p className='steps'>1. Get the soil checked<br></br>
            2. Go to trusted lab for the test<br></br>
            3. take the report<br></br>
            4. Enter the details here</p>
            <h1 className='test'>Soil Test</h1>
            <p className='subhead'>We have designed a special thing for Farmers <br></br>This would help them to find what their soil is lacking</p>
            <h3>Soil Testing</h3>
            <div className='form'>
        <div>
          <label>pH Level:<br></br></label>
          <input type="number" value={pH} onChange={(e) => setPH(e.target.value)} step="0.1" required />
        </div>
        <div>
          <label>Nitrogen (ppm):<br></br></label>
          <input type="number" value={nitrogen} onChange={(e) => setNitrogen(e.target.value)} required />
        </div>
        <div>
          <label>Phosphorus (ppm):<br></br></label>
          <input type="number" value={phosphorus} onChange={(e) => setPhosphorus(e.target.value)} required />
        </div>
        <div>
          <label>Potassium (ppm):<br></br></label>
          <input type="number" value={potassium} onChange={(e) => setPotassium(e.target.value)} required />
        </div>
        <div>
          <label>Organic Matter (%):<br></br></label>
          <input type="number" value={organicMatter} onChange={(e) => setorganicMatter(e.target.value)} required />
        </div>
        <button type="submit" onClick={resultsoil}>Test Soil</button>
        <h3>Soil Report:</h3>
        <p className='resu'>{result}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        </div>
    )
}