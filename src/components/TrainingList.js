import additionalTrainingList from "../pages/additional-training-content";
import { AdditionalTrainingCourses } from "./AdditionalTrainingCourses";


export const TrainingList = () => {

    console.log(`additionalTrainingList is ${additionalTrainingList}`);
    console.log(`additionalTrainingList firm ${additionalTrainingList[0].firm}`);
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