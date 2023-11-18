import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn,children}) =>{
    if(!isLoggedIn){ //ถ้าไม่ login จะถูก redirect
        return <Navigate to ="/sorry" replace />;
    }
    return children ; // ถ้า login แล้วจะไปสู่หน้าที่ระบุมา (ในที่นี้คือ children page)
};
export default Protected;