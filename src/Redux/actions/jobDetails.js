import axios from "axios";
import { GET_JOB_DETAILS_SUCCESS, GET_JOB_DETAILS_ERROR } from "./types";

export const getJobDetails = () => async (dispatch) => {
  try {
    
    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const response = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        body,
        {headers:{"content-type":"application/json"}}
      )
      
       dispatch({
          type: GET_JOB_DETAILS_SUCCESS,
          payload: response.data.jdList,
        })
  } catch (err) {
    dispatch({
      type: GET_JOB_DETAILS_ERROR,
      payload: err,
    });
  }
};
