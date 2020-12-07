import React from 'react';

export default function Academics() {
        return (
            <div className="AcademicsPage">
              <container>
              <div className="column">
                <h1 className = "heading1">UNDERGRADUATE RESOURCES</h1>
                <div className="column">
                  <h2 className = "heading2">ADVISING</h2>
                  <p><a className = "heading3" href="http://www.ufadvising.ufl.edu/college-remote-advising-contacts/"
                  target="_blank" rel="noopener noreferrer">College Remote Advising Center:</a>
                  </p>
                </div>
                <div class="column">
                  <h2 className = "heading2">TUTORING</h2>
                  <p><a href="https://teachingcenter.ufl.edu/tutoring/" target="_blank"
                  rel="noopener noreferrer">Teaching Center</a></p>
                </div>
                <div class="column">
                  <h2 className = "heading2">JOB RESOURCES</h2>
                  <p><a href="https://career.ufl.edu/"
                  target="_blank" rel="noopener noreferrer">Career Center</a></p>
                </div>
                <div class="column">
                  <h2 className = "heading2">HONORS PROGRAM</h2>
                  <p><a href="http://www.honors.ufl.edu/"
                  target="_blank" rel="noopener noreferrer">Honors Program</a></p>
                </div>
                <div class="column">
                  <h2 className = "heading2">ADMISSIONS</h2>
                  <p><a href="https://admissions.ufl.edu/apply/transfer/"
                  target="_blank" rel="noopener noreferrer">Transfer Student Center</a></p>
                </div>
                <div class="column">
                  <h2 className = "heading2">SCHOLARSHIPS</h2>
                  <p><a href="https://cur.aa.ufl.edu/scholarships/"
                  target="_blank" rel="noopener noreferrer">Center for Undergraduate Research</a></p>
                </div>

              </div>

              <div class="column">
                <h1 className = "heading1">GRADUATE RESOURCES</h1>
                <div class="column">
                  <h2 className = "heading2">GRADUATE RESOURCES</h2>
                  <p><a href="http://graduateschool.ufl.edu/prospective-students/funding/fellowships/"
                  target="_blank" rel="noopener noreferrer">Fellowships Center</a></p>
                </div>
              </div>
              </container>
            </div>
          );
}