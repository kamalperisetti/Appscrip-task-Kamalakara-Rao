import { useState, useEffect } from "react"
import Sidebar from "../Sidebar"
import Maincontent from "../main"
import './index.css'
const Products = () => {
    const [data, setData] = useState([])
    const [mobile, setMobile] = useState(window.innerWidth <= 768)
    const [hide, setHide] = useState(false)
    useEffect(() => {
        getProducts()
        const handleResize = () => {
                    setMobile(window.innerWidth <= 768)
                }
                window.addEventListener('resize', handleResize);
                return () => {
                    window.removeEventListener('resize', handleResize)
                 }
    },[])

    const forMobile = () => {
        return(
            
            <div className=''>
                <div className="filter-container">
                    <div className='hide-container'>
                        <p className="filter" onClick={hideTheContent}>FILTER</p>
                    </div>
                    <div>
                        <select className="recommend">
                            <option value="">RECOMMENDED</option>
                            <option value="">NEWEST FIRST</option>
                            <option value="">POPULAR</option>
                            <option value="">PRICE: HIGH TO LOW</option>
                            <option value="">PRICE: LOW TO HIGH</option>
                        </select>
                    </div>
                </div>
                <hr className='hr'/>
                <div className="">
                        <ul className="products-container">
                            {data.map((each) => (
                                <Maincontent details = {each} isTrue = {hide}/>
                            ))}
                        </ul>
                    {/* {hide ? <div className="all-content-containers"><div className="none">
                    <div className="nonne">
                        <ul className="products-container">
                            {data.map((each) => (
                                <Maincontent details = {each} isTrue = {hide}/>
                            ))}
                        </ul>
                        </div>
                    </div></div>: <div className="all-content-container"> <Sidebar/> 
                    <div className="none">
                        <ul className="products-container">
                            {data.map((each) => (
                                <Maincontent details = {each} isTrue = {hide}/>
                            ))}
                        </ul>
                    </div> </div>} */}          
                </div>
        </div>
        )
    }

    const forWeb = () => {
        return(
            <div>
            <div className='filter-container'>
            <div className='hide-container'>
            <b>3425 ITEMS</b>
            <p onClick={hideTheContent}>HIDE FILTER</p>
            </div>
            <div>
                <select className="recommend">
                    <option value="">RECOMMENDED</option>
                    <option value="">NEWEST FIRST</option>
                    <option value="">POPULAR</option>
                    <option value="">PRICE: HIGH TO LOW</option>
                    <option value="">PRICE: LOW TO HIGH</option>
                </select>
            </div>
            
        </div>
        <hr className='hr'/>
        <div className="all-content-container">
            {hide ? <div className="all-content-container"><div className="none">
            <div className="nonne">
                <ul className="products-container">
                    {data.map((each) => (
                        <Maincontent details = {each} isTrue = {hide}/>
                    ))}
                </ul>
                </div>
                <div>
                    <h1>Hello</h1>
                </div>
            </div></div>: <div className="all-content-container"> <Sidebar/> 
            <div className="none">
                <ul className="products-container">
                    {data.map((each) => (
                        <Maincontent details = {each} isTrue = {hide}/>
                    ))}
                </ul>
            </div> 
            </div>}
           
                     
        </div>
        </div>
        )
    }

    const getProducts = async() => {
        const url = 'https://fakestoreapi.com/products'
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        console.log(data)
    }

    const hideTheContent = () => {
        setHide(prevState => !prevState)
    }
    return(
        <div>
            {mobile? forMobile(): forWeb()}
        </div>
    )
}

export default Products