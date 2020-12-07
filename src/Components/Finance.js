import React from 'react';
import {Container, Row, Col} from 'reactstrap';
/*import MortgageCalculator from "mortgage-calculator-react";
import CompoundInterest from 'react-compound-interest'; */

export default function Finance() {
        return (
            <div className = "FinancePage main bg">

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
                      <p><a className = "heading3" href=" https://www.sfa.ufl.edu/" target="_blank" rel="noopener noreferrer">Office of Financial Aid</a></p>
                      <p><a className = "heading3" href=" https://umatter.ufl.edu/office/student-financial-affairs/" target="_blank" rel="noopener noreferrer">Financial Aid Hours of Operation</a></p>
                      <p><a className = "heading3" href=" https://admissions.dental.ufl.edu/financial-aid/" target="_blank" rel="noopener noreferrer">Financial Aid Overview</a></p>
                      <p><a className = "heading3" href=" https://www.sfa.ufl.edu/help/" target="_blank" rel="noopener noreferrer">Financial Aid Direct Contact</a></p>


                  </Col>

                  <Col className = "rightcol">
                      <p><a className = "heading3" href="https://www.usnews.com/education/financial-literacy-college-students" target="_blank" rel="noopener noreferrer">Financial Literacy for College Students</a></p>
                      <p><a className = "heading3" href="https://www.sfa.ufl.edu/resources/" target="_blank" rel="noopener noreferrer">UF Financial Toolkit</a></p>
                      <p><a className = "heading3" href="https://www.sfa.ufl.edu/resources/financial-literacy/" target="_blank" rel="noopener noreferrer">UF Financial Literacy</a></p>
                      <p><a className = "heading3" href="https://learn-and-grow.hr.ufl.edu/courses-registration/financial-literacy-and-retirement-education/" target="_blank" rel="noopener noreferrer">UF Financial Literacy courses</a></p>
                      <p><a className = "heading3" href="https://benefits.hr.ufl.edu/retirement/flare/" target="_blank" rel="noopener noreferrer">UF Financial Literacy course (F.L.A.R.E)</a></p>
                      <p><a className = "heading3" href="https://www.sfa.ufl.edu/news/financial-literacy-workshop/" target="_blank" rel="noopener noreferrer">Financial Literacy Workshop</a></p>
                      <p><a className = "heading3" href="https://distance.ufl.edu/pfft/" target="_blank" rel="noopener noreferrer">UF PFFT</a></p>
                      <p><a className = "heading3" href="https://opportunity.ufl.edu/students/current-students/first-year-students/fall-financial-literacy-workshops/" target="_blank" rel="noopener noreferrer">UF Literacy Workshops</a></p>

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
                      <p><a className = "heading3" href=" https://ufsic.com/index.html" target="_blank" rel="noopener noreferrer">Student Investment Club</a></p>
                      <p><a className = "heading3" href="https://warrington.ufl.edu/gator-student-investment-fund/" target="_blank" rel="noopener noreferrer">Gator Student Investment Fund</a></p>
                      <p><a className = "heading3" href="https://www.investing.com/" target="_blank" rel="noopener noreferrer">General Investment Guide</a></p>
                      <p><a className = "heading3" href="https://www.nerdwallet.com/article/investing/how-to-invest-in-stocks" target="_blank" rel="noopener noreferrer">Investment Starting Guide</a></p>
                      <p><a className = "heading3" href="https://www.investopedia.com/articles/basics/06/invest1000.asp" target="_blank" rel="noopener noreferrer">Stock Investment Basics</a></p>
                      <p><a className = "heading3" href="https://www.nerdwallet.com/article/investing/retirement-investments-beginners-guide" target="_blank" rel="noopener noreferrer">Saving for Retirment </a></p>
        

                  </Col>

                  <Col className = "rightcol">
                     <p><a className = "heading3" href=" https://www.calculator.net/future-value-calculator.html" target="_blank" rel="noopener noreferrer">Future Value Calculator</a></p>
                     <p><a className = "heading3" href=" https://www.bankrate.com/calculators/college-planning/loan-calculator.aspx" target="_blank" rel="noopener noreferrer">Loan Calculator</a></p>
                     <p><a className = "heading3" href=" https://finaid.org/calculators/loanpayments/" target="_blank" rel="noopener noreferrer">Loan Payment Calculator</a></p>

                  </Col>
                </Row>

              </Container>
        
            </div>
          );
}