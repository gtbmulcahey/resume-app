export const Accomplishments = ({ accomplishments }) => {
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