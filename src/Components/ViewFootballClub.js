import React from "react";
import { getFootballClub } from "../Functions/AppFunctions";

/**
 *
 * @param {*} props
 *
 *THIS PART WORKS AS EXPECTED
 */

const ViewFootballClub = (props) => {
  const getFootballClubData = () => {
    return getFootballClub(props.viewFootballClub["id"], props.data)[0];
  };
  var blank = "Jimminy";
  return (
    <div>
      <div style={{ alignItems: "center", justifyContent: "center" }}>
        <i style={{ color: "black" }}>
          Click to see the full Story
        </i>


        {props.viewFootballClub['visible'] && getFootballClubData() && (
          <div class="ui card fluid">
            <div class="content">
            <button onClick={() => props.setViewFootballClub(false)} type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
              {/*you could find a getter or setter that would make this by the user's email name , else make it by anonymous*/}
              <h class="header">Anonymous User</h>
              <div class="ui divider"></div>
              <div class="description">

                <p>Title: {getFootballClubData().school}</p>
                <p>Category: {getFootballClubData().conference}</p>
                <p>Content: {getFootballClubData().mascot}</p>



                {getFootballClubData().search && (
                  <p>Search tags: {getFootballClubData().search.toString().replace(/,/gi, ', ')}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ViewFootballClub;
