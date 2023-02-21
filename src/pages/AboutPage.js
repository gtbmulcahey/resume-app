import { PageTitle } from "../components/PageTitle";
import summary from "./summary-Content";
import about from "./about-content";
import '../css/About.css';

const AboutPage = () => {
    return (
        <>
            <PageTitle title='About'></PageTitle>
            <div className="about">{about.aboutApp}</div>
            <div className="about">{summary.experienceAndIndustries}</div>
            <div className="about">{about.aboutMe}</div>
        </>
    )
}

export default AboutPage;