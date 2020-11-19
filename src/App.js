import './App.css';
import React from "react";
import GoogleMap, {addMarkers, locationList, mapOptions} from './Components/GoogleMap.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MortgageCalculator from "mortgage-calculator-react";
import CompoundInterest from 'react-compound-interest';


// TODO Add a 404 page
// TODO commit package.json file
// TODO make the homepage the default first page
// TODO! MORTGAGE.JS WAS INSTALLED, react-compound-interestwas installed, interest.js installed, Passport.js installed

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div>
        {/* ADD Login functionality
      <div>
            <Link to="/log_in">Login</Link>
        </div>*/}
      <div class="topnav">
         <a class="active" href="#logo">UF</a>

{/*the titles of the different navigation links*/ }
          <div>
            <Link to="/home">Home</Link>

          </div >

          <div>
            <Link to="/academics">Academics</Link>
          </div>

          <div>
            <Link to="/finance">Finance</Link>
          </div>

          <div>
            <Link to="/health">Health</Link>
          </div>

          <div>
            <Link to="/housing">Housing</Link>
          </div>

          <div>
            <Link to="/map">Map</Link>
          </div>



          </div>
          </div>


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time


          NOTE TO SELF GET RID OF EXACT makes it only one homepage
        */}
        <Switch>


          <Route path="/home">
            <Home />

            </Route>
          <Route path="/log_in">
            <log_in />

          </Route>
          <Route path="/academics">
            <Academics />

          </Route>
          <Route path="/finance">
            <Finance />

            </Route>
          <Route path="/health">
            <Health />

            </Route>
          <Route path="/housing">
            <Housing />

            </Route>
          <Route path="/map">
            <Map />


          </Route>
        </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
{/* HTML CODE GOES HERE*/}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Academics() {
  return (
    <div classname="AcademicsPage">
      <div class="column">
        <h1>Undergraduate Resources</h1>
        <div class="column">
          <h2>Advising</h2>
          <p><a href="http://www.ufadvising.ufl.edu/college-remote-advising-contacts/"
          target="_blank" rel="noopener noreferrer">College Remote Advising Center</a></p>
        </div>
        <div class="column">
          <h2>Tutoring</h2>
          <p><a href="https://teachingcenter.ufl.edu/tutoring/" target="_blank"
          rel="noopener noreferrer">Teaching Center</a></p>
        </div>
        <div class="column">
          <h2>Job Resources</h2>
          <p><a href="https://career.ufl.edu/"
          target="_blank" rel="noopener noreferrer">Career Center</a></p>
        </div>
        <div class="column">
          <h2>Honors Programs</h2>
          <p><a href="http://www.honors.ufl.edu/"
          target="_blank" rel="noopener noreferrer">Honors Program</a></p>
        </div>
        <div class="column">
          <h2>Admissions</h2>
          <p><a href="https://admissions.ufl.edu/apply/transfer/"
          target="_blank" rel="noopener noreferrer">Transfer Student Center</a></p>
        </div>
        <div class="column">
          <h2>Scholarships</h2>
          <p><a href="https://cur.aa.ufl.edu/scholarships/"
          target="_blank" rel="noopener noreferrer">Center for Undergraduate Research</a></p>
        </div>
      </div>
      <div class="column">
        <h1>Graduate Resources</h1>
        <div class="column">
          <h2>Graduate Resources</h2>
          <p><a href="http://graduateschool.ufl.edu/prospective-students/funding/fellowships/"
          target="_blank" rel="noopener noreferrer">Fellowships Center</a></p>
        </div>
      </div>
    </div>
  );
}

function Finance() {
  return (
    <div>
      <div class="ui two column padded grid">
              <div class="column">
              <h1>Financial Aid</h1>
             {/*Header */}

              {/*HyperLinks */}
              <p><a href=" https://www.sfa.ufl.edu/">Office of financial aid</a></p>
              <p><a href=" https://umatter.ufl.edu/office/student-financial-affairs/">Financial Aid Hours of Operation</a></p>
              <p><a href=" https://admissions.dental.ufl.edu/financial-aid/">Financial Aid Overview</a></p>
              <p><a href=" https://www.sfa.ufl.edu/help/">Financial Aid Direct Contact</a></p>
                    </div>
                  </div>


      <div class="ui two column padded grid">
              <div class="column">
              <h1>Financial Literacy</h1>
              {/*Header */}

              {/*HyperLinks */}
              <p><a href="https://www.usnews.com/education/financial-literacy-college-students">Financial Literacy for College Students</a></p>
              <p><a href="https://www.sfa.ufl.edu/resources/">UF Financial Toolkit</a></p>
              <p><a href="https://www.sfa.ufl.edu/resources/financial-literacy/">UF Financial Literacy</a></p>
              <p><a href="https://learn-and-grow.hr.ufl.edu/courses-registration/financial-literacy-and-retirement-education/">UF Financial Literacy courses</a></p>
              <p><a href="https://benefits.hr.ufl.edu/retirement/flare/">UF Financial Literacy course (F.L.A.R.E)</a></p>
              <p><a href="https://www.sfa.ufl.edu/news/financial-literacy-workshop/">Financial Literacy Workshop</a></p>
              <p><a href="https://distance.ufl.edu/pfft/">UF PFFT</a></p>
              <p><a href="https://opportunity.ufl.edu/students/current-students/first-year-students/fall-financial-literacy-workshops/">UF Literacy Workshops</a></p>









                    </div>
                  </div>

      <div class="ui two column padded grid">
              <div class="column">
              <h1>Investing</h1>
              {/*Header */}

              {/*HyperLinks */}
              <p><a href=" https://ufsic.com/index.html">Student Investment Club</a></p>
              <p><a href="https://warrington.ufl.edu/gator-student-investment-fund/">Gator Student Investment Fund</a></p>
              <p><a href="https://www.investing.com/">General Investment Guide</a></p>
              <p><a href="https://www.nerdwallet.com/article/investing/how-to-invest-in-stocks">Investment Starting Guide</a></p>
              <p><a href="https://www.investopedia.com/articles/basics/06/invest1000.asp">Stock Investment Basics</a></p>
              <p><a href="https://www.nerdwallet.com/article/investing/retirement-investments-beginners-guide">Saving for Retirment </a></p>



                    </div>
                  </div>

      <div class="ui two column padded grid">
              <div class="column">
              <h1>Loan Calculators</h1>
              {/*Header */}

              {/*HyperLinks */}
              <p><a href=" https://www.calculator.net/future-value-calculator.html">Future Value Calculator</a></p>
              <p><a href=" https://www.bankrate.com/calculators/college-planning/loan-calculator.aspx">Loan Calculator</a></p>
              <p><a href=" https://finaid.org/calculators/loanpayments/">Loan Payment Calculator</a></p>
              {/*INSTALLED MORTGAGE.JS */}

              {/*Put This underneath a dropdown bar, Takes up too much space on the page */}
               <h2>Mortgage Calculator</h2>
               <div>
                    <MortgageCalculator/>
                    {/*<MortgageCalculator showPaymentSchedule /> Maybe not */}
              </div>

<h2>Compound Interest Calculator </h2>
              <div>
              <CompoundInterest title="Compound Interest Calculator" />
              </div>


{/*
<h2>Interest Calculator</h2>
              <script src="../../lib/interest.js"></script>
              <script>
                  var interest_1 = new Interest(1000, 12, 5, {tax:19});
              </script>
*/}
                    </div>
                  </div>




    </div>
  );
}

  function Health() {
                return (
                  <div className="HealthPage">
                    <div>
                  <div class="header">
                    {/* do not change ^ to header */}
                    <h1>In an emergency call 911. For mental distress call the suicide hotline at 1-800-273-8255</h1>
                  </div>

                  <div class="ui divider"></div>
            <div class="ui two column padded grid">
              <div class="column">
                <h1>STUDENTS</h1>

              <h2>Student Health Care Center</h2> {/*Header */}
              {/*HyperLinks */}
              <p><a href=" https://shcc.ufl.edu/">Student Healh Center</a></p>

              <p><a href=" https://shcc.ufl.edu/services/covid19/">Student Healh Center Covid-19</a></p>

              <p><a href=" https://ufhealth.org/uf-student-health-care-center-main-campus">SHCC-UFHealth</a></p>

              <h2>Sexual Health</h2>
              <p><a href=" https://shcc.ufl.edu/tag/sexual-health/">SHCC-Sexual Health</a></p>
              <p><a href=" https://gatorwell.ufsa.ufl.edu/health-topic/sexual-health/">Gatorwell- Sexual Health</a></p>
              <p><a href="  https://www.plannedparenthood.org/health-center/florida/gainesville/32601/gainesville-health-center-2155-90320/std-testing-treatment">Planned Parenthood</a></p>
              <p><a href="  https://www.cdc.gov/sexualhealth/Default.html">CDC-Sexual Health</a></p>
              <p><a href="   https://www.pornhub.com/view_video.php?viewkey=ph5f4f9c6bd67e4">Sexual Health-Funny</a></p>
              {/*For the love of god delete this link or just don't show it during presentation^^^^ */}

            <p><a href=" https://www.thehotline.org/">National Domestic Violence Hotline</a></p>
            <p><a href="  https://www.myflfamilies.com/service-programs/abuse-hotline/frequently-asked-questions.shtml">myflfamilies</a></p>

              </div>
            </div>

              <div class="ui two column padded grid">
              <div class="column">

                <h1>COVID-19</h1>

                <h2>Covid-19 is a very real and dangerous virus please protect yourself and others</h2>
                {/* Headers and links for specific websites that deal with Covid-19 */}
                <h3>CDC - official website</h3>
                <p><a href=" https://www.cdc.gov/coronavirus/2019-nCoV/index.html">CDC-Covid-19</a></p>

                <h3>CDC informational pamphlet</h3>
                <p><a href=" https://www.cdc.gov/coronavirus/2019-ncov/communication/print-resources.html?Sort=Date%3A%3Adesc">CDC-print resources</a></p>

                <h3>General Information</h3>
                <p><a href=" https://www.cdc.gov/coronavirus/2019-ncov/index.html">CDC.gov</a></p>

                <h3>HRSA Covid-19 </h3>
                <p><a href=" https://www.hrsa.gov/opa/COVID-19-resources">HRSA COVID-19 Resources</a></p>

                <h3>NIH- Covid-19 and substance abuse</h3>
                <p><a href=" https://www.drugabuse.gov/drug-topics/comorbidity/covid-19-resources">NIH - drug abuse</a></p>

                <h3>NIH - Covid-19</h3>
                <p><a href=" https://www.nih.gov/coronavirus">NIH - Covid-19</a></p>

                <h3>University of Florida Covid-19 response</h3>
                <p><a href=" https://coronavirus.ufl.edu/">UF - coronavirus</a></p>

              </div>
              </div>

              <div class="ui two column padded grid">
              <div class="column">

                <h1>MENTAL HEALTH</h1>
                  <h2>Resources</h2>
                <p><a href=" https://www.mentalhealth.gov/basics/what-is-mental-health">Mental Health.gov/Basics</a></p>
                <p><a href="   https://www.mentalhealth.gov/">Mental Health.gov</a></p>
                <p><a href="  https://www.nimh.nih.gov/index.shtml">NIMH.NIH.gov</a></p>

                <h2>Stress Relief</h2>
                <p><a href=" https://www.youtube.com/watch?v=_f_BnneFanM">Music to relax to </a></p>
                <p><a href="  https://open.spotify.com/">Spotify </a></p>
                <p><a href="      https://www.youtube.com/">YouTube </a></p>
                <p><a href="  https://www.publix.com/pd/publix-chicken-tender-sub/BMO-DSB-100011">Get yourself a chicken tender sub </a></p>
                {/*Code a submit link button here  */}


              </div>
              </div>

              <div class="ui two column padded grid">
              <div class="column">
                <h1>Shands</h1>
                <p><a href="https://ufhealth.org/">ufhealth.org</a></p>
                <p><a href=" https://ufhealth.org/shands-university-florida">ufhealth-shands</a></p>
                <p><a href="https://ufhealth.org/uf-health-shands-hospital-patient-guide/telephone-directory">Shands Patient Directory</a></p>

              </div>
              </div>
                  </div>
                    {/* INSERT SUBMIT BUTTON THAT SENDS AN EMAIL OR DATA OR WHATEVER TO SUBMIT A NEW LINK */}

                  </div>

                );
  }

function Housing() {
    return (
      <div classname="HousingPage">
        <div class="column">
          <h1>Housing Page</h1>
          <div class="column">
            <h2>Undergraduate Housing</h2>
            <p><a href="https://www.housing.ufl.edu/housing/"
            target="_blank" rel="noopener noreferrer">Housing and Residence Education</a></p>
            <p><a href="https://www.housing.ufl.edu/about/staff/"
            target="_blank" rel="noopener noreferrer">Housing Staff Contact Info</a></p>
            <p><a href="https://www.housing.ufl.edu/campus-life/"
            target="_blank" rel="noopener noreferrer">Campus Life Information</a></p>
          </div>
          <div class="column">
            <h2>Off Campus Housing</h2>
            <p><a href="http://www.offcampus.ufl.edu/"
            target="_blank" rel="noopener noreferrer">Off Campus Housing Center</a></p>
          </div>
        </div>
        <div class="column">
          <h1>Resources</h1>
          <div class="column">
            <h2>Help Information</h2>
            <p><a href="https://hms.housing.ufl.edu/iservicedesk/f?p=100:1:10608586446464"
            target="_blank" rel="noopener noreferrer">iService Desk</a></p>
          </div>
        </div>
      </div>
    );
}

function Map() {

  var mapProps = {
  options: mapOptions,
  onMount: addMarkers,
  onMountProps: locationList,
}

return (
  <div>
    <h1>Map</h1>
    <GoogleMap{...mapProps} />
  </div>
);
}
