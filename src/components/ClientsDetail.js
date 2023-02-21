import { PrimaryTechnologiesDetail } from './PrimaryTechnologiesDetail';
import '../css/ClientsSummaryList.css';
import { Accomplishments } from './Accomplishments';

export const ClientsDetail = ({ clients }) => {

    return (
        <>
            {
                clients.map((client, i) => (
                    <div className="clientSummaryBlock" key={i}>
                        <h5 className="clientName">{client.name}</h5>
                        <PrimaryTechnologiesDetail primaryTechnologies={client.primaryTechnologies}/>
                        <Accomplishments accomplishments={client.accomplishments} />
                    </div>
                ))
            }
        </>
    )
}