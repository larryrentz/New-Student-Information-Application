import React from 'react';
import {Container, Row, Col} from 'reactstrap';

export default function Health() {
        return (
            <div className="HealthPage main">
              <div class="header">
              {/* do not change ^ to header */}
              <h3 className="headertext">In an emergency call 911. For mental distress call the suicide hotline at 1-800-273-8255</h3>
            </div>   

              <Container fluid>
                <Row>
                  <Col className = "headbord1">
                  <h1 className = "heading1 text-center">STUDENTS</h1>

                  </Col>

                  <Col className = "headbord2">
                    <h1 className = "heading1 text-center">COVID-19</h1>

                  </Col>

                </Row>

                <Row>

                  <Col className = "leftcol">
                    <h2 className = "heading2">STUDENT HEALTH CARE CENTER</h2>
                    <p><a className = "heading3" href=" https://shcc.ufl.edu/">Student Healh Center</a></p>
                    <p><a className = "heading3" href=" https://shcc.ufl.edu/services/covid19/">Student Healh Center Covid-19</a></p>
                    <p><a className = "heading3" href=" https://ufhealth.org/uf-student-health-care-center-main-campus">SHCC-UFHealth</a></p>

                    <h2 className = "heading2">MISCELLANEOUS</h2>
                    <p><a className = "heading3" href=" https://shcc.ufl.edu/tag/sexual-health/">SHCC-Sexual Health</a></p>
                    <p><a className = "heading3" href=" https://gatorwell.ufsa.ufl.edu/health-topic/sexual-health/">Gatorwell- Sexual Health</a></p>
                    <p><a className = "heading3" href="  https://www.plannedparenthood.org/health-center/florida/gainesville/32601/gainesville-health-center-2155-90320/std-testing-treatment">Planned Parenthood</a></p>
                    <p><a className = "heading3" href="  https://www.cdc.gov/sexualhealth/Default.html">CDC-Sexual Health</a></p>

                  </Col>

                  <Col className = "rightcol">

                    <h2 className = "heading2">OFFICIAL INFORMATION</h2>
                    <p><a className = "heading3" href=" https://www.cdc.gov/coronavirus/2019-nCoV/index.html">CDC-Covid-19</a></p>
                    <p><a className = "heading3" href=" https://www.cdc.gov/coronavirus/2019-ncov/communication/print-resources.html?Sort=Date%3A%3Adesc">CDC-print resources</a></p>
                    <p><a className = "heading3" href=" https://www.cdc.gov/coronavirus/2019-ncov/index.html">CDC.gov</a></p>
                    <p><a className = "heading3" href=" https://www.hrsa.gov/opa/COVID-19-resources">HRSA COVID-19 Resources</a></p>
                    <p><a className = "heading3" href=" https://www.drugabuse.gov/drug-topics/comorbidity/covid-19-resources">NIH - drug abuse</a></p>
                    <p><a className = "heading3" href=" https://www.nih.gov/coronavirus">NIH - Covid-19</a></p>
                    <p><a className = "heading3" href=" https://coronavirus.ufl.edu/">UF - coronavirus</a></p>

                    
                  </Col>

                </Row>

                <Row>
                  <Col className = "headbord">
                    <h1 className = "heading1 text-center">MENTAL HEALTH</h1>
                  </Col>
                </Row>

                <Row>
                  <Col>
                  <h2 className = "heading2 text-center">RESOURCES</h2>
                  <div className = "text-center">
                  <p><a className = "heading3 text-center" href=" https://www.mentalhealth.gov/basics/what-is-mental-health">Basics of Mantaining Mental Health</a></p>
                  <p><a className = "heading3 text-center" href="   https://www.mentalhealth.gov/">Official Government Website for Mental Health</a></p>
                  <p><a className = "heading3 text-center" href="  https://www.nimh.nih.gov/index.shtml">Official website of the National Institute of Mental Health</a></p>
                  </div>

                  <h2 className = "heading2 text-center">STRESS RELIEF</h2>
                  <div className = "text-center">
                  <p><a className = "heading3 text-center" href=" https://www.youtube.com/watch?v=_f_BnneFanM">Relaxing Music</a></p>
                  <p><a className = "heading3 text-center" href="  https://open.spotify.com/">Spotify </a></p>
                  <p><a className = "heading3 text-center" href="      https://www.youtube.com/">YouTube </a></p>
                  <p><a className = "heading3 text-center" href="  https://www.publix.com/pd/publix-chicken-tender-sub/BMO-DSB-100011">PUB SUB ORDER </a></p>
                  </div>

                  </Col>

                  <Col>
                  <h2 className = "heading2 text-center">SHANDS</h2>
                  <div className = "text-center">
                  <p><a className = "heading3 text-center" href="https://ufhealth.org/">UF Health Official Website</a></p>
                  <p><a className = "heading3 text-center" href=" https://ufhealth.org/shands-university-florida">Shands Official Website</a></p>
                  <p><a className = "heading3 text-center" href="https://ufhealth.org/uf-health-shands-hospital-patient-guide/telephone-directory">Shands Patient Directory</a></p>
                  </div>
                  </Col>
                </Row>




              </Container>
              
              </div>
        );
}