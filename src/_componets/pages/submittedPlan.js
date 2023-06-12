import React, { useEffect, Component, useState } from 'react'
import { MultiSelect } from "react-multi-select-component";
import { Row, Col } from 'reactstrap';
const SubmittedPlan = () => {
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
            <Row className="page-title align-items-center">
                <Col sm={12} xl={12}>
                    <h4 className="mb-1 mt-0"> Submitted Plans/Claims List </h4>
                </Col>

            </Row>

            <div className="">
                <div className="card">
                    <div className="card-header bg-danger text-white">Filters</div>
                    <div className="card-body">
                        <div className='row'>
                            <div className="col-md-3 mb-3">
                                <div className="col">
                                    <label className="form-label">Plan Id</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="col">
                                    <label className="form-label">Plan/Claim Status</label>
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="col">
                                    <label className="form-label">Plan Type</label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault1"
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Planned
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault2"
                                            defaultChecked=""
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Unplanned
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="col">
                                    <label className="form-label">Activity Type</label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="flexRadioDefault4"
                                            id="flexRadioDefault1"
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                                            Advertisement
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="flexRadioDefault4"
                                            id="flexRadioDefault4"
                                            defaultChecked=""
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                                            Event
                                        </label>
                                    </div>
                                </div>
                            </div>{" "}
                            <div className="col-md-3 mb-3">
                                <div className="col">
                                    <label className="form-label">Activity Sub Type</label>
                                    <select className="form-select" id="select1">
                                        <option value="">Select one...</option>
                                        <option value="First">Paper AD</option>
                                        <option value="Second">Display AD</option>
                                        <option value="Another option">Radio AD</option>
                                        <option value="Another option">Digital AD</option>
                                        <option value="Another option">Hoarding Billboard </option>
                                        <option value="Another option">Hoarding Flex</option>
                                        <option value="Another option">Leaflets/Insert</option>
                                        <option value="Another option">Banner</option>
                                        <option value="Another option">SMS</option>
                                        <option value="Another option">WhatsApp</option>
                                        <option value="">Select one...</option>
                                        <option value="Third">Road Show</option>
                                        <option value="Another option">Caravan</option>
                                        <option value="Another option">Mall Activity</option>
                                        <option value="Another option">Customer Meet</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="col">
                                    <label className="form-label">Targeted Models</label>

                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                            </div>
                            {/*<div class="row mb-3">
                      <div class="col">
                          <label class="form-label">Submitted By (Dealer Group Code)</label>
                          <input type="text" class="form-control" />
                      </div>
                  </div>
                  <div class="row mb-3">
                      <div class="col">
                          <label class="form-label">Submitted By (Dealer Outlet Code)</label>
                          <input type="text" class="form-control" />
                      </div>
                  </div>*/}
                            <div className="col-md-3 mb-3">
                                <div className="col">
                                    <label className="form-label">Submitted Date From</label>
                                    <input
                                        type="date"
                                        placeholder="DD-MMM-YYYY"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="col">
                                    <label className="form-label">Submitted Date To</label>
                                    <input
                                        type="date"
                                        placeholder="DD-MMM-YYYY"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div>
                    <div className="row align-items-center mt-1 mb-1" id="div1">
                        <div className="col-md-3">
                            <div className='cdl '>
                                <input
                                    className="form-check-input "
                                    type="checkbox"
                                    name="flexRadioDefault"
                                />{" "}
                                Show Claims Waiting for Approval{" "}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='cdl'>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="flexRadioDefault"
                                />{" "}
                                Show Claims Approved
                            </div>
                        </div>
                        <div className="col-md-3">
                            {/* <label class="form-label">Sort by</label>*/}
                            <select className="form-select" id="select2">
                                <option value="First">Sort by</option>
                                <option value="Second">Sort by date of last action - Descending</option>
                                <option value="Third">Sort by date of last action - Ascending</option>
                            </select>
                        </div>
                    </div>



                    <div className='grop'>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col mt-1 mb-1">
                                        <strong>Plan Id:</strong> <br /> AH31A\AD021\APL2023
                                    </div>
                                    <div className="col mt-1 mb-1">
                                        <strong> Submitted On:</strong>
                                        <br /> 23-Apr-2023
                                    </div>
                                    <div className="col mt-1 mb-1">
                                        <strong> Submitted By:</strong>
                                        <br /> Vinayak(AG01F)
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-1 mb-1">
                                        <strong> Start Date:</strong>
                                        <br /> 14-may-2023
                                    </div>
                                    <div className="col mt-1 mb-1">
                                        <strong>End Date: </strong>
                                        <br />
                                        23-may-2023
                                    </div>
                                    <div className="col mt-1 mb-1">
                                        <strong> Status: </strong>
                                        <br />{" "}
                                        <span className="badge bg-warning">
                                            Pending for Zonal Incharge Approval
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-1 mb-1">
                                        <a
                                            href="#"
                                            id="show6"
                                            onclick="return Count3();"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Show Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="card-body border-top collapse"
                                id="demo6"
                                style={{ display: "none" }}
                            >

                                <strong>Plan Details</strong>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                <strong> Proposal Type:</strong>
                                                <br /> Planned
                                            </div>
                                            <div className="col mt-1 mb-1">
                                                <strong> Activity Type:</strong>
                                                <br /> Event
                                            </div>
                                            <div className="col mt-1 mb-1">
                                                <strong> Activity Sub Type:</strong>
                                                <br /> Radio
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                <strong> Targeted Models: </strong>
                                                <br /> Innova, Glanza, UC
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                <strong>Start Date: </strong>
                                                <br />
                                                14-May-2023
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                <strong> End Date: </strong>
                                                <br />
                                                23-May-2023
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                <strong>Claim Month:</strong>
                                                <br /> June
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                <strong> Claim Year: </strong>
                                                <br /> 2023
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                <strong> Estimated Budget:</strong>
                                                <br /> Rs. 100,000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                <strong> Dealer Share:</strong>
                                                <br /> 50%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                <strong> TKM Share:</strong>
                                                <br /> 25%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                <strong> Other Share: </strong>
                                                <br /> 25%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                <strong> Estimated Enquiries:</strong>
                                                <br /> 700
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                <strong> Estimated Relails:</strong>
                                                <br /> 150
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ paddingBottom: 30 }}>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                <strong> Activity Description:</strong>
                                                <br />
                                                <br /> Activities describe work in sufficient detail to allow for an
                                                analysis of hazards associated with the work. Activities also
                                                communicate to the worker what work activities they are authorized
                                                to perform, what hazards are associated with that work, and what
                                                controls are necessary to protect the worker.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="claim1" style={{ display: "none" }}>
                                    <div className="row border-top" style={{ paddingTop: 10, borderTop: 2 }}>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Activity Actual Start Date:</div>
                                                <div className="col mt-1 mb-1">
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Activity Actual End Date:</div>
                                                <div className="col mt-1 mb-1">
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="row border-top"
                                        style={{ paddingTop: 10, paddingLeft: 5, borderTop: 2 }}
                                    >
                                        <h4>Claim Details</h4>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">1</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input
                                                        type="text"
                                                        defaultValue="Event"
                                                        disabled=""
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input
                                                        type="text"
                                                        defaultValue="xyz.com"
                                                        disabled=""
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input
                                                        type="number"
                                                        defaultValue="1,00,000"
                                                        disabled=""
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className=" "
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                TKM example document
                                                                <br />
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn" onclick="openPdf()">
                                                    View
                                                </button>
                                            </div>
                                            <iframe
                                                id="myFrame"
                                                style={{ display: "none" }}
                                                width={1600}
                                                height={1300}
                                            />
                                        </div>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">2</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className="dropzone dz-clickable"
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                Drag &amp; Drop files into this area or click here to
                                                                browse.
                                                                <br />
                                                                <span className="note" id="main_span">
                                                                    (.pdf, .png, .jpg.)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">3</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className="dropzone dz-clickable"
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                Drag &amp; Drop files into this area or click here to
                                                                browse.
                                                                <br />
                                                                <span className="note" id="main_span">
                                                                    (.pdf, .png, .jpg.)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">4</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className="dropzone dz-clickable"
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                Drag &amp; Drop files into this area or click here to
                                                                browse.
                                                                <br />
                                                                <span className="note" id="main_span">
                                                                    (.pdf, .png, .jpg.)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">5</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className="dropzone dz-clickable"
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                Drag &amp; Drop files into this area or click here to
                                                                browse.
                                                                <br />
                                                                <span className="note" id="main_span">
                                                                    (.pdf, .png, .jpg.)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="row border-top"
                                        style={{ paddingBottom: 0, borderTop: 2 }}
                                    >
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-3" style={{ textAlign: "right", marginTop: 10 }}>
                                            <div className="row">
                                                <div className="col "></div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="row">
                                                <div className="col " style={{ textAlign: "right", marginTop: 15 }}>
                                                    Total Amount
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <input
                                                style={{ marginTop: 10 }}
                                                type="number"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/*<div class="row" id="Div_Submit_2202_480_20896_1" style="padding-top: 15px; display: flex;"><br><div class="col-sm-1 text-center"><button type="button" id="btnSubmit_2202_480_20896_1" class="btn btn-primary" style="width: 130px" onclick="btn_SubmitClick(2202,480,20896,1)"><i class="fa fa-check-square-o"></i>&nbsp;Submit </button></div><div class="col-sm-3 text-center" style="padding-left:90px"><button type="button" id="btnCancel_2202_480_20896_1" class="btn btn-primary" style="width: 130px; display: inline-block;" onclick="btn_CancelClick(2202,480,20896,1)"><i class="fa fa-ban"></i>&nbsp;Cancel </button></div></div>*/}
                            </div>
                        </div>


                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col mt-1 mb-1">Plan id: AH01A\AD000\APL2023</div>
                                    <div className="col mt-1 mb-1">Submitted On: 01-Apr-2023</div>
                                    <div className="col mt-1 mb-1">Submitted By: Arun Kumar(AG01F)</div>
                                </div>
                                <div className="row">
                                    <div className="col mt-1 mb-1">Start Date: 14-APL-2023</div>
                                    <div className="col mt-1 mb-1">End Date: 23-APL-2023</div>
                                    <div className="col mt-1 mb-1">
                                        Status:
                                        <br />{" "}
                                        <span className="badge bg-warning">Pending for Territory Manager </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-1 mb-1">
                                        <a
                                            href="#"
                                            id="show7"
                                            onclick="return Count4();"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Show details&nbsp;
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body border-top collapse" id="demo7">

                                Plan Details:
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Proposal Type: Planned</div>
                                            <div className="col mt-1 mb-1">Activity Type: Event</div>
                                            <div className="col mt-1 mb-1">Activity Sub Type: Mall Activity</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                Targeted Models: Innova, Glanza, UC
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Start Date: 01-May-2023</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">End Date: 15-May-2023</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Claim Month: June</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Claim Year: 2023</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Estimated Budget: Rs. 100000/-</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Dealer Share: 60%</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">TKM Share: 25%</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Other Share: 15%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Estimated Enquiries: 1000</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Estimated Relails: 100</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ paddingBottom: 30 }}>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                Activity Description:
                                                <br />
                                                <br /> Activities describe work in sufficient detail to allow for an
                                                analysis of hazards associated with the work. Activities also
                                                communicate to the worker what work activities they are authorized
                                                to perform, what hazards are associated with that work, and what
                                                controls are necessary to protect the worker.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="claim1" style={{ display: "none" }}>
                                    <div className="row border-top" style={{ paddingTop: 10, borderTop: 2 }}>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Activity Actual Start Date:</div>
                                                <div className="col mt-1 mb-1">
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Activity Actual End Date:</div>
                                                <div className="col mt-1 mb-1">
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="row border-top"
                                        style={{ paddingTop: 10, paddingLeft: 5, borderTop: 2 }}
                                    >
                                        <h4>Claim Details</h4>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">1</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input
                                                        type="text"
                                                        defaultValue="Event"
                                                        disabled=""
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input
                                                        type="text"
                                                        defaultValue="xyz.com"
                                                        disabled=""
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input
                                                        type="number"
                                                        defaultValue="1,00,000/-"
                                                        disabled=""
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className=" "
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                TKM example document
                                                                <br />
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn" onclick="openPdf()">
                                                    View
                                                </button>
                                            </div>
                                            <iframe
                                                id="myFrame"
                                                style={{ display: "none" }}
                                                width={1600}
                                                height={1300}
                                            />
                                        </div>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">2</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className="dropzone dz-clickable"
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                Drag &amp; Drop files into this area or click here to
                                                                browse.
                                                                <br />
                                                                <span className="note" id="main_span">
                                                                    (.pdf, .png, .jpg.)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">3</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className="dropzone dz-clickable"
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                Drag &amp; Drop files into this area or click here to
                                                                browse.
                                                                <br />
                                                                <span className="note" id="main_span">
                                                                    (.pdf, .png, .jpg.)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">4</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className="dropzone dz-clickable"
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                Drag &amp; Drop files into this area or click here to
                                                                browse.
                                                                <br />
                                                                <span className="note" id="main_span">
                                                                    (.pdf, .png, .jpg.)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">5</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className="dropzone dz-clickable"
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                Drag &amp; Drop files into this area or click here to
                                                                browse.
                                                                <br />
                                                                <span className="note" id="main_span">
                                                                    (.pdf, .png, .jpg.)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="row border-top"
                                        style={{ paddingBottom: 0, borderTop: 2 }}
                                    >
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-3" style={{ textAlign: "right", marginTop: 10 }}>
                                            <div className="row">
                                                <div className="col "></div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="row">
                                                <div className="col " style={{ textAlign: "right", marginTop: 15 }}>
                                                    Total Amount
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <input
                                                style={{ marginTop: 10 }}
                                                type="number"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/*<div class="row" id="Div_Submit_2202_480_20896_1" style="padding-top: 15px; display: flex;"><br><div class="col-sm-1 text-center"><button type="button" id="btnSubmit_2202_480_20896_1" class="btn btn-primary" style="width: 130px" onclick="btn_SubmitClick(2202,480,20896,1)"><i class="fa fa-check-square-o"></i>&nbsp;Submit </button></div><div class="col-sm-3 text-center" style="padding-left:90px"><button type="button" id="btnCancel_2202_480_20896_1" class="btn btn-primary" style="width: 130px; display: inline-block;" onclick="btn_CancelClick(2202,480,20896,1)"><i class="fa fa-ban"></i>&nbsp;Cancel </button></div></div>*/}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col mt-1 mb-1">Plan id: AH01A\AD000\APL2023</div>
                                    <div className="col mt-1 mb-1">Submitted On: 01-Apr-2023</div>
                                    <div className="col mt-1 mb-1">Submitted By: Arun Kumar(AG01F)</div>
                                </div>
                                <div className="row">
                                    <div className="col mt-1 mb-1">Start Date: 14-APL-2023</div>
                                    <div className="col mt-1 mb-1">End Date: 23-APL-2023</div>
                                    <div className="col mt-1 mb-1">
                                        Status:
                                        <br />{" "}
                                        <span className="badge bg-success">
                                            Plan Approved by Zonal Incharge
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-1 mb-1">
                                        <a
                                            href="#"
                                            id="show8"
                                            onclick="return Count5();"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Show details&nbsp;
                                        </a>
                                        <a href="../Dealer/submit%20claim%20new.htm">|</a>
                                        <a
                                            onclick="<!--ApplyToJob(51)-->"
                                            href="../Dealer/submitclaimTM.htm"
                                            style={{ textDecoration: "none" }}
                                        >
                                            &nbsp;Submit a Claim
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body border-top collapse" id="demo8">

                                Plan Details:
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Proposal Type: Planned</div>
                                            <div className="col mt-1 mb-1">Activity Type: Event</div>
                                            <div className="col mt-1 mb-1">Activity Sub Type: Mall Activity</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                Targeted Models: Innova, Glanza, UC
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Start Date: 01-May-2023</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">End Date: 15-May-2023</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Claim Month: June</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Claim Year: 2023</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Estimated Budget: Rs. 100000/-</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Dealer Share: 60%</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">TKM Share: 25%</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Other Share: 15%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Estimated Enquiries: 1000</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Estimated Relails: 100</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ paddingBottom: 30 }}>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                Activity Description:
                                                <br />
                                                <br /> Activities describe work in sufficient detail to allow for an
                                                analysis of hazards associated with the work. Activities also
                                                communicate to the worker what work activities they are authorized
                                                to perform, what hazards are associated with that work, and what
                                                controls are necessary to protect the worker.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="claim1" style={{ display: "none" }}>
                                    <div className="row border-top" style={{ paddingTop: 10, borderTop: 2 }}>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Activity Actual Start Date:</div>
                                                <div className="col mt-1 mb-1">
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Activity Actual End Date:</div>
                                                <div className="col mt-1 mb-1">
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="row border-top"
                                        style={{ paddingTop: 10, paddingLeft: 5, borderTop: 2 }}
                                    >
                                        <h4>Claim Details</h4>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">1</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input
                                                        type="text"
                                                        defaultValue="Event"
                                                        disabled=""
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input
                                                        type="text"
                                                        defaultValue="xyz.com"
                                                        disabled=""
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input
                                                        type="number"
                                                        defaultValue="1,00,000/-"
                                                        disabled=""
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className=" "
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                TKM example document
                                                                <br />
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn" onclick="openPdf()">
                                                    View
                                                </button>
                                            </div>
                                            <iframe
                                                id="myFrame"
                                                style={{ display: "none" }}
                                                width={1600}
                                                height={1300}
                                            />
                                        </div>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">2</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className="dropzone dz-clickable"
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                Drag &amp; Drop files into this area or click here to
                                                                browse.
                                                                <br />
                                                                <span className="note" id="main_span">
                                                                    (.pdf, .png, .jpg.)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">3</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className="dropzone dz-clickable"
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                Drag &amp; Drop files into this area or click here to
                                                                browse.
                                                                <br />
                                                                <span className="note" id="main_span">
                                                                    (.pdf, .png, .jpg.)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">4</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className="dropzone dz-clickable"
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                Drag &amp; Drop files into this area or click here to
                                                                browse.
                                                                <br />
                                                                <span className="note" id="main_span">
                                                                    (.pdf, .png, .jpg.)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row border" style={{ paddingBottom: 10, borderTop: 2 }}>
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col">5</div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Expense Particulars
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Vendor Name
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Amount
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-8" style={{ paddingTop: 20 }}>
                                                <div className="col-md-12">
                                                    <div
                                                        id="_ctl0_ContentPlaceHolder1_loadDiv"
                                                        style={{ textAlign: "center" }}
                                                    >
                                                        <div
                                                            className="dropzone dz-clickable"
                                                            style={{
                                                                textAlign: "center",
                                                                minHeight: 100,
                                                                background: "white",
                                                                padding: "10px 10px"
                                                            }}
                                                        >
                                                            <div className="dz-message" style={{ textAlign: "center" }}>
                                                                Drag &amp; Drop files into this area or click here to
                                                                browse.
                                                                <br />
                                                                <span className="note" id="main_span">
                                                                    (.pdf, .png, .jpg.)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />
                                            <div
                                                className="col-md-2"
                                                style={{ paddingTop: 50, marginLeft: "-50px" }}
                                            >
                                                <button className="btn-primary btn">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="row border-top"
                                        style={{ paddingBottom: 0, borderTop: 2 }}
                                    >
                                        <div className="col-md-1" style={{ paddingTop: 30 }}>
                                            <div className="row">
                                                <div className="col"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col mt-1 mb-1"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-3" style={{ textAlign: "right", marginTop: 10 }}>
                                            <div className="row">
                                                <div className="col "></div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="row">
                                                <div className="col " style={{ textAlign: "right", marginTop: 15 }}>
                                                    Total Amount
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <input
                                                style={{ marginTop: 10 }}
                                                type="number"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/*<div class="row" id="Div_Submit_2202_480_20896_1" style="padding-top: 15px; display: flex;"><br><div class="col-sm-1 text-center"><button type="button" id="btnSubmit_2202_480_20896_1" class="btn btn-primary" style="width: 130px" onclick="btn_SubmitClick(2202,480,20896,1)"><i class="fa fa-check-square-o"></i>&nbsp;Submit </button></div><div class="col-sm-3 text-center" style="padding-left:90px"><button type="button" id="btnCancel_2202_480_20896_1" class="btn btn-primary" style="width: 130px; display: inline-block;" onclick="btn_CancelClick(2202,480,20896,1)"><i class="fa fa-ban"></i>&nbsp;Cancel </button></div></div>*/}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col mt-1 mb-1">Plan id: AH11A\AD201\APL2023</div>
                                    <div className="col mt-1 mb-1">Submitted On: 01-Apr-2023</div>
                                    <div className="col mt-1 mb-1">Submitted By: Anubhav(AG01F)</div>
                                </div>
                                <div className="row">
                                    <div className="col mt-1 mb-1">Start Date: 1420-APL-2023</div>
                                    <div className="col mt-1 mb-1">End Date: 29-APL-2023</div>
                                    <div className="col mt-1 mb-1">
                                        Status:
                                        <br /> <span className="badge bg-success">Claim Approved by CPC</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-1 mb-1">
                                        <a
                                            href="#"
                                            id="show2"
                                            onclick="return Count2();"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#demo3"
                                        >
                                            Show details&nbsp;
                                        </a>
                                        <a href="../Dealer/submit%20a%20invoice.htm">|</a>
                                        <a
                                            onclick="ApplyToJob(51)"
                                            href="../Dealer/submit%20a%20invoice.htm"
                                            style={{ textDecoration: "none" }}
                                        >
                                            &nbsp;Submit a GST Invoice
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body border-top collapse" id="demo3">
                                <div className="row">
                                    Plan Details:
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Proposal Type: Unplanned</div>
                                                <div className="col mt-1 mb-1">Activity Type: Event</div>
                                                <div className="col mt-1 mb-1">
                                                    Activity Sub Type: NewPaper Activity
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Targeted Models: Innova, Glanza</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Start Date: 05-May-2023</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">End Date: 19-May-2023</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Claim Month: july</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Claim Year: 2023</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Estimated Budget: Rs. 135000/-</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Dealer Share: 55%</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">TKM Share: 25%</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Other Share: 20%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Estimated Enquiries: 800</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">Estimated Relails: 100</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col mt-1 mb-1">
                                                    Activity Description:
                                                    <br />
                                                    <br /> Activities describe work in sufficient detail to allow for
                                                    an analysis of hazards associated with the work. Activities also
                                                    communicate to the worker what work activities they are authorized
                                                    to perform, what hazards are associated with that work, and what
                                                    controls are necessary to protect the worker.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col mt-1 mb-1">Plan id: AH71A\AD892\MAR2023</div>
                                    <div className="col mt-1 mb-1">Submitted On: 01-Apr-2023</div>
                                    <div className="col mt-1 mb-1">Submitted By: Arun Kumar(AG01F)</div>
                                </div>
                                <div className="row">
                                    <div className="col mt-1 mb-1">Start Date: 18-APL-2023</div>
                                    <div className="col mt-1 mb-1">End Date: 27-APL-2023</div>
                                    <div className="col mt-1 mb-1">
                                        Status:
                                        <br />{" "}
                                        <span className="badge bg-tkm">Plan Rejected by Territory Manager</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mt-1 mb-1">
                                        <a
                                            href="#"
                                            id="show11"
                                            onclick="count8"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#demo11"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Show details&nbsp;
                                        </a>
                                        {/*<a href="#" id="show1" onclick="return Count();" style="text-decoration:none">Show details&nbsp;</a>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="card-body border-top collapse" id="demo11">
                                {/*<b>Claim Details:</b>
      <br>*/}
                                Plan Details:
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Proposal Type: Planned</div>
                                            <div className="col mt-1 mb-1">Activity Type: Event</div>
                                            <div className="col mt-1 mb-1">
                                                Activity Sub Type: Digital Ad Activity
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                Targeted Models: Innova, Glanza, UC
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Start Date: 06-May-2023</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">End Date: 25-May-2023</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Claim Month: June</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Claim Year: 2023</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Estimated Budget: Rs. 250000/-</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Dealer Share: 50%</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">TKM Share: 35%</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Other Share: 15%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Estimated Enquiries: 500</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">Estimated Relails: 90</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ paddingBottom: 30 }}>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col mt-1 mb-1">
                                                Activity Description:
                                                <br />
                                                <br /> Activities describe work in sufficient detail to allow for an
                                                analysis of hazards associated with the work. Activities also
                                                communicate to the worker what work activities they are authorized
                                                to perform, what hazards are associated with that work, and what
                                                controls are necessary to protect the worker.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="row"
                                    id="div_ApprovalRow_2202_480_20896_1"
                                    style={{ marginTop: 5 }}
                                >
                                    <div className="col-md-2">
                                        <button
                                            type="button"
                                            id="btn_Aprove_2202_480_20896_1"
                                            onclick="_btnClick('2202_480_20896_1',1)"
                                            className="btn text-light"
                                            style={{ width: 130, backgroundColor: "#e30612" }}
                                        >
                                            <a href="../Dealer/planresubmission.html" className="text-light">
                                                <i className="fa fa-check-square-o text-light" aria-hidden="true" />
                                                &nbsp;Update{" "}
                                            </a>
                                        </button>
                                        <br />
                                    </div>
                                    <div className="col-md-2">
                                        <button
                                            type="button"
                                            id="btn_Reject_2202_480_20896_1"
                                            className="btn btn-dark"
                                            style={{ width: 130 }}
                                        >
                                            <i className="fa fa-times" aria-hidden="true" />
                                            &nbsp;Delete
                                        </button>
                                    </div>
                                    <div className="col-md-2" />
                                </div>
                                {/*<div class="row" id="Div_Comments_2202_480_20896_1" style="display: flex;"><br><div class="col-md-5"><span id="span_comment_2202_480_20896_1" style="font-weight:bold">Approval&nbsp;Comments</span><textarea class="form-control" id="txtarea_2202_480_20896_1" rows="4" placeholder="Approval Comments" style="border-color: gray;"></textarea></div></div>
      <div class="row" id="Div_Submit_2202_480_20896_1" style="padding-top: 15px; display: flex;"><br><div class="col-sm-1 text-center"><button type="button" id="btnSubmit_2202_480_20896_1" class="btn btn-primary" style="width: 130px" onclick="btn_SubmitClick(2202,480,20896,1)"><i class="fa fa-check-square-o"></i>&nbsp;Submit </button></div><div class="col-sm-3 text-center" style="padding-left:90px"><button type="button" id="btnCancel_2202_480_20896_1" class="btn btn-primary" style="width: 130px; display: inline-block;" onclick="btn_CancelClick(2202,480,20896,1)"><i class="fa fa-ban"></i>&nbsp;Cancel </button></div></div>*/}
                            </div>
                        </div>


                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="">
                                <div className="mt-2">Showing 1 - 20 of 100</div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-end">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SubmittedPlan;