import '../css/PreviousJobSummary.css'
import { PrimaryTechnologies } from './PrimaryTechnologies';
import { ExperienceDates } from './ExperienceDates';
import { useState, useEffect } from 'react';
import { ClientsSummaryList } from './ClientsSummaryList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ExpandMoreOrLessButton } from './composition';


export const PreviousJobSummary = ({ job }) => {

    const [showJob, setShowJob] = useState(false);

    const hasClients = job.clients && job.clients[0] ? true : false

    useEffect(() => {
        console.log(`hasClients is ${hasClients}`);
        if (hasClients) {
            console.log(`first client name ${job.clients[0].name}`)
        }
    }, [hasClients, job]);


    return (
        <div key={job.name} className="experience">
            <ExperienceDates startDate={job.startDate} endDate={job.endDate} />

            <div className="experienceNameAndExpander">
                <h4 className="experienceName">{job.name}</h4>

                <span className="expandButton">
                    <ExpandMoreOrLessButton onClick={() => { setShowJob(!showJob) }}>
                        {!showJob ?
                            <ExpandMoreIcon />
                            :
                            <ExpandLessIcon />
                        }
                    </ExpandMoreOrLessButton>
                </span>
            </div>

            {hasClients ?
                <ClientsSummaryList clients={job.clients} />
                :
                <PrimaryTechnologies primaryTechnologies={job.primaryTechnologies} length="60" />
            }
        </div>
    );
}