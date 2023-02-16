import { PrimaryTechnologiesDetail } from './PrimaryTechnologiesDetail';
import '../css/ClientsSummaryList.css';
import { Accomplishments } from './Accomplishments';

export const ClientsDetail = ({ clients }) => {

    return (
        <>
            {
                clients.map((client, i) => (
                    <div className="clientSummaryBlock" key={i}>
                        <div className="clientName">{client.name}</div>
                        <PrimaryTechnologiesDetail primaryTechnologies={client.primaryTechnologies}/>
                        <Accomplishments accomplishments={client.accomplishments} />
                    </div>
                ))
            }
        </>
    )
}