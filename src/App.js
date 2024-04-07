//import logo from './logo.svg';
import './App.css';
import Description from './component/discription';
import Navber from './component/navbar';
import Products from './component/products';

function App() {
  return (
    <div className="App">
        <Navber />
        <hr className='hr'/>
        <Description />
        <hr className='hrrrr'/>
        <Products />
    </div>
  );
}

export default App;
