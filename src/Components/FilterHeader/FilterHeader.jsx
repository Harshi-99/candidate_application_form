import FilterDropdown from "../FilterDropdown/FilterDropdown";
import { roles,experience, location, minPay } from "../../utils/data";
import "./FilterHeader.css"

const FilterHeader = ({handleChange,handleReset, handleExperience, handleLocation, handleMinPay}) => {
    return(
        <div className="filter-header-wrapper">
            <FilterDropdown option={roles} label="roles" handleChange={handleChange} handleReset={handleReset}/>
            <FilterDropdown option={experience} label="Experience" handleChange={handleExperience} handleReset={handleReset}/>
            <FilterDropdown option={location} label="location" handleChange={handleLocation} handleReset={handleReset}/>
            <FilterDropdown option={minPay} label="Minimum base pay" handleChange={handleMinPay} handleReset={handleReset}/>
        </div>
    )
}

export default FilterHeader;