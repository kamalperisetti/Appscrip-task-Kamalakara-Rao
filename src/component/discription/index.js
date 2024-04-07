import './index.css'
import { useState, useEffect } from 'react'

const Description = () => {

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
            <div className='description-container'>
            <div className='cont'>
                <h2>DISCOVER OUR PRODUCTS</h2>
                <p className='p'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
        </div>
        )

    }

    const foeWeb = () => {
        return(
            <div className='description-container'>
            <div className='cont'>
                <h2>DISCOVER OUR PRODUCTS</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
        </div>
        )
    }
    return(
        <div className="description-containers">
            {mobile ? forMobile(): foeWeb()}
        </div>
        
    )
}

export default Description