import '../css/Degree.css';

export const Degree = ({ degree }) => {

    return (
        <div className="degree">
            <h4>{degree.degree}</h4>
            <p>{degree.school}</p>
            <p>{degree.location}</p>
        </div>
    );
}