import React from 'react';
import {Container, Row, Col} from 'reactstrap';

export default function Academics() {
        return (
            <div className="AcademicsPage main">
              <Container fluid>

                <Row>
                  <Col className = "headbord1">
                    <h1 className = "heading1 text-center">UNDERGRADUATE RESOURCES</h1>
                  </Col>

                  <Col className = "headbord2"> 
                    <h1 className = "heading1 text-center">GRADUATE RESOURCES</h1>
                  </Col>
                </Row>

                <Row>
                    <Col className = "leftcol">

                      <h2 className = "heading2">ADVISING</h2>
                      <p>
                      <a className = "heading3" href="http://www.ufadvising.ufl.edu/college-remote-advising-contacts/"
                      target="_blank" rel="noopener noreferrer">College Remote Advising Center:</a>
                      <text className = "text1"> Find the college that oversees your major to find out how Remote Academic Advising is conducted in your area and to obtain your advisor's contact information. </text>
                      </p>

                      <h2 className = "heading2">TUTORING</h2>
                      <p><a className = "heading3" href="https://teachingcenter.ufl.edu/tutoring/" target="_blank"
                      rel="noopener noreferrer">Teaching Center:</a>
                      <text className = "text1"> The Teaching Center offers various forms of academic support to help students succed in their studies. All tutoring services are free to UF students.</text>
                      </p>

                      <h2 className = "heading2">JOB RESOURCES</h2>
                      <p><a className = "heading3" href="https://career.ufl.edu/"
                      target="_blank" rel="noopener noreferrer">Career Center:</a>
                      <text className = "text1"> The Career Connections Center offers career planning services, internship resources, and information regarding virtual career fairs. Services are all remote. </text>
                      </p>

                      <h2 className = "heading2">HONORS PROGRAM</h2>
                      <p><a className = "heading3" href="http://www.honors.ufl.edu/"
                      target="_blank" rel="noopener noreferrer">Honors Program:</a>
                      <text className = "text1"> The UF Honors Program is structured in two parts: the </text>
                      <a className = "text2" href="http://www.honors.ufl.edu/prospective/admissions/freshmen-honors-program-fhp/">Freshmen Honors Program (FHP) </a>
                      <text className= "text1">for first-year students the </text>
                      <a className = "text2" href="http://www.honors.ufl.edu/prospective/admissions/university-honors-program-uhp/">University Honors Program (UHP) </a>
                      <text className= "text1">for upper-division students. Tailored advising, opportunities for community building and interdisciplinary engagement are provided at all levels of the program.</text>
                      </p>

<                     h2 className = "heading2">ADMISSIONS</h2>
                      <p><a className = "heading3" href="https://admissions.ufl.edu/apply/transfer/"
                      target="_blank" rel="noopener noreferrer">Transfer Student Center:</a>
                      <text className = "text1"> Center for transfer students. Includes eligibility requirements and information on the transfer process.</text>
                      </p>

                      <h2 className = "heading2">SCHOLARSHIPS</h2>
                      <p><a className = "heading3" href="https://cur.aa.ufl.edu/scholarships/"
                      target="_blank" rel="noopener noreferrer">Center for Undergraduate Research:</a>
                      <text className = "text1"> The Center for Undergraduate Research offers several scholarship programs. The Scholars Programs introduces undergraduate students at the University of FLorida to exciting world of academic research.</text>
                      </p>

                    </Col>

                    <Col className = "rightcol">

                      <h2 className = "heading2">GRADUATE RESOURCES</h2>
                      <p><a className = "heading3" href="http://graduateschool.ufl.edu/prospective-students/funding/fellowships/"
                      target="_blank" rel="noopener noreferrer">Fellowships Center:</a>
                      <text className = "text1"> Fellows are expected to devote full time to their studies. Fellows receiving stipends greater than $4,000 per term will receive a tuition waiver for required registration but may be expected to pay appropriate fees.</text>
                      </p>
                    </Col>

                </Row>

              </Container>
            </div>
          );
}