import './index.css'
import logo from '../images/Logo.png'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from 'react';

const Navber = () => {
    const [mobile, setMobile] = useState(window.innerWidth <= 768)
    console.log(mobile)
    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 768)
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    const forMobile = () => {
        return(
        <nav className='nav-container'>

            <div className='nav-header'>
            <IoMenu className='menu'/>
                <div className = "logo">
                    <img src = {logo} alt = "logo"/>
                </div>
                <div>
                    <h1>LOGO</h1>
                </div>
                <div className='nav-icons'>
                    <CiSearch />
                    <CiHeart />
                    <SlHandbag />
                    {/* <IoPersonOutline />
                    <select className='nav-select'>
                        <option>
                            ENG
                        </option>
                        <option>
                            TEL
                        </option>
                    </select> */}
                </div>
            </div>
            <div className='nav-content'>
                <h3>Home</h3>
                <h3>SHOP</h3>
                {/* <h3>SKILLS</h3>
                <h3>STORIES</h3>
                <h3>ABOUT</h3>
                <h3>CONTACT US</h3> */}
            </div>
        </nav>
        )
    }

    const forWeb = () => {
        return(
            <nav className='nav-container'>
            <div className='nav-header'>
                <div className = "logo">                   
                    <img src = {logo} alt = "logo"/>
                </div>
                <div>
                    <h1>LOGO</h1>
                </div>
                <div className='nav-icons'>
                    <CiSearch />
                    <CiHeart />
                    <SlHandbag />
                    <IoPersonOutline />
                    <select className='nav-select'>
                        <option>
                            ENG
                        </option>
                        <option>
                            TEL
                        </option>
                    </select>
                </div>
            </div>
            <div className='nav-content'>
                <h3>SHOP</h3>
                <h3>SKILLS</h3>
                <h3>STORIES</h3>
                <h3>ABOUT</h3>
                <h3>CONTACT US</h3>
            </div>
        </nav>
        )
    }
    return(
        <div>
            {mobile ? forMobile() : forWeb()}
        </div>
    )
}

export default Navber