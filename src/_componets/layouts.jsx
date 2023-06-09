import React, { Suspense, Component, useEffect } from "react";
import Header from "./common/header_components/header";
import Footer from "./common/footer";
import Sidebar from "./common/sidebar_components";
import { Container } from "react-bootstrap";
const Layouts = (props) => {
  const loading = () => <div className="text-center"></div>;
  useEffect(() => {
    //changeBodyAttribute("data-layout-mode", "vertical");
    document.body.setAttribute("data-layout-mode", "vertical");
    document.body.setAttribute("data-layout-width", "fluid");
    document.body.setAttribute("data-layout-menu-position", "fixed");
    document.body.setAttribute("data-sidebar-color", "light");
    document.body.setAttribute("data-sidebar-size", "default");
    document.body.setAttribute("data-topbar-color", "light");
    document.body.setAttribute("data-sidebar-icon", "");
    document.body.setAttribute("data-sidebar-showuser", "false");
  }, []);
  return (
    <>
      <div id="wrapper">
        <Suspense fallback={loading()}>
          <Header />
        </Suspense>
        <Suspense fallback={loading()}>
          <Sidebar />
        </Suspense>

        <div className="content-page">
          <div className="content">
            <Container fluid>
              <Suspense fallback={loading()}> {props.children}</Suspense>
            </Container>
          </div>

          <Suspense fallback={loading()}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Layouts;
