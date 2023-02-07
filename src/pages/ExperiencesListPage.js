import experiences from "./experiences-content";
import ExperiencesList from '../components/ExperiencesList';

const ExperiencesListPage = () => {
    return (
        <>
            <h1>Professional Experience</h1>
            <ExperiencesList experiences={experiences} />
        </>
    )
}

export default ExperiencesListPage;