import experiences from "./experiences-content";
import ExperiencesList from '../components/ExperiencesList';

const ExperiencesListPage = () => {

    console.log(`first experience is ${experiences[0].name}`);
    console.log(`second experience is ${experiences[1].name}`);
    return (
        <>
            <h1>Professional Experience</h1>
            <ExperiencesList experiences={experiences} />
        </>
    )
}

export default ExperiencesListPage;