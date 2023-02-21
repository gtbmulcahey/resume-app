import { PrimaryTechnologiesSnippet } from "./PrimaryTechnologiesSnippet";
import '../css/ClientsSummaryList.css';

export const ClientsSummaryList = ({ clients }) => {

    return (
        <>
            {
                clients.map((client, i) => (
                    <div className="clientSummaryBlock" key={i}>
                        <h5 className="clientName">{client.name}</h5>
                        <PrimaryTechnologiesSnippet primaryTechnologies={client.primaryTechnologies} length={120}/>
                    </div>
                ))
            }
        </>
    )
}