'use client'
import Image from 'next/image'
import Styles from './page.css'
import Link from 'next/link'
import { useState } from 'react';
const schemesData = {
    1: [{ name: "YSR Rythu Bharosa", link: "https://ysrrythubharosa.ap.gov.in/" }],
    2: [{ name: "Chief Minister's Krishi Rinn Yojana", link: "https://arunachalpradesh.gov.in/cm-krishi-rinn-yojana/" }],
    3: [{ name: "Mukhyamantrir Krishi Sa-Sajuli Yojana", link: "https://mksy.assam.gov.in/" }],
    4: [{ name: "Bihar Rajya Fasal Sahayata Yojana", link: "https://pacsonline.bih.nic.in/" }],
    5: [{ name: "Rajiv Gandhi Kisan Nyay Yojana", link: "https://rgkny.cg.nic.in/" }],
    6: [{ name: "Krishi Card Scheme", link: "https://www.agri.goa.gov.in/" }],
    7: [{ name: "Mukhyamantri Pak Sangrah Yojana", link: "https://ikhedut.gujarat.gov.in/" }],
    8: [{ name: "Bhavantar Bharpayee Yojana", link: "https://fasal.haryana.gov.in/" }],
    9: [{ name: "Himachal Pushp Kranti Yojana", link: "https://hpkvk.org/" }],
    10: [{ name: "Mukhya Mantri Krishi Ashirwad Yojana", link: "https://mmkay.jharkhand.gov.in/" }],
    11: [{ name: "Krishi Yantradhare Scheme", link: "https://raitamitra.karnataka.gov.in/" }],
    12: [{ name: "Subiksha Keralam", link: "https://www.keralaagriculture.gov.in/" }],
    13: [{ name: "Mukhyamantri Kisan Kalyan Yojana", link: "https://mpkrishi.mp.gov.in/" }],
    14: [{ name: "Chhatrapati Shivaji Maharaj Shetkari Sanman Yojana", link: "https://csmsy.in/" }],
    15: [{ name: "Mission Organic Value Chain Development for North Eastern Region", link: "https://manipurorganicmission.gov.in/" }],
    16: [{ name: "Integrated Village Development Scheme", link: "https://megagriculture.gov.in/" }],
    17: [{ name: "New Land Use Policy (NLUP)", link: "https://nlup.mizoram.gov.in/" }],
    18: [{ name: "Chief Minister’s Corpus Fund for Agricultural Development", link: "https://nagaland.gov.in/" }],
    19: [{ name: "KALIA (Krushak Assistance for Livelihood and Income Augmentation) Scheme", link: "https://kalia.odisha.gov.in/" }],
    20: [{ name: "Punjab Mandi Board’s Kisan Mitra Scheme", link: "https://punjabmandiboard.gov.in/" }],
    21: [{ name: "Mukhyamantri Krishak Sathi Yojana", link: "https://rajkisan.rajasthan.gov.in/" }],
    22: [{ name: "Sikkim Organic Mission", link: "https://sikkimorganicmission.gov.in/" }],
    23: [{ name: "Amma Bio-Fertilizer Scheme", link: "https://www.tnagrisnet.tn.gov.in/" }],
    24: [{ name: "Rythu Bandhu Scheme", link: "https://ifmis.telangana.gov.in/" }],
    25: [{ name: "Mukhyamantri Samriddhi Yojana", link: "https://tripura.gov.in/" }],
    26: [{ name: "Kisan Uday Yojana", link: "https://upagriculture.com/" }],
    27: [{ name: "Uttarakhand Organic Commodity Board Scheme", link: "https://www.uocb.org/" }],
    28: [{ name: "Bangla Shasya Bima", link: "https://banglashasyabima.net/" }],
    29: [{ name: "Andaman & Nicobar Islands Scheme", link: "https://andaman.gov.in/" }],
    30: [{ name: "Chandigarh Scheme", link: "https://chandigarh.gov.in/" }],
    31: [{ name: "Dadra and Nagar Haveli and Daman and Diu Scheme", link: "https://dnh.gov.in/" }],
    32: [{ name: "Delhi Scheme", link: "https://delhi.gov.in/" }],
    33: [{ name: "Jammu & Kashmir Scheme", link: "https://jk.gov.in/" }],
    34: [{ name: "Ladakh Scheme", link: "https://ladakh.nic.in/" }],
    35: [{ name: "Lakshadweep Scheme", link: "https://lakshadweep.gov.in/" }],
    36: [{ name: "Puducherry Scheme", link: "https://py.gov.in/" }],  
    37: [{ name:"Choose an option",link:"#"}],
  };  

export default function LoginPage(){
    const [selectedState, setSelectedState] = useState('');
    const [schemes, setSchemes] = useState([]);
  
    const handleStateChange = (e) => {
      const stateId = parseInt(e.target.value);
      setSelectedState(stateId);
      setSchemes(schemesData[stateId] || []);
    };
  
    return(
      <div>
      <div class="topnav">
        <h1 className="head">FarmersHelp</h1>
        <div>
          <Link href="/home">Home</Link>
          <Link href="/aboutus">About us</Link>
          <Link href="/organizations">Organizations</Link>   
          <Link href="/schemes"  className="active">Schemes</Link>   
          <Link href="/solutions">Solution</Link>         
        </div>
      </div>
            <h2>Private Sector and NGO Initiatives</h2>
            <br></br>
            <h3>1.IIFCO Kisan Agriculture App</h3>
            <ul>
                <li><h4>Objective:</h4><p>Empowers farmers with real-time information and agricultural advice.</p></li>
                <l1><h4>Benefits</h4><p className='ben'>1. Provides weather forecasts, market prices, and farming techniques.<br></br></p><p className='ben'>2.Connects farmers with experts for personalized guidance.</p></l1>
            </ul>
            <br></br>
            <h3>2.Tata Trusts – Digital Agriculture</h3>
            <ul>
                <li><h4>Objective:</h4><p>Promotes the use of technology in farming.  </p></li>
                <li><h4>Benefits:</h4><p className='ben'>1. Training programs on digital tools for precision farming.<br></br></p><p className='ben'>2. Access to digital platforms for market linkages and financial services.</p></li>
            </ul>
            <br></br>
            <h2>Personalized Schemes</h2>
            <label className='choose'for="states">Choose a State: </label>
            <select onChange={handleStateChange} className='states'>
                <option value="1">Andhra Pradesh</option>
                <option value="2">Arunachal Pradesh</option>
                <option value="3">Assam</option>
                <option value="4">Bihar</option>
                <option value="5">Chhattisgarh</option>
                <option value="6">Goa</option>
                <option value="7">Gujarat</option>
                <option value="8">Haryana</option>
                <option value="9">Himachal Pradesh</option>
                <option value="10">Jharkhand</option>
                <option value="11">Karnataka</option>
                <option value="12">Kerala</option>
                <option value="13">Madhya Pradesh</option>
                <option value="14">Maharashtra</option>
                <option value="15">Manipur</option>
                <option value="16">Meghalaya</option>
                <option value="17">Mizoram</option>
                <option value="18">Nagaland</option>
                <option value="19">Odisha</option>
                <option value="20">Punjab</option>
                <option value="21">Rajasthan</option>
                <option value="22">Sikkim</option>
                <option value="23">Tamil Nadu</option>
                <option value="24">Telangana</option>
                <option value="25">Tripura</option>
                <option value="26">Uttar Pradesh</option>
                <option value="27">Uttarakhand</option>
                <option value="28">West Bengal</option>
                <option value="29">Andaman and Nicobar Islands</option>
                <option value="30">Chandigarh</option>
                <option value="31">Dadra and Nagar Haveli and Daman and Diu</option>
                <option value="32">Delhi</option>
                <option value="33">Jammu and Kashmir</option>
                <option value="34">Ladakh</option>
                <option value="35">Lakshadweep</option>
                <option value="36">Puducherry</option>
                <option value="37">None of these</option>
            </select>
            <h2>Schemes Available:</h2>
            <br></br>
      {schemes.length > 0 ? (
        <ul className='sol'>
          {schemes.map((scheme, index) => (
            <li key={index}>
                <a href={scheme.link}>
                    {scheme.name}
                </a>
                <br></br></li>
          ))}
        </ul>
      ) : (
        <p>No schemes available for the selected state.</p>
      )}
      <br></br>
      <h2>How to Apply for Schemes:</h2>
      <br></br>
      <p className='apply'>1. Identify the Scheme: Explore the schemes listed above to find those that suit your needs.<br></br> 
      2. Eligibility Check: Ensure you meet the eligibility criteria for the chosen scheme.<br></br>
      3. Application Process: Follow the application process detailed under each scheme. You may need to submit necessary documents, either online or at designated centers.<br></br>
      4. Track Your Application: Many schemes offer online tracking. Keep your reference number handy to monitor the status of your application.
      </p>
      <br></br>
      <h2>Need Assistance?</h2>
      <br></br>
      <p className='assistance'>If you need help navigating these schemes or applying for them, our team is here to assist you. Contact us at +919999999999 or visit our nearest help center.</p><br />
        </div>
    )
}
