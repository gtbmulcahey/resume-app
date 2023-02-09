import jobs from "./jobs-content";
import { JobsList } from "../components/JobsList";

const JobsListPage = () => {

    console.log(`first experience is ${jobs[0].name}`);
    console.log(`second experience is ${jobs[1].name}`);
    return (
        <>
            <h1>Professional Experience</h1>
            <JobsList jobs={jobs} />
        </>
    )
}

export default JobsListPage;