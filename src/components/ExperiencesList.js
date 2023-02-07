import {Link} from 'react-router-dom';

const ExperiencesList = ({experiences}) => {
    return (
        <>
            {
                experiences.map(experience => (
                    <Link key={experience.name} className="article-list-item" to={`/experiences/${experience.name}`}>
                        <h3>{experience.title}</h3>
                        <p>{experience.content[0].substring(0, 150)}...</p>
                    </Link>
                ))
            }
        </>
    );
}

export default ExperiencesList;