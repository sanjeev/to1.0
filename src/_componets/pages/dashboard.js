import React, { useEffect, Component } from 'react'
import { Row, Col } from 'reactstrap';
import FeatherIcons from "feather-icons-react";
import { Link } from "react-router-dom";
import logoDark from "../../assets/images/logo-dark.png";
import T3dr from "../../assets/images/T3dr.png";
import Statistics from './Statistics';
import Team from './Team';
const Dashboard = () => {


    return (
        <><Row className="page-title align-items-center">
            <Col sm={12} xl={12}>
                <h4 className="mb-1 mt-0">Dashboard</h4>
            </Col>

        </Row>
            <Statistics />
            {/* <Team /> */}
        </>


    )
}


export default Dashboard;