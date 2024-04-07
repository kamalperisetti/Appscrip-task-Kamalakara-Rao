import './index.css'
const Sidebar = () => {
    return(
        <div className = 'sidebar'>
            <div>
                <input id = "coustomize" type='checkbox' />
                <label htmlFor='coustomize'>CUSTOMIZBLE</label>  
            </div>
            <div>
                <details open> 
                    <summary>IDEAL FOR<p>All</p></summary>
                    <p>Unselect all</p>
                    <input type = "checkbox" id = "men"/>
                    <label htmlFor='men'>Men</label><br />
                    <input type = "checkbox" id = "women"/>
                    <label htmlFor='women'>Women</label><br />
                    <input type = "checkbox" id = "baby"/>
                    <label htmlFor='baby'>Baby & Kids</label>
                </details>
            </div>
            <hr className='hrr'/>
            <div>
                <details>
                    <summary>OCCASION<p>All</p></summary>             
                    <input type = "checkbox" id = "men"/>
                    <label htmlFor='men'>Men</label><br />
                    <input type = "checkbox" id = "women"/>
                    <label htmlFor='women'>Women</label><br />
                    <input type = "checkbox" id = "baby"/>
                    <label htmlFor='baby'>Baby & Kids</label>
                </details>
            </div>
            <hr className='hrr'/>
            <div>
            <details>
                    <summary>WORK<p>All</p></summary>                
                    <input type = "checkbox" id = "men"/>
                    <label htmlFor='men'>Men</label><br />
                    <input type = "checkbox" id = "women"/>
                    <label htmlFor='women'>Women</label><br />
                    <input type = "checkbox" id = "baby"/>
                    <label htmlFor='baby'>Baby & Kids</label>
                </details>
            </div>
            <hr className='hrr'/>
            <div>
            <details>
                    <summary>FABRIC<p>All</p></summary>           
                    <input type = "checkbox" id = "men"/>
                    <label htmlFor='men'>Men</label><br />
                    <input type = "checkbox" id = "women"/>
                    <label htmlFor='women'>Women</label><br />
                    <input type = "checkbox" id = "baby"/>
                    <label htmlFor='baby'>Baby & Kids</label>
                </details>
            </div>
            <hr className='hrr'/>
            <div>
            <details>
                    <summary>SUITABLE FOR<p>All</p></summary>         
                    <input type = "checkbox" id = "men"/>
                    <label htmlFor='men'>Men</label><br />
                    <input type = "checkbox" id = "women"/>
                    <label htmlFor='women'>Women</label><br />
                    <input type = "checkbox" id = "baby"/>
                    <label htmlFor='baby'>Baby & Kids</label>
                </details>
            </div>
            <hr className='hrr'/>
            <div>
            <details>
                    <summary>RAW MATERIALS<p>All</p></summary>      
                    <input type = "checkbox" id = "men"/>
                    <label htmlFor='men'>Men</label><br />
                    <input type = "checkbox" id = "women"/>
                    <label htmlFor='women'>Women</label><br />
                    <input type = "checkbox" id = "baby"/>
                    <label htmlFor='baby'>Baby & Kids</label>
                </details>
            </div>
            <hr className='hrr'/>
            <div>
            <details>
                    <summary>PATTERN<p>All</p></summary>
                    <input type = "checkbox" id = "men"/>
                    <label htmlFor='men'>Men</label><br />
                    <input type = "checkbox" id = "women"/>
                    <label htmlFor='women'>Women</label><br />
                    <input type = "checkbox" id = "baby"/>
                    <label htmlFor='baby'>Baby & Kids</label>
                </details>
            </div>
        </div>
    )
}

export default Sidebar