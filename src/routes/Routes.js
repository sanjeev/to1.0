import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../_componets/auth/login';
import Layouts from "../_componets/layouts";
import Dashboard from "../_componets/pages/dashboard";
import SubmitNewPlan from "../_componets/pages/submitNewPlan";
import SubmittedPlan from "../_componets/pages/submittedPlan"
import Alerts from "../_componets/pages/Alerts"
const AllRoutes = () => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/dashboard' element={<Layouts><Dashboard /></Layouts>} />
                    <Route path='/submit-new-plan' element={<Layouts><SubmitNewPlan /></Layouts>} />
                    <Route path='/submitted-plans' element={<Layouts><SubmittedPlan /></Layouts>} />
                    <Route path='/alerts' element={<Layouts><Alerts /></Layouts>} />

                </Routes>
            </BrowserRouter>

        </React.Fragment>
    );
};

export default AllRoutes;