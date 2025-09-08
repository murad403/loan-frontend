import AboutBanner from "../components/about/AboutBanner";
import CoreValues from "../components/about/CoreValues";
import Mission from "../components/about/Mission";
import Vision from "../components/about/Vision";

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <Mission></Mission>
            <Vision></Vision>
            <CoreValues></CoreValues>
        </div>
    );
};

export default About;