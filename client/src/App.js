import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import Home from './views/Home/Home';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
    const location = useLocation();

    return (
        <div className="App">
            {location.pathname !== "/" && <NavBar/>}
            <Routes>
                <Route path='/' element={<LandingPage/>}/>

                <Route path='/home' element={<Home/>}/>

                <Route path='/detail' element={<Detail/>}/>

                <Route path='/create' element={<Form/>}/>
            </Routes>
        </div>
    );
}

export default App;
