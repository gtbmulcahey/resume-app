import { PreviousJobSummary } from "./PreviousJobSummary";
import { useEffect } from "react";


export const PreviousJobsList = ({ jobs }) => {

    useEffect(() => {
        console.log(`first job is ${jobs[0].name}`);
        console.log(`number of previous jobs is ${jobs}`)
    }, [jobs]);

    return (
        <>
            {
                jobs.map((job, i) => (
                    <div key={i}>
                        <PreviousJobSummary job={job} />
                        
                    </div>
                ))
            }
        </>
    );
}