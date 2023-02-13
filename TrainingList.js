import additionalTrainingList from "../pages/additional-training-content";
import { AdditionalTrainingCourses } from "./AdditionalTrainingCourses";


export const TrainingList = () => {

    return (
        <>
            {
                additionalTrainingList.map((provider, i) => (
                    <div key={i}>
                        <div>{provider.firm}</div>
                        <AdditionalTrainingCourses courses={provider.courses} />
                    </div>
                ))
            }
        </>
    )
}