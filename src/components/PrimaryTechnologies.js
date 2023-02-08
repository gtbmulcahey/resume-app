import '../css/ExperiencesList.css';

export const PrimaryTechnologies = ({primaryTechnologies, length}) => {
    if(length) {
        return ( length && <p className="primaryTechnologies">Primary Technologies: {primaryTechnologies.substring(0, length)}...</p>);
    }
    return <p className="primaryTechnologies">Primary Technologies: {primaryTechnologies}</p>
}