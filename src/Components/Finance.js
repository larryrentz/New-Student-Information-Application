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

                      <p><a className = "heading3" href=" https://www.sfa.ufl.edu/" target="_blank" rel="noopener noreferrer">Office of Financial Aid:</a>
                      <text className = "text1"> Official website for UF's Office of Financial Aid.</text>
                      </p>

                      <p><a className = "heading3" href=" https://umatter.ufl.edu/office/student-financial-affairs/" target="_blank" rel="noopener noreferrer">Financial Aid Hours of Operation:</a>
                      <text className = "text1"> Operating hours for the Office of Financial Aid.</text>
                      </p>

                      <p><a className = "heading3" href=" https://admissions.dental.ufl.edu/financial-aid/" target="_blank" rel="noopener noreferrer">Financial Aid Overview:</a>
                      <text className = "text1"> General information on Financial Aid.</text>
                      </p>

                      <p><a className = "heading3" href=" https://www.sfa.ufl.edu/help/" target="_blank" rel="noopener noreferrer">Financial Aid Direct Contact:</a>
                      <text className = "text1"> Ask a Financial Aid question.</text>
                      </p>


                  </Col>

                  <Col className = "rightcol">
                      <p><a className = "heading3" href="https://www.usnews.com/education/financial-literacy-college-students" target="_blank" rel="noopener noreferrer">Financial Literacy for College Students:</a>
                      <text className = "text1"> Basic guide to Finance for new students.</text>
                      </p>
                      <p><a className = "heading3" href="https://www.sfa.ufl.edu/resources/" target="_blank" rel="noopener noreferrer">UF Financial Toolkit:</a>
                      <text className = "text1"> Various resources related to student finance.</text>
                      </p>

                      <p><a className = "heading3" href="https://www.sfa.ufl.edu/resources/financial-literacy/" target="_blank" rel="noopener noreferrer">UF Financial Literacy:</a>
                      <text className = "text1"> Financial literacy guide by UF.</text>
                      </p>

                      <p><a className = "heading3" href="https://learn-and-grow.hr.ufl.edu/courses-registration/financial-literacy-and-retirement-education/" target="_blank" rel="noopener noreferrer">UF Financial Literacy courses:</a>
                      <text className = "text1"> Assorted follow up courses on Financial Literacy.</text>
                      </p>

                      <p><a className = "heading3" href="https://benefits.hr.ufl.edu/retirement/flare/" target="_blank" rel="noopener noreferrer">UF Financial Literacy course (F.L.A.R.E):</a>
                      <text className = "text1"> Link to signup for UF's Financial Literacy workshop.</text>
                      </p>

                      <p><a className = "heading3" href="https://distance.ufl.edu/pfft/" target="_blank" rel="noopener noreferrer">UF PFFT:</a>
                      <text className = "text1"> Personal Finance For Teachers (PFFT) course online.</text>
                      </p>

                      <p><a className = "heading3" href="https://opportunity.ufl.edu/students/current-students/first-year-students/fall-financial-literacy-workshops/" target="_blank" rel="noopener noreferrer">UF Literacy Workshops:</a>
                      <text className = "text1"> Sign up for virtual financial literacy workshops at UF.</text>
                      </p>

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
                    
                      <p><a className = "heading3" href=" https://ufsic.com/index.html" target="_blank" rel="noopener noreferrer">Student Investment Club:</a>
                      <text className = "text1"> UF Student Investment Club Official Website.</text>
                      </p>

                      <p><a className = "heading3" href="https://warrington.ufl.edu/gator-student-investment-fund/" target="_blank" rel="noopener noreferrer">Gator Student Investment Fund:</a>
                      <text className = "text1"> GSIF is a student managed investment fund that provides members with a realistic asset management experience. ROughly 45 students work together to deploy the fund's ~$750,000 AUM in domestic equities while acitvely managing portfolio risk.</text>
                      </p>

                      <p><a className = "heading3" href="https://www.investing.com/" target="_blank" rel="noopener noreferrer">General Investment Guide:</a>
                      <text className = "text1"> Link to investing website cleverly named "investing.com"</text>
                      </p>

                      <p><a className = "heading3" href="https://www.nerdwallet.com/article/investing/how-to-invest-in-stocks" target="_blank" rel="noopener noreferrer">Investment Starting Guide:</a>
                      <text className = "text1"> Beginner's guide to investing.</text>
                      </p>

                      <p><a className = "heading3" href="https://www.nerdwallet.com/article/investing/retirement-investments-beginners-guide" target="_blank" rel="noopener noreferrer">Saving for Retirment:</a>
                      <text className = "text1"> How to provide for yourself long after you're done with college.</text>
                      </p>
        

                  </Col>

                  <Col className = "rightcol">

                     <p><a className = "heading3" href=" https://www.calculator.net/future-value-calculator.html" target="_blank" rel="noopener noreferrer">Future Value Calculator:</a>
                     <text className = "text1"> Calculate the future value of an investment based on multiple factors.</text>
                     </p>

                     <p><a className = "heading3" href=" https://www.bankrate.com/calculators/college-planning/loan-calculator.aspx" target="_blank" rel="noopener noreferrer">Loan Calculator:</a>
                     <text className = "text1"> Calculate how long it will take to pay off your student loan.</text>
                     </p>

                     <p><a className = "heading3" href=" https://finaid.org/calculators/loanpayments/" target="_blank" rel="noopener noreferrer">Loan Payment Calculator:</a>
                     <text className = "text1"> Estimate the size of your monthly loan payments.</text>
                     </p>

                  </Col>
                </Row>

              </Container>
        
            </div>
          );
}