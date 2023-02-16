export const AdditionalTrainingCourses = ({ courses }) => {
    return (
        <ul>
            {
                courses.map((course, i) => (
                    <li key={i}>{course.courseName} ({course.completedDate})</li>
                ))
            }
        </ul>
    )
}