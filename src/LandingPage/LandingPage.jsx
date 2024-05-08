import React, { useEffect, useState } from "react";
import JobCard from "../Components/JobCard/WorkCard";
import { useSelector, useDispatch } from "react-redux";
import { getJobDetails } from "../Redux/actions/jobDetails";
import "./LandingPage.css";
import FilterHeader from "../Components/FilterHeader/FilterHeader";

const LandingPage = () => {
  const [posts, setPosts] = useState([]);

  const jobDetails = useSelector((state) => state?.posts?.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobDetails());
  }, [dispatch]);

  useEffect(() => {
    if (jobDetails && jobDetails.length > 0) {
      setPosts(jobDetails);
    }
  }, [jobDetails]);

  const handleChange = (arg) => {
    const updatedData = posts.filter((data) => data?.jobRole === arg?.label);
    setPosts(updatedData);
  };

  const handleReset = (arg) => {
    if (arg === "clear") setPosts(jobDetails);
  };

  const handleExperience = (arg) => {
    const updatedData = posts.filter((data) => data?.minExp >= arg?.label);
    setPosts(updatedData);
  };

  const handleLocation = (arg) => {
    const updatedData = posts.filter((data) => data?.location >= arg?.label);
    setPosts(updatedData);
  }

  const handleMinPay = (arg) => {
    const updatedData = posts.filter((data) => data?.maxJdSalary >= arg?.label);
    setPosts(updatedData);
  }; 

  return (
    <div className="landing-page-wrapper">
      <FilterHeader
        handleChange={handleChange}
        handleReset={handleReset}
        handleExperience={handleExperience}
        handleLocation={handleLocation}
        handleMinPay={handleMinPay}
      />

      <div className="landing-page-container">
        {posts &&
          posts?.length > 0 &&
          posts?.map((jobData, index) => <JobCard key={index} data={jobData} />)}
      </div>
    </div>
  );
};

export default LandingPage;
