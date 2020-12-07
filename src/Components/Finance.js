import React from 'react';
import {Container, Row, Col} from 'reactstrap';
/*import MortgageCalculator from "mortgage-calculator-react";
import CompoundInterest from 'react-compound-interest'; */

export default function Finance() {
        return (
            <div className = "FinancePage main">

              <Container fluid>
              <Row>
                  <Col className = "headbord1">
                    <h1 className = "heading1 text-center">FINANCIAL AID</h1>
                  </Col>

                  <Col className = "headbord2"> 
                    <h1 className = "heading1 text-center">FINANCIAL LITERACY</h1>
                  </Col>
                </Row>

                <Row>
                  <Col className = "leftcol">
                      <p><a className = "heading3" href=" https://www.sfa.ufl.edu/">Office of Financial Aid</a></p>
                      <p><a className = "heading3" href=" https://umatter.ufl.edu/office/student-financial-affairs/">Financial Aid Hours of Operation</a></p>
                      <p><a className = "heading3" href=" https://admissions.dental.ufl.edu/financial-aid/">Financial Aid Overview</a></p>
                      <p><a className = "heading3" href=" https://www.sfa.ufl.edu/help/">Financial Aid Direct Contact</a></p>


                  </Col>

                  <Col className = "rightcol">
                      <p><a className = "heading3" href="https://www.usnews.com/education/financial-literacy-college-students">Financial Literacy for College Students</a></p>
                      <p><a className = "heading3" href="https://www.sfa.ufl.edu/resources/">UF Financial Toolkit</a></p>
                      <p><a className = "heading3" href="https://www.sfa.ufl.edu/resources/financial-literacy/">UF Financial Literacy</a></p>
                      <p><a className = "heading3" href="https://learn-and-grow.hr.ufl.edu/courses-registration/financial-literacy-and-retirement-education/">UF Financial Literacy courses</a></p>
                      <p><a className = "heading3" href="https://benefits.hr.ufl.edu/retirement/flare/">UF Financial Literacy course (F.L.A.R.E)</a></p>
                      <p><a className = "heading3" href="https://www.sfa.ufl.edu/news/financial-literacy-workshop/">Financial Literacy Workshop</a></p>
                      <p><a className = "heading3" href="https://distance.ufl.edu/pfft/">UF PFFT</a></p>
                      <p><a className = "heading3" href="https://opportunity.ufl.edu/students/current-students/first-year-students/fall-financial-literacy-workshops/">UF Literacy Workshops</a></p>

                  </Col>
                </Row>

                <Row>

                  <Col className = "headbord1">
                  <h1 className = "heading1 text-center">INVESTING</h1>
                  </Col>

                  <Col className = "headbord2"> 
                    <h1 className = "heading1 text-center">LOAN CALCULATOR</h1>
                  </Col>
                </Row>

                <Row>

                  <Col className = "leftcol">
                      <p><a className = "heading3" href=" https://ufsic.com/index.html">Student Investment Club</a></p>
                      <p><a className = "heading3" href="https://warrington.ufl.edu/gator-student-investment-fund/">Gator Student Investment Fund</a></p>
                      <p><a className = "heading3" href="https://www.investing.com/">General Investment Guide</a></p>
                      <p><a className = "heading3" href="https://www.nerdwallet.com/article/investing/how-to-invest-in-stocks">Investment Starting Guide</a></p>
                      <p><a className = "heading3" href="https://www.investopedia.com/articles/basics/06/invest1000.asp">Stock Investment Basics</a></p>
                      <p><a className = "heading3" href="https://www.nerdwallet.com/article/investing/retirement-investments-beginners-guide">Saving for Retirment </a></p>
        

                  </Col>

                  <Col className = "rightcol">
                     <p><a className = "heading3" href=" https://www.calculator.net/future-value-calculator.html">Future Value Calculator</a></p>
                     <p><a className = "heading3" href=" https://www.bankrate.com/calculators/college-planning/loan-calculator.aspx">Loan Calculator</a></p>
                     <p><a className = "heading3" href=" https://finaid.org/calculators/loanpayments/">Loan Payment Calculator</a></p>

                  </Col>
                </Row>

              </Container>
        
            </div>
          );
}