import { Routes, Route } from 'react-router-dom';
import Landing from "../pages/Landing";
import Documentation from "../pages/Documentation";
import EnvironmentalDataAnalytics from "../pages/EnvironmentalDataAnalytics";
import Energybill from "../pages/Energybill";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";


const Routers = () =>
{
    return <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/environmentalDataAnalytics" element={<EnvironmentalDataAnalytics />} />
        <Route path="/energybill" element={<Energybill />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
    </Routes>
};

export default Routers;