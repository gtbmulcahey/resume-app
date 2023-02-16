import jobs from "./jobs-content";
import { JobsList } from "../components/JobsList";

const JobsListPage = () => {

    return (
        <>
            <h2>Professional Experience</h2>
            <JobsList jobs={jobs} />
        </>
    )
}

export default JobsListPage;