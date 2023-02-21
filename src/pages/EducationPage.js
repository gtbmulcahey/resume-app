import educationList from "./education-content";
import NotFoundPage from "./NotFoundPage";
import { EducationList } from "../components/EducationList";
import { PageTitle } from "../components/PageTitle";

const EducationPage = () => {
    if (!educationList) {
        return <NotFoundPage />
    }
    return (
        <>
           <PageTitle title='Education'></PageTitle>
           <EducationList educationList={educationList} />
        </>
    );
}

export default EducationPage;