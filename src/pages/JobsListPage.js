import jobs from "./jobs-content";
import { JobsList } from "../components/JobsList";
import { PageTitle } from "../components/PageTitle";

const JobsListPage = () => {

    return (
        <>
            <PageTitle title='Professional Experience'></PageTitle>
            <JobsList jobs={jobs} />
        </>
    )
}

export default JobsListPage;