import Image from 'next/image'
import Link from 'next/link'
import Styles from './page.css'
export default function LoginPage(){
    return(
            <div>
            <div class='topnav'>
              <h1 className='head'>FarmersHelp</h1>
              <div>
                <Link href='/home'>Home</Link>
                <Link href='/aboutus'  className='active'>About us</Link>
                <Link href='/organizations'>Organizations</Link>   
                <Link href='/schemes'>Schemes</Link>   
                <Link href='/solutions'>Solution</Link>         
              </div>
            </div>
           <div class='container'>
  <img class='image' src='https://imgs.search.brave.com/tzSube71am5OhN2uXNSULdkIboIgGf3kcbVwWXLxwVE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzIyLzU3LzYz/LzM2MF9GXzYyMjU3/NjMyNF9MRFpTbmpi/aDdib2Z6OGtqZU5R/bXREQjBUUU5mOURl/VC5qcGc' alt='error loading image'/>
  <p class='intro'>Hi, we the Alpha Coders are here. We aim to solve the problems of the farmers with the help of our website &quot;FARMERSHELP&quot;</p>
  <p class='welcome'>Welcome to Farmershelp, your dedicated partner in empowering farmers and cultivating success. We are a community-driven platform committed to providing farmers with the resources, knowledge, and support they need to thrive in today’s agricultural landscape.</p>
  <h2 class='heading'>Our Mission:</h2>
  <p class='mission'>At Farmers Help, our mission is to uplift and empower farmers by providing them with the tools and information necessary to optimize their farming practices, increase productivity, and enhance sustainability. We believe that by supporting farmers, we contribute to stronger, more resilient communities and a healthier planet.</p>
  <h2 class='heading'>What We Do:</h2>
  <p class='what-we-do'>We offer a range of services designed to meet the diverse needs of farmers, from small-scale family operations to large commercial farms. Our platform includes:</p>
  <ol class='list'>
    <li>Expert Advice: Access to a network of agricultural experts who provide guidance on everything from crop selection to pest management and soil health.</li>
    <li>Educational Resources: A comprehensive library of articles, tutorials, and videos covering a wide range of farming topics, including modern farming techniques, sustainable practices, and market trends.</li>
    <li>Community Support: A forum where farmers can connect with each other, share experiences, ask questions, and offer advice. We believe that collective knowledge and collaboration are key to overcoming challenges in agriculture.</li>
    <li>Market Insights: Regular updates on market trends, pricing, and demand to help farmers make informed decisions about their crops and livestock.</li>
    <li>Technology Integration: Information on the latest farming technologies and innovations that can help increase efficiency and productivity, from precision agriculture tools to smart irrigation systems.</li>
  </ol>
  <h2 class='heading'>Our Vision:</h2>
  <p class='vision'>We envision a world where every farmer has the knowledge and resources to succeed, where agriculture is sustainable, profitable, and environmentally friendly. We strive to bridge the gap between traditional farming practices and modern innovations, ensuring that farmers can adapt to the changing demands of the agricultural industry.</p>
  <h2 class='heading'>Why Farmers Help?</h2>
  <p class='why-farmers-help'>Farmers are the backbone of our society, providing the food that sustains us all. Yet, they often face significant challenges, from unpredictable weather to fluctuating markets. At Farmers Help, we understand these challenges and are here to provide support every step of the way. We are committed to being a trusted partner in your farming journey, offering reliable information, practical tools, and a supportive community.</p>
  <p class='call-to-action'>Join us at FarmersHelp and be part of a movement to create a brighter, more sustainable future for agriculture. Together, we can succeed!</p>
  <p class='contact-info'>📞 +91 9999999999 | <a href='mailto:abc@gmail.com'>abc@gmail.com</a></p>
            </div>
        </div>
    )
}
