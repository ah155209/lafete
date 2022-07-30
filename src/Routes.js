import logo from './logo.svg';
import './App.css';
import LandingPage from './Screens/landingpage/LandingPage';
import { Routes ,Route} from 'react-router-dom';

function MainRoutes() {
  return (
    <div className="Routes">

<Routes>
      <Route path="/" element={<LandingPage />}>
        {/* <Route index element={<Home />} /> */}
        
               </Route>
    </Routes>
    </div>
  );
}

export default MainRoutes;
