import Button from '../components/button'
import Styles from'./page.module.css'
import Image from 'next/image';

export default function Home() {
    return (
        <div className={Styles.container}>
            <div className={Styles.main1}> 
            <Image src="/logo.png" alt="FarmersHelp Logo" className={Styles.logo} width={100} height={100}/>
            <h1 className={Styles.head}>FarmersHelp</h1>
            <p className={Styles.para}>Welcome to our Farmer's Help website, your trusted resource for agricultural guidance and support. Whether you're just starting out or have years of experience, our platform is designed to provide you with the latest information, tools, and resources to help you succeed in your farming journey. From crop management tips to government schemes updates and market prices or MSP, we are here to assist you in every step of the way. Get started today by exploring our resources and connecting with experts who can help you grow and thrive.</p>
                        <br></br>
            <Button/>
            <p className={Styles.links}>📞 +91 9999999999<br></br>gmail:abc@gmail.com</p>
            </div>
            <br></br>
            <p className={Styles.contributors}>This Project is created by:<br></br>
               Abhinav Agarwal<br></br>
               Devansh Aggarwal<br></br>
               Sneha Joshi<br></br>
            </p>

        </div>
    );
}

