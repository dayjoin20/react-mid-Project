import React from 'react';
import userContext from './usercontext';
import { useContext } from 'react';

function Welcome (){
    const { fName , lName  } = useContext (userContext);

    return ( 
    <>
    <h1>ยินดีต้อนรับ {fName}{' '}{lName}</h1> 
    
    </>
    )

}

export default Welcome;