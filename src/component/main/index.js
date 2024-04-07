import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import './index.css'
import { useState, useEffect } from "react";

const Maincontent = (props) => {
    const [col, setStyle] = useState(true)
    const [mobile, setMobile] = useState(window.innerWidth <= 768)
    const changeThecolor = () => {
        setStyle(prevState => !prevState)
    }
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
            <li className = "product-con">
            <div className='kk'>
            <img className = 'image' src = {details.image} alt = "ima" />
            <p className="banner-overview">{truncate(details.title, 25)}</p>
            <p className="call"><a className="aa" href = "Home">Sign</a> in or Create an account to see pricing<p onClick={changeThecolor}>{col ? <CiHeart className='hear'/> : <FaHeart className="heart"/>}</p></p>
            </div>
        </li>
        )
    }

    const forWeb = () => {
        return(
            <li className = "product-con">
            <div className='kk'>
                <img className = 'image' src = {details.image} alt = "ima" />
                <div className="dis-container">
                    <p className="banner-overview">{truncate(details.title, 25)}</p>
                    <p className="call"><a href = "Home">Sign</a> in or Create an account to see pricing<p onClick={changeThecolor}>{col ? <CiHeart className='hear'/> : <FaHeart className="heart"/>}</p></p>
                </div>
            </div>
        </li>
        ) 
    }

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
      };
    const {details} = props
    return(
        <>
        {mobile ? forMobile(): forWeb()}
        </>
    )
}

export default Maincontent