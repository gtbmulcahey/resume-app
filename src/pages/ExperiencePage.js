import { useParams } from "react-router-dom";
import jobs from "./jobs-content";
import NotFoundPage from "./NotFoundPage";

const ExperiencePage = () => {
    const { experienceId } = useParams();
    const experience = jobs.find(experience => experience.name === experienceId);

    if (!experience) {

        return <NotFoundPage />
    }
    return (
        <>
            <h1>{experience.title}</h1>
            {experience.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </>
    );
}

export default ExperiencePage;