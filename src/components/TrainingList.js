import { Job } from "./Job";
import { useEffect } from "react";


export const TrainingList = ({ trainingList }) => {

    return (
        <>
            {
                trainingList.map((training, i) => (
                    <div key={i}>
                        <Job job={training} /> 
                    </div>
                ))
            }
        </>
    );
}