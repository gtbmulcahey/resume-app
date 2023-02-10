import { PrimaryTechnologiesDetail } from './PrimaryTechnologiesDetail';
import '../css/ClientsSummaryList.css';

export const ClientsDetail = ({ clients }) => {

    return (
        <>
            {
                clients.map((client, i) => (
                    <div className="clientSummaryBlock" key={i}>
                        <div className="clientName">{client.name}</div>
                        <PrimaryTechnologiesDetail primaryTechnologies={client.primaryTechnologies}/>
                    </div>
                ))
            }
        </>
    )
}