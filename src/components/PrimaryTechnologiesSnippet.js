import '../css/Job.css';

export const PrimaryTechnologiesSnippet = ({primaryTechnologies, length}) => {
    
    return ( length && <p className="primaryTechnologies">Primary Technologies: {primaryTechnologies.substring(0, length)}...</p>);
}