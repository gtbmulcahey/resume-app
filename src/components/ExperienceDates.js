import '../css/ExperiencesList.css'

export const ExperienceDates = ({startDate, endDate}) => {

    return (
        <p className="experienceDates">{startDate}-{endDate}</p>
    );
} 

