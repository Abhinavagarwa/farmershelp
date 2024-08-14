import Image from 'next/image'
import Styles from './page.css';
import Link from 'next/link'
export default function LoginPage(){
    return(
        <div>
      <div class='topnav'>
        <h1 className='head'>FarmersHelp</h1>
        <div>
          <Link href='/home' className='active'>Home</Link>
          <Link href='/aboutus'>About us</Link>
          <Link href='/organizations'>Organizations</Link>   
          <Link href='/schemes'>Schemes</Link>   
          <Link href='/solutions'>Solution</Link>         
        </div>
      </div>
            <div className='into1'>     
            <p className='intro'>Welcome to FarmersHelp, your trusted partner in navigating the challenges of modern agriculture. We understand that farming is more than just a livelihood — it's the backbone of our communities and a vital part of sustaining our planet. Yet, the journey is not without its hurdles, from financial difficulties to the pressures of adopting sustainable practices.<br></br>
            Farmers Help is here to empower you with the tools, resources, and support needed to thrive in today&apos;s ever-changing agricultural landscape. Our mission is simple: to provide practical solutions for financial challenges while promoting sustainable farming practices that benefit both you and the environment.<br></br>
            Whether you're seeking advice on securing loans, exploring grants, learning new farming techniques, or connecting with a community of like-minded farmers, Farmers Help is your one-stop resource. Together, we can cultivate a future where agriculture is both prosperous and sustainable. Let&apos;s grow better, together.<br></br>
            </p>
            </div>
            <div className='testimonials'>
            <h1 className='testheading'>Testimonials:</h1>
            <br></br>
            <div className='testimonial-card'>
                <h1 className='test1'>Ramesh Kumar</h1>
                <p>'As a third-generation farmer, I’ve faced my share of challenges, but nothing prepared me for the financial struggles brought on by unpredictable weather and market fluctuations. I was on the brink of giving up when I found Farmers Help. The resources they provided on securing loans and grants were invaluable, and their sustainability guides helped me transform my farming practices.<br></br>

                Today, not only am I financially stable, but my farm is thriving with eco-friendly methods that have reduced costs and improved yields. Farmers Help didn’t just save my farm—they gave me the tools to build a brighter future for my family and community. I’m forever grateful for their support.'<br></br>
                 <br></br>
                — <b>Ramesh Kumar, Farmer from Punjab</b></p>
            </div>
            
            <div className='testimonial-card'>
                <h1 className='test1'>Mohd. Rizwan</h1>
                <p>'As a third-generation farmer, I’ve faced my share of challenges, but nothing prepared me for the financial struggles brought on by unpredictable weather and market fluctuations. I was on the brink of giving up when I found Farmers Help. The resources they provided on securing loans and grants were invaluable, and their sustainability guides helped me transform my farming practices.<br></br>

                Today, not only am I financially stable, but my farm is thriving with eco-friendly methods that have reduced costs and improved yields. Farmers Help didn’t just save my farm—they gave me the tools to build a brighter future for my family and community. I’m forever grateful for their support.'<br></br>
                 <br></br>
                —  <b>Mohd. Rizwan, Farmer from Haryana</b></p>
            </div>
            
            <div className='testimonial-card'>
                <h1 className='test1'>Vinod Kumar</h1>
                <p>'As a third-generation farmer, I’ve faced my share of challenges, but nothing prepared me for the financial struggles brought on by unpredictable weather and market fluctuations. I was on the brink of giving up when I found Farmers Help. The resources they provided on securing loans and grants were invaluable, and their sustainability guides helped me transform my farming practices.<br></br>

                Today, not only am I financially stable, but my farm is thriving with eco-friendly methods that have reduced costs and improved yields. Farmers Help didn’t just save my farm—they gave me the tools to build a brighter future for my family and community. I’m forever grateful for their support.'<br></br>
                 <br></br>
                — <b>Vinod Kumar, Farmer from Uttar Pradesh</b></p>
            </div>

            <div className='testimonial-card'>
                <h1 className='test1'>Vikas Yadav</h1>
                <p>'As a third-generation farmer, I’ve faced my share of challenges, but nothing prepared me for the financial struggles brought on by unpredictable weather and market fluctuations. I was on the brink of giving up when I found Farmers Help. The resources they provided on securing loans and grants were invaluable, and their sustainability guides helped me transform my farming practices.<br></br>

                Today, not only am I financially stable, but my farm is thriving with eco-friendly methods that have reduced costs and improved yields. Farmers Help didn’t just save my farm—they gave me the tools to build a brighter future for my family and community. I’m forever grateful for their support.'<br></br>
                 <br></br>
                —  <b>Mohd. Rizwan, Farmer from Bihar</b></p>
            </div>
            </div>
            
            <p className='links'>📞 +91 9999999999{'        '}gmail:abc@gmail.com</p>
        </div>
    )
}
