import Image from 'next/image'
import Styles from './page.css'
import Link from 'next/link'
export default function LoginPage(){
    return(
        <div>
            <h1 className="head">Farmershelp</h1>
            <div class="topnav">
                <Link href="/home">Home</Link>
                <Link href="/solutions">Solution</Link>
                <Link href="/organizations" class="active">Organizations</Link>
                <Link href="/aboutus">About us</Link>
                <Link href="/schemes">Schemes</Link>
            </div>
            <img className="image" src="https://www.strategy-business.com/media/image/44106699_1000x500.jpg" alt="error loading image"></img>
        </div>
    )
}