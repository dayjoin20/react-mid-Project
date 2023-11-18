import React from "react";
import { useNavigate } from "react-router-dom";

function Sorry(){
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }

    const goBack = () => {
        navigate(-1);
    };
    
    return(
        <>
          <h1>forgot password?</h1>
          <button onClick={goBack}>Back</button>
        </>
    );
}
export default Sorry;