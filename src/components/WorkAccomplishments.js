export const WorkAccomplishments = ({ accomplishments }) => {
    return (
        <>
            {
                accomplishments.map((accomplishment, i) => (
                    <li key={i} className="accomplishments">{accomplishment}</li>
                ))
            }
        </>
    )
}