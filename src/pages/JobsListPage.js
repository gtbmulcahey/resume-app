import jobs from "./jobs-content";
import { JobsList } from "../components/JobsList";

const JobsListPage = () => {

    return (
        <>
            <h1>Professional Experience</h1>
            <JobsList jobs={jobs} />
        </>
    )
}

export default JobsListPage;