import Image from 'next/image'
import Link from 'next/link'
import Styles from './page.css'
export default function LoginPage(){
    return(
        <div>
            <h1 className="head">Farmershelp</h1>
            <div class="topnav">
                <Link href="/home">Home</Link>
                <Link href="/solutions">Solution</Link>
                <Link href="/organizations">Organizations</Link>
                <Link href="/aboutus"class="active">About us</Link>
                <Link href="/schemes">Schemes</Link>
            </div>
            <img className="image" src="https://www.strategy-business.com/media/image/44106699_1000x500.jpg" alt="error loading image"></img>
            <p><br></br>Hi , we the Alpha Coders are here<br>
            </br> We ca solve the problems of the farmers by solution or website named "FARMERSHELP" <br>
            </br>
            by this solution we are very much confident that through this we can solve the farmers problem just loging in this website and making<br>
            </br>Welcome to Farmershelp, your dedicated partner in empowering farmers and cultivating success. We are a community-driven platform committed to providing farmers with the resources, knowledge, and support they need to thrive in today’s agricultural landscape.<br></br>
             </p>
             <h2>Our Mission</h2>
             <p>At Farmers Help, our mission is to uplift and empower farmers by providing them with the tools and information necessary to optimize their farming practices, increase productivity, and enhance sustainability. We believe that by supporting farmers, we contribute to stronger, more resilient communities and a healthier planet.</p>
             <h2>What We Do</h2>
             <p>We offer a range of services designed to meet the diverse needs of farmers, from small-scale family operations to large commercial farms. Our platform includes:</p>
             <ol>
                <li>1. Expert Advice: Access to a network of agricultural experts who provide guidance on everything from crop selection to pest management and soil health.</li>
                <li>2.Educational Resources: A comprehensive library of articles, tutorials, and videos covering a wide range of farming topics, including modern farming techniques, sustainable practices, and market trends.</li>
                <li>3.Community Support: A forum where farmers can connect with each other, share experiences, ask questions, and offer advice. We believe that collective knowledge and collaboration are key to overcoming challenges in agriculture.</li>
                <li>4.Market Insights: Regular updates on market trends, pricing, and demand to help farmers make informed decisions about their crops and livestock.</li>
                <li>5.Technology Integration: Information on the latest farming technologies and innovations that can help increase efficiency and productivity, from precision agriculture tools to smart irrigation systems.</li>
             </ol>
             <h2>Our Vision</h2>
             <p>We envision a world where every farmer has the knowledge and resources to succeed, where agriculture is sustainable, profitable, and environmentally friendly. We strive to bridge the gap between traditional farming practices and modern innovations, ensuring that farmers can adapt to the changing demands of the agricultural industry.</p>
             <h2>Why Farmers Help?</h2>
             <p>Farmers are the backbone of our society, providing the food that sustains us all. Yet, they often face significant challenges, from unpredictable weather to fluctuating markets. At Farmers Help, we understand these challenges and are here to provide support every step of the way. We are committed to being a trusted partner in your farming journey, offering reliable information, practical tools, and a supportive community.</p>
             <p><br></br>Join us at Farmers Help and be part of a movement to create a brighter, more sustainable future for agriculture. Together, we can grow success.</p>
             <p className='links'><br></br>📞 +91 9999999999{"        "}gmail:abc@gmail.com</p>
        </div>
    )
}