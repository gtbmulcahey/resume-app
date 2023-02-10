import '../css/Accomplishments.css';

export const Accomplishments = ({ accomplishments }) => {
    return (
        <ul className="accomplishments">
            {
                    accomplishments.map((accomplishment, i) => (
                    <li key={i} className="accomplishments">{accomplishment}</li>
                    ))
            }
        </ul>
    )
}