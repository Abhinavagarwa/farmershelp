import Button from '../components/button'
import Styles from'./page.module.css'
export default function Home() {
    return (
        <div className={Styles.container}>
            <div className={Styles.main1}>
            <h1 className={Styles.head}>WELCOME,</h1>
            <h2 className={Styles.head1}>TO THE FARMERSHELP</h2>
            <p className={Styles.para}>Welcome to our Farmer's Help website, your trusted resource for agricultural guidance and support. <br></br>Whether you're just starting out or have years of experience, our platform is designed to provide you with the latest information, tools, and resources to help you succeed in your farming journey. <br></br>From crop management tips to government schemes updates and market prices or MSP, we are here to assist you in every step of the way.<br></br> Get started today by exploring our resources and connecting with experts who can help you grow and thrive.</p>
                        <br></br>
            <Button/>
            <p className={Styles.links}>📞 +91 9999999999<br></br>gmail:abc@gmail.com</p>
            </div>
            <br></br>
            <p className={Styles.contributors}>This Project is created by<br></br>
               Abhinav Agarwal<br></br>
               Devansh Aggarwal<br></br>
               Sneha Joshi<br></br>
            </p>

        </div>
    );
}

