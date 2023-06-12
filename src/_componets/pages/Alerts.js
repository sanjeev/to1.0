import React, { useState } from "react";
import { Col, Row, Card, Alert, Toast } from "react-bootstrap";
import classNames from "classnames";
// components
import logo from "../../assets/images/logo-sm.png";
const Alerts = () => {
    const [colors, setColors] = useState(["danger", "warning", "info"]);
    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(true);
    const [show4, setShow4] = useState(true);
    const handleClose = (index) => {
        const list = [...colors];
        list.splice(index, 1);
        setColors(list);
    };
    return (
        <>
            <Row className="page-title align-items-center">
                <Col sm={12} xl={12}>
                    <h4 className="mb-1 mt-0"> Alerts </h4>
                </Col>

            </Row>


            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <div>
                                <h5 className="header-title mb-1 mt-0">Alerts</h5>
                                <p className="sub-header">
                                    Provide contextual feedback messages for typical user actions with
                                    the handful of available and flexible alert messages.
                                </p>

                                {["primary", "secondary", "success"].map((color, index) => {
                                    return (
                                        <Alert variant={color} key={index}>
                                            A simple {color} alert—check it out!
                                        </Alert>
                                    );
                                })}

                                {(colors || []).map((color, index) => {
                                    return (
                                        <Alert
                                            variant={color}
                                            key={index}
                                            onClose={() => handleClose(index)}
                                            dismissible
                                            className={classNames({ "mb-0": index === colors.length - 1 })}
                                        >
                                            A simple {color} alert—check it out!
                                        </Alert>
                                    );
                                })}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <div>
                                <h5 className="header-title mb-1 mt-0">Toasts</h5>
                                <p className="sub-header">
                                    Push notifications to your visitors with a toast, a lightweight and
                                    easily customizable alert message
                                </p>

                                <div>
                                    <Toast
                                        className="mb-2"
                                        onClose={() => setShow(false)}
                                        show={show}
                                        autohide
                                    >
                                        <Toast.Header>
                                            <img src={logo} alt="brand-logo" height="18" className="me-1" />
                                            <strong className="me-auto">Shreyu</strong>
                                            <small>11 mins ago</small>
                                        </Toast.Header>
                                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                                    </Toast>

                                    <Toast
                                        className="mb-2"
                                        onClose={() => setShow2(false)}
                                        show={show2}
                                        autohide
                                    >
                                        <Toast.Header>
                                            <img src={logo} alt="brand-logo" height="18" className="me-1" />
                                            <strong className="me-auto">Shreyu</strong>
                                            <small>12 mins ago</small>
                                        </Toast.Header>
                                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                                    </Toast>

                                    <Toast
                                        className="mb-2"
                                        onClose={() => setShow3(false)}
                                        show={show3}
                                        autohide
                                    >
                                        <Toast.Header>
                                            <img src={logo} alt="brand-logo" height="18" className="me-1" />
                                            <strong className="me-auto">Shreyu</strong>
                                            <small>15 mins ago</small>
                                        </Toast.Header>
                                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                                    </Toast>

                                    <Toast onClose={() => setShow4(false)} show={show4} autohide>
                                        <Toast.Header>
                                            <img src={logo} alt="brand-logo" height="18" className="me-1" />
                                            <strong className="me-auto">Shreyu</strong>
                                            <small>21 mins ago</small>
                                        </Toast.Header>
                                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                                    </Toast>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    );
};

export default Alerts;