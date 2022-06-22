import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings = 'Bienvenido'/>
      <ShoppingCartIcon />
    </>
  );
}

export default App;
