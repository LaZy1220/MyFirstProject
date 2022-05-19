import './App.css'
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';



const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
