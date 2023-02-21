import { ClientsSummaryList } from "./ClientsSummaryList";
import { PrimaryTechnologiesSnippet } from "./PrimaryTechnologiesSnippet";
import useClients from "./useClients";

export const JobSnippet = ({ job }) => {

    return (
        <>
            {useClients(job) ?
                <ClientsSummaryList clients={job.clients} />
                :
                <PrimaryTechnologiesSnippet primaryTechnologies={job.primaryTechnologies} length="110" />
            }
        </>
    );
}