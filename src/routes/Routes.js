import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../_componets/auth/login';
import Layouts from "../_componets/layouts";
import Dashboard from "../_componets/pages/dashboard";
import SubmitNewPlan from "../_componets/pages/submitNewPlan";

const AllRoutes = () => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/dashboard' element={<Layouts><Dashboard /></Layouts>} />
                    <Route path='/submit-new-plan' element={<Layouts><SubmitNewPlan /></Layouts>} />

                </Routes>
            </BrowserRouter>

        </React.Fragment>
    );
};

export default AllRoutes;