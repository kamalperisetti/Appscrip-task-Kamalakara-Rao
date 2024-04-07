import './index.css'

const Filter = () => {
    return(
        <div className='filter-container'>
            <div className='hide-container'>
            <b>3425 ITEMS</b>
            <p>HIDE FILTER</p>
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
    )
}

export default Filter