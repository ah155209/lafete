import logo from './logo.svg';
import './App.css';
import LandingPage from './Screens/landingpage/LandingPage';
import { Routes ,Route} from 'react-router-dom';
import VenueDetialsPage from "./Components/VenueDetialsPage"
function MainRoutes() {
  return (
    <div className="Routes">

<Routes>
      <Route path="/" element={<LandingPage />}>
         </Route>
        <Route path="/decordetails" element={<VenueDetialsPage />} />

    </Routes>
    </div>
  );
}

export default MainRoutes;
