import '../css/ExperiencesList.css'
import { PrimaryTechnologies } from './PrimaryTechnologies';
import { ExperienceDates } from './ExperienceDates';
import {  useEffect } from 'react';
import { ClientsSummaryList } from './ClientsSummaryList';

export const PreviousJobSummary = ({ job }) => {

    const hasClients =job.clients && job.clients[0] ? true : false
    
    useEffect(() => {
        console.log(`hasClients is ${hasClients}`);
        if (hasClients) {
            console.log(`first client name ${job.clients[0].name}`)
        }
    }, [hasClients, job]);


    return (
        <div key={job.name} className="experience">
            <ExperienceDates startDate={job.startDate} endDate={job.endDate} />
            <h4 className="experienceName">{job.name}</h4>

            {hasClients ?
                <ClientsSummaryList clients={job.clients} />
                :
                <PrimaryTechnologies primaryTechnologies={job.primaryTechnologies} length="60" />
            }
        </div>
    );
}