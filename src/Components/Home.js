//import React from 'react';
import FacebookPage from './FacebookAPI.js'
import TwitterPage from './TwitterAPI.js'
import React, { useState } from "react";


import Search from "./Search";
import ViewFootballClub from "./ViewFootballClub";
import FootballClubLists from "./FootballClubLists";
import AddPost from "./AddPosts";
import RemoveFootballClub from "./RemoveFootballClub";
import EditFootballClub from "./editFootballClub";
import { getData } from "../data/data";
import GoogleLogin from 'react-google-login'
import GoogleBtn from './GoogleBtn';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './contactForm';


export default function Home() {

  var facebookProps =
  {
    width: "400",
    height: "700"
  }

  var twitterProps =
  {
    width: "400",
    height: "700"
  }

  const [data, setData] = useState(getData());
  const [filteredClubs, setFilteredClubs] = useState([]);
  const [delFootballClub, setDelFootballClub] = useState({
    visible: false,
    id: null,
  });
  const [editFootballClub, setEditFootballClub] = useState({
    visible: false,
    id: null,
  });
  const [viewFootballClub, setViewFootballClub] = useState({
    visible: false,
    id: 0,
  });
  const [addFootballClub, setAddFootballClub] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
  }


  return (
    <div className="App">
      <div className="bge">
        <div style={{marginLeft: "1490px"}}>
        </div>
        <div>
          <div style={{ paddingTop: "5%", paddingBottom: "10px" }} class="ui container">
            <h1 style={{ color: "darkOrange", marginTop: "10px" }}>Welcome To Gator Aider </h1>
            <Search data={data} setFilteredClubs={setFilteredClubs} />
            <div style={{marginLeft: "1180px"}} >
              <FacebookPage{...facebookProps}/>
              <TwitterPage{...twitterProps}/>
            </div>
            <main style={{ marginTop: "20px" }} className="main">
              {/*Button to create a new post */}
              <button onClick={() => setAddFootballClub(true)}
                style={{ marginBottom: "5px", marginRight: "1400px" }}
                class="ui button orange">
                New Post
              </button>
              {/*The add post window at the bottom of the page */}
              <div style={{ marginLeft: "10px" }} class="divisor">
                {addFootballClub && (
                <AddPost
                  setData={setData}
                  data={data}
                  setAddFootballClub={setAddFootballClub} />)}
              </div>
              <div class="ui two column grid">
                <div class="row">
                  {/*Width of the table that shows all the posts */}
                  <div style={{ width: "50%" }} class="table-responsive"className="tableWrapper">
                    {/*The table that holds the posts */}
                    <table class="ui stackable single line fixed striped selectable table padded ">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Category</th>
                        </tr>
                      </thead>
                      <FootballClubLists
                        data={data}
                        filteredClubs={filteredClubs}
                        setViewFootballClub={setViewFootballClub} />
                      {/*this shows the filtered posts in the table  */}
                      <tfoot>
                        <tr>
                          <th>
                          {filteredClubs !== null && filteredClubs.length !== 0 ? "Search results: " + filteredClubs.length: data.length}{" "}Post(s)
                          </th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div style={{width: "100%", marginLeft: "570px", marginTop: "-590px", }}>
                    <ViewFootballClub
                      data={data}
                      viewFootballClub={viewFootballClub}
                      setViewFootballClub={setViewFootballClub}/>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="container">
        <ContactUs/>
      </div>
    </div>
  );
}
