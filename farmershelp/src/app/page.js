import Button from '../components/button'
import Styles from'./page.module.css'
export default function Home() {
    return (
        <div className={Styles.container}>
            <div className={Styles.main1}>
            <h1 className={Styles.head}>WELCOME,</h1>
            <h2 className={Styles.head1}>TO THE FARMERSHELP</h2>
            <p className={Styles.para}>To get started with the problem solution please click on the get started button which is beneath this </p>
            </div>
            <br></br>
            <Button/>
            <br></br>
            <p className={Styles.contributors}>This Project is created by<br></br>
               Abhinav Agarwal<br></br>
               Devansh Aggarwal<br></br>
               Sneha Joshi<br></br>
            </p>
            <p className='links'>📞 +91 9999999999{"        "}gmail:abc@gmail.com</p>
        </div>
    );
}

