import { TrainingList } from "../components/TrainingList";
import { PageTitle } from "../components/PageTitle";

export const TrainingPage = () => {
    return (
        <>
            <PageTitle title='Additional Training'></PageTitle>
            <TrainingList />
        </>
    );
}