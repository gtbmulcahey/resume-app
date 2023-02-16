import { PrimaryTechnologiesSnippet } from "./PrimaryTechnologiesSnippet";
import '../css/ClientsSummaryList.css';

export const ClientsSummaryList = ({ clients }) => {

    return (
        <>
            {
                clients.map((client, i) => (
                    <div className="clientSummaryBlock" key={i}>
                        <div className="clientName">{client.name}</div>
                        <PrimaryTechnologiesSnippet primaryTechnologies={client.primaryTechnologies} length={60}/>
                    </div>
                ))
            }
        </>
    )
}