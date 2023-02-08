import '../css/ExperiencesList.css'
import { CurrentJob } from './CurrentJob';
import { PreviousJobsList } from './PreviousJobsList';
import { useEffect } from 'react';

const ExperiencesList = ({ experiences }) => {

    useEffect(() => {
        console.log(`experiences are ${experiences}`);
        console.log(`experiences are ${experiences.length}`);
      }, [experiences]);

    return (
        <>
            {/* <CurrentJob job={experiences[0]}/> */}
            <PreviousJobsList jobs={experiences} />
        </>
    );
}

export default ExperiencesList;