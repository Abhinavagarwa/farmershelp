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
      <div>
      <div class="topnav">
        <h1 className="head">FarmersHelp</h1>
        <div>
          <Link href="/home">Home</Link>
          <Link href="/aboutus">About us</Link>
          <Link href="/organizations">Organizations</Link>   
          <Link href="/schemes">Schemes</Link>   
          <Link href="/solutions" className="active">Solution</Link>         
        </div>
      </div>
        <div className="soil-test-container">
  <img className="image" src="https://imgs.search.brave.com/hswj2eqCJ_uK0-0tLTJ-DkkcQnHY7XkUp72b4NNeCK4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mcmVzaGx5LXdh/dGVyZWQtcGxhbnRf/MjMtMjE0NzYwOTc1/OS5qcGc" alt="error loading image" />
  <div className="steps-container">
    <h3>STEPS FOR THE SOIL TEST:</h3>
    <p className="steps">
      1. Get the soil checked<br />
      2. Go to trusted lab for the test<br />
      3. Take the report<br />
      4. Enter the details here
    </p>
  </div>
  <div className="test-container">
    <p className="subhead">
      We have designed a special thing for Farmers <br />
      This would help them to find what their soil is lacking
    </p>
  </div>
  <div className="full-container">
  <div className="form-container">
    <h3>SOIL TESTING:</h3>
    <form>
      <div className="form-group">
        <label>pH Level:</label>
        <input
          type="number"
          value={pH}
          onChange={(e) => setPH(e.target.value)}
          step="0.1"
          required
        />
      </div>
      <div className="form-group">
        <label>Nitrogen (ppm):</label>
        <input
          type="number"
          value={nitrogen}
          onChange={(e) => setNitrogen(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Phosphorus (ppm):</label>
        <input
          type="number"
          value={phosphorus}
          onChange={(e) => setPhosphorus(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Potassium (ppm):</label>
        <input
          type="number"
          value={potassium}
          onChange={(e) => setPotassium(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Organic Matter (%):</label>
        <input
          type="number"
          value={organicMatter}
          onChange={(e) => setorganicMatter(e.target.value)}
          required
        />
      </div>
      <button type="button" onClick={resultsoil}>
        Test Soil
      </button>
    </form>
    <h3>SOIL REPORT:</h3>
    <p className="result">{result}</p>
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
</div>
</div>
</div>
    )
}
