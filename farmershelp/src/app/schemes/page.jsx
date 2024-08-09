import Image from 'next/image'
import Styles from './page.css'
export default function LoginPage(){
    return(
        <div>
            <h1 className="head">Farmershelp</h1>
            <div class="topnav">
                <a href="#home">Home</a>
                <a href="#news">Solution</a>
                <a href="#contact">Organizations</a>
                <a href="#about">About us</a>
                <a class="active" href="#schemes">Schemes</a>
            </div>
            <img className="image" src="https://www.strategy-business.com/media/image/44106699_1000x500.jpg" alt="error loading image"></img>
        </div>
    )
}