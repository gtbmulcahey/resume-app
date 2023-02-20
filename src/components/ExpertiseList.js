import expertiseList from "../pages/expertise-content"

export const ExpertiseList = () => {
    return (
        <ul>
            {
                expertiseList.map((expertise, i) => (
                    <li key={i}>{expertise}</li>
                ))
            }
        </ul>
    )
}