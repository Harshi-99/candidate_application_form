import React from "react";
import "./WorkCard.css"
import ComparisonNameHeader from "../CompanyNameHeader/CompanyNameHeader";
import EstimatedSalary from "../EstimatedSalary/EstimatedSalary";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import ApplyButton from "../ApplyButton/ApplyButton";

const JobCard = ({data}) => {
    console.log("card",data)
    return(
        <div className="job-card-wrapper">
            <ComparisonNameHeader logo={data?.logoUrl} company = {data?.companyName} role={data?.jobRole}
            location={data?.location}/>
            <EstimatedSalary minSalary={data?.minJdSalary} maxSalary={data?.maxJdSalary}/>
            <div>
                <p>About Company:</p>
                <p>About us</p>
                <p className="job-details">{data?.jobDetailsFromCompany}</p>
                <ExperienceSection minimumExperience={data?.minExp}/>
            </div>
            <div>
                <ApplyButton/>
            </div>
        </div>
    )
}
export default JobCard;