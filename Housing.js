import React, {Component} from 'react';

export default class Housing extends Component {
    render() {
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
}