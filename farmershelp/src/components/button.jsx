import Styles from './button.css'
import Link from 'next/link'
const Butt = () =>{
   return(
    <div className='container'>
        <Link href="/home"className='btn'>Get Started</Link>
    </div>
   )
}
export default Butt