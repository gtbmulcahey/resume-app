import { Job } from "./Job";
import { useEffect } from "react";
import { Degree } from "./Degree";


export const EducationList = ({ educationList }) => {

    return (
        <>
            {
                educationList.map((degree, i) => (
                    <div key={i}>
                        <Degree degree={degree} /> 
                    </div>
                ))
            }
        </>
    );
}