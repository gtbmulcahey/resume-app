import { ClientsSummaryList } from "./ClientsSummaryList";
import { PrimaryTechnologies } from "./PrimaryTechnologies";


export const JobSnippet = ({ job }) => {

    const hasClients = job.clients && job.clients[0] ? true : false

    return (
        <>
            {hasClients ?
                <ClientsSummaryList clients={job.clients} />
                :
                <PrimaryTechnologies primaryTechnologies={job.primaryTechnologies} length="60" />
            }
        </>
    );
}