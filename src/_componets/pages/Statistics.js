import React from 'react';
import { Row, Col, Card, CardBody, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Media, Button } from 'reactstrap';


import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import * as FeatherIcon from 'react-feather';

import StatisticsWidget from '../StatisticsWidget';
import StatisticsProgressWidget from '../StatisticsProgressWidget';
import StatisticsChartWidget from '../StatisticsChartWidget';
import StatisticsChartWidget2 from '../StatisticsChartWidget2';


import TaskList from '../TaskList';
import TaskItem from '../TaskItem';
const Statistics = () => {
    return <React.Fragment>

        <Row>
            <Col md={6} xl={3}>
                <StatisticsWidget description="Today Revenue" title="$2100" icon={FeatherIcon.ShoppingBag} iconClass="icon-dual-primary"></StatisticsWidget>
                <StatisticsWidget description="Product Sold" title="1021" icon={FeatherIcon.Coffee} iconClass="icon-dual-warning"></StatisticsWidget>
                <StatisticsWidget description="New Customers" title="11" icon={FeatherIcon.Users} iconClass="icon-dual-success"></StatisticsWidget>
                <StatisticsWidget description="New Visitors" title="750" icon={FeatherIcon.FileText} iconClass="icon-dual-info"></StatisticsWidget>
            </Col>
            <Col md={6} xl={3}>
                <StatisticsWidget description="Today Revenue" title="$2100" icon={FeatherIcon.ShoppingBag} iconClass="icon-dual-primary"></StatisticsWidget>
                <StatisticsWidget description="Product Sold" title="1021" icon={FeatherIcon.Coffee} iconClass="icon-dual-warning"></StatisticsWidget>
                <StatisticsWidget description="New Customers" title="11" icon={FeatherIcon.Users} iconClass="icon-dual-success"></StatisticsWidget>
                <StatisticsWidget description="New Visitors" title="750" icon={FeatherIcon.FileText} iconClass="icon-dual-info"></StatisticsWidget>
            </Col>

            <Col md={6} xl={6}>
                <Card>
                    <CardBody className="pt-2 pb-3">
                        {/* <Button className="float-right mt-2" size={'sm'} color="primary">
                            View All
                        </Button> */}
                        <h5 className="mb-3" style={{ fontWeight: '900' }}>Alert Message</h5>
                        <PerfectScrollbar style={{ maxHeight: '339px' }}>
                            <TaskList>
                                <TaskItem title='Draft the new contract document for sales team' due_date="24 Aug, 2019" />
                                <TaskItem title='iOS App home page' due_date="23 Aug, 2019" className="mt-2" />
                                <TaskItem title='Write a release note for Shreyu' due_date="24 Aug, 2019" className="mt-2" />
                                <TaskItem title='Invite Greeva to a project shreyu admin' due_date="22 Aug, 2019" className="mt-2" />
                                <TaskItem title='Enable analytics tracking for main website' due_date="20 Aug, 2019" className="mt-2" />
                                {/* <TaskItem title='Invite user to a project' due_date="18 Aug, 2019" className="mt-2" />
                                <TaskItem title='Write a release note' due_date="14 Aug, 2019" className="mt-2" /> */}
                            </TaskList>
                        </PerfectScrollbar>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="pt-2 pb-3">
                        {/* <Button className="float-right mt-2" size={'sm'} color="primary">
                            View All
                        </Button> */}
                        <h5 className="mb-4" style={{ fontWeight: '900' }}>News & Announcements</h5>
                        <PerfectScrollbar style={{ maxHeight: '339px' }}>
                            <TaskList>
                                <TaskItem title='Draft the new contract document for sales team' due_date="24 Aug, 2019" />
                                <TaskItem title='iOS App home page' due_date="23 Aug, 2019" className="mt-2" />
                                <TaskItem title='Write a release note for Shreyu' due_date="24 Aug, 2019" className="mt-2" />
                                <TaskItem title='Invite Greeva to a project shreyu admin' due_date="22 Aug, 2019" className="mt-2" />
                                <TaskItem title='Enable analytics tracking for main website' due_date="20 Aug, 2019" className="mt-2" />
                                {/* <TaskItem title='Invite user to a project' due_date="18 Aug, 2019" className="mt-2" />
                                <TaskItem title='Write a release note' due_date="14 Aug, 2019" className="mt-2" /> */}
                            </TaskList>
                        </PerfectScrollbar>
                    </CardBody>
                </Card>
            </Col>

        </Row>
        {/*
        <Row>
            <Col md={6} xl={3}>
                <StatisticsProgressWidget description="Today Revenue" title="$2100" color="primary" progressValue="32" progressTitle="36% Avg"></StatisticsProgressWidget>
            </Col>
            <Col md={6} xl={3}>
                <StatisticsProgressWidget description="Product Sold" title="1021" color="warning" progressValue="60" progressTitle="36 Daily Avg"></StatisticsProgressWidget>
            </Col>
            <Col md={6} xl={3}>
                <StatisticsProgressWidget description="New Customers" title="11" color="success" progressValue="45" progressTitle="3 Daily Avg"></StatisticsProgressWidget>
            </Col>
            <Col md={6} xl={3}>
                <StatisticsProgressWidget description="New Visitors" title="750" color="success" progressValue="67" progressTitle="300 Daily Avg"></StatisticsProgressWidget>
            </Col>
        </Row> */}

        {/* <Row>
            <Col md={6} xl={3}>
                <StatisticsChartWidget
                    description="Today Revenue"
                    title="$2100"
                    data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                    trend={{
                        textClass: 'text-success',
                        icon: 'uil uil-arrow-up',
                        value: '10.21%'
                    }}></StatisticsChartWidget>
            </Col>

            <Col md={6} xl={3}>
                <StatisticsChartWidget
                    description="Product Sold"
                    title="1065"
                    colors={['#f77e53']}
                    data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                    trend={{
                        textClass: 'text-danger',
                        icon: 'uil uil-arrow-down',
                        value: '5.05%'
                    }}></StatisticsChartWidget>
            </Col>

            <Col md={6} xl={3}>
                <StatisticsChartWidget
                    description="New Customers"
                    title="11"
                    colors={['#43d39e']}
                    data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                    trend={{
                        textClass: 'text-success',
                        icon: 'uil uil-arrow-up',
                        value: '25.16%'
                    }}></StatisticsChartWidget>
            </Col>

            <Col md={6} xl={3}>
                <StatisticsChartWidget
                    description="New Visitors"
                    title="750"
                    colors={['#ffbe0b']}
                    data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                    trend={{
                        textClass: 'text-danger',
                        icon: 'uil uil-arrow-down',
                        value: '5.05%'
                    }}></StatisticsChartWidget>
            </Col>
        </Row> */}

        <Row>
            <Col md={6} xl={12}>
                <StatisticsChartWidget2
                    name="Visits"
                    type="area"
                    title="21,000"
                    subtitle="Visits"
                    colors={['#5369f8']}
                    data={[47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]}></StatisticsChartWidget2>
            </Col>
            {/* <Col md={6} xl={4}>
                <StatisticsChartWidget2
                    name="Customers"
                    type="area"
                    title="1100"
                    subtitle="Customers"
                    colors={['#43d39e']}
                    data={[47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]}></StatisticsChartWidget2>
            </Col>
            <Col md={6} xl={4}>
                <StatisticsChartWidget2
                    name="Revenue"
                    type="area"
                    title="$201,200"
                    subtitle="Revenue"
                    colors={['#f77e53']}
                    data={[47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]}></StatisticsChartWidget2>
            </Col> */}
        </Row>

    </React.Fragment>
}


export default Statistics;