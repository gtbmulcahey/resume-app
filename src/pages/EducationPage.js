import educationList from "./education-content";
import NotFoundPage from "./NotFoundPage";
import { EducationList } from "../components/EducationList";

const EducationPage = () => {
    if (!educationList) {
        return <NotFoundPage />
    }
    return (
        <>
           <h2>Education</h2>
           <EducationList educationList={educationList} />
        </>
    );
}

export default EducationPage;