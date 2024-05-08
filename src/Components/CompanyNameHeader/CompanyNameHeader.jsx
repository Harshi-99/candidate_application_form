import "./CompanyNameHeader.css"

const ComparisonNameHeader = ({logo, company, location, role}) => {
    return(
        <div className="company-name-header-wrapper">
            <div className="logo-content">
                <img src={logo} alt="image"/>
            </div>
            <div>
                <div>{company}</div>
                <div>{role}</div>
                <div>{location}</div>
            </div>

        </div>
    )
}

export default ComparisonNameHeader;