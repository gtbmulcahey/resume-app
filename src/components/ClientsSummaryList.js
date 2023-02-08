import { PrimaryTechnologies } from "./PrimaryTechnologies";
import '../css/ClientsSummaryList.css';

export const ClientsSummaryList = ({ clients }) => {

    return (
        <>
            {
                clients.map((client, i) => (
                    <div className="clientSummaryBlock" key={i}>
                        <div className="clientName">{client.name}</div>
                        <PrimaryTechnologies primaryTechnologies={client.primaryTechnologies} length={60}/>
                    </div>
                ))
            }
        </>
    )
}