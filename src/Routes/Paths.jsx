import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

const Paths = () => {
    return (  
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}/> 
                    {/* <Route index element={<Home />} />    */}
                </Routes>            
            </BrowserRouter>
        </>
    );
}
 
export default Paths;