import React, { useState, Component, useEffect } from "react";
import { Row, Col, Card, Button, InputGroup, Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
const SubmitNewPlan = () => {
    const [selected, setSelected] = useState([]);
    const options = [
        { label: "Innova", value: "Innova" },
        { label: "Glanza", value: "Glanza" },
        { label: "UC", value: "UC" },
        { label: "Fortuner", value: "Fortuner", },
        { label: "Camry", value: "Camry", },
        { label: "Velfire", value: "Velfire", },
        { label: "Hycross", value: "Hycross", },
        { label: "Lexus", value: "Lexus", },
        { label: "Hyryder", value: "Hyryder", },
        { label: "Hilux", value: "Hilux", },
        { label: "LC", value: "LC", },

    ];
    return (
        <>
            <Card className="mt-2">
                <Card.Body>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="PlanStartDate" className="mb-1">
                                    {" "}
                                    Plan Start Date <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="date"
                                    id="PlanStartDate"
                                    className="form-control"
                                    placeholder="Plan Start Date"
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="planEndDate" className="mb-1">
                                    Plan End Date <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="date"
                                    id="planEndDate"
                                    className="form-control"
                                    placeholder="plan End Date"
                                />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="PlanStartDate" className="mb-1">
                                    {" "}
                                    Activity Type <span className="text-danger">*</span>
                                </label>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="Advertisement"
                                        id="Advertisement"

                                    />
                                    <label className="form-check-label" htmlFor="Advertisement">
                                        Advertisement
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="Advertisement"
                                        id="Event"

                                    />
                                    <label className="form-check-label" htmlFor="Event">
                                        Event
                                    </label>
                                </div>
                            </div>

                            <div className="col">
                                <label htmlFor="planEndDate" className="mb-1">
                                    Proposal Type <span className="text-danger">*</span>
                                </label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="Planned"
                                        id="Planned"

                                    />
                                    <label className="form-check-label" htmlFor="Planned">
                                        Planned
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="Planned"
                                        id="Planned"

                                    />
                                    <label className="form-check-label" htmlFor="Planned">
                                        Unplanned
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor=" ActivitySubType" className="mb-1">
                                    Activity Sub Type
                                    <span className="text-danger">*</span>
                                </label>
                                <select className="form-select" id="ActivitySubType">
                                    <option value="">Select one...</option>
                                    <option value="paperad">Paper AD</option>
                                    <option value="magazinead">Magazine AD</option>
                                    <option value="tvad">TV AD</option>
                                    <option value="radioad">Radio AD</option>
                                    <option value="digitalad">Digital AD</option>
                                    <option value="hoardinbillad">Hoarding Billboard </option>
                                    <option value="flexad">Hoarding Flex</option>
                                    <option value="leafletsad">Leaflets/Insert</option>
                                    <option value="bannerad">Banner</option>
                                    <option value="smsad">SMS</option>
                                    <option value="whatsappad">WhatsApp</option>
                                    <option value="roadshowad">Road Show</option>
                                    <option value="caravanad">Caravan</option>
                                    <option value="mallad">Mall Activity</option>
                                    <option value="meet">Customer Meet</option>
                                    <option value="otherad">Others</option>
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="ActivityDescription" className="mb-1">
                                    Targeted Models
                                    <span className="text-danger">*</span>
                                </label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="ActivityDescription" className="mb-1">
                                    Activity Description (max 250 characters){" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <textarea
                                    className="form-control"
                                    id="ActivityDescription"
                                    rows={3}
                                    defaultValue={""}
                                />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="EstimatedActivityBudget" className="mb-1">
                                    {" "}
                                    Estimated Activity Budget{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="EstimatedActivityBudget"
                                    className="form-control"
                                    placeholder="Estimated Activity Budget"
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="DealerShare" className="mb-1">
                                    Dealer Share (%) <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="DealerShare"
                                    className="form-control"
                                    placeholder="Dealer Share"
                                />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="TKMShare" className="mb-1">
                                    {" "}
                                    TKM Share (%) <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="TKMShare"
                                    className="form-control"
                                    placeholder="TKM Share"
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="OtherShare" className="mb-1">
                                    {" "}
                                    Other Share (%) <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="OtherShare"
                                    className="form-control"
                                    placeholder="Other Share"
                                />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="EstimatedEnquiries" className="mb-1">
                                    {" "}
                                    Estimated Enquiries <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="EstimatedEnquiries"
                                    className="form-control"
                                    placeholder="Estimated Enquiries"
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="EstimatedRetails" className="mb-1">
                                    Estimated Retails <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="EstimatedRetails"
                                    className="form-control"
                                    placeholder="Estimated Retails"
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div
                                className="col"
                                style={{ display: "flex", justifyContent: "end" }}
                            >
                                <button
                                    type="submit"
                                    className="btn btn-primary "
                                    style={{
                                        textAlign: "right",
                                        backgroundColor: "#e30612",
                                        border: "1px solid #e30612",
                                    }}
                                >
                                    Submit Plan
                                </button>
                            </div>
                            <div className="col">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{
                                        backgroundColor: "#212529",
                                        border: "1px solid #212529",
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </>
    );
};

export default SubmitNewPlan;