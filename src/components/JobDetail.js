import useClients from "./useClients";
import { ClientsDetail } from "./ClientsDetail";
import { PrimaryTechnologiesDetail } from "./PrimaryTechnologiesDetail";
import { Accomplishments } from "./Accomplishments";

export const JobDetail = ({ job }) => {
    return (
        <>
            {useClients(job) ?
                <ClientsDetail clients={job.clients} />
                :
                <>
                    <PrimaryTechnologiesDetail primaryTechnologies={job.primaryTechnologies} />
                    <Accomplishments accomplishments={job.accomplishments} />
                </>
            }
        </>
    );
}