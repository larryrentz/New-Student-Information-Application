import React from 'react';
import {Container, Row, Col} from 'reactstrap';

export default function Housing() {
      return (
            <div className="HousingPage main bg">

              <Container fluid>

                <Row>
                  <Col className = "headbord">
                    <h1 className = "heading1 text-center">HOUSING RESOURCES</h1>
                  </Col>
                </Row>

                <Row>
                  <Col className = "leftcol">
                    <h2 className = "heading2">UNDERGRADUATE HOUSING</h2>
                    <p><a className = "heading3" href="https://www.housing.ufl.edu/housing/"
                    target="_blank" rel="noopener noreferrer">Housing and Residence Education</a></p>
                    <p><a className = "heading3" href="https://www.housing.ufl.edu/about/staff/"
                    target="_blank" rel="noopener noreferrer">Housing Staff Contact Info</a></p>
                    <p><a className = "heading3" href="https://www.housing.ufl.edu/campus-life/"
                    target="_blank" rel="noopener noreferrer">Campus Life Information</a></p>

                  </Col>

                  <Col className = "rightcol">
                    <h2 className = "heading2">OFF CAMPUS HOUSING</h2>
                    <p><a className = "heading3" href="http://www.offcampus.ufl.edu/"
                    target="_blank" rel="noopener noreferrer">Off Campus Housing Center</a></p>
                  </Col>
                </Row>

                <Row>
                  <Col className = "headbord">
                    <h1 className = "heading1 text-center">HELP/RESOURCES</h1>
                  </Col>
                </Row>

                <Row>
                  <Col>
                  <h2 className = "heading2">SERVICE/HELP</h2>
                  <p><a className = "heading3" href="https://hms.housing.ufl.edu/iservicedesk/f?p=100:1:10608586446464"
                  target="_blank" rel="noopener noreferrer">iService Desk</a></p>
                  </Col>
                </Row>

              </Container>


             
            </div>
        );
}