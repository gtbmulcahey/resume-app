import '../css/Job.css'
import { ExperienceDates } from './ExperienceDates';
import { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ExpandMoreOrLessButton } from './composition';
import { JobSnippet } from './JobSnippet';
import { JobDetail } from './JobDetail';


export const Job = ({ job }) => {

    const [showJobDetail, setShowJobDetail] = useState(false);

    useEffect(() => {
        console.log(`showJobDetail is ${showJobDetail}`);
    }, [showJobDetail]);

    return (
        <div key={job.name} className="experience">
            <ExperienceDates startDate={job.startDate} endDate={job.endDate} />

            <div className="experienceNameAndExpander">
                <h4 className="experienceName">{job.name}</h4>

                <span className="expandButton">
                    <ExpandMoreOrLessButton onClick={() => { setShowJobDetail(!showJobDetail) }}>
                        {!showJobDetail ?
                            <ExpandMoreIcon />
                            :
                            <ExpandLessIcon />
                        }
                    </ExpandMoreOrLessButton>
                </span>
            </div>

            { showJobDetail ? 
            <JobDetail job={job}/>
            :
            <JobSnippet job={job}/>
}
        </div>
    );
}