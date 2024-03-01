import { useLocation } from "react-router-dom";
import AboutText from "../components/AboutText";

const About = () => {
    
    const location = useLocation();
    console.log(location)
    
    return(
        <div>
            <AboutText />
        </div>
    )
}

export default About;