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
import './Home.css';
import {Container, Row, Col} from 'reactstrap';


export default function Home() {

  var facebookProps =
  {
    width: "300",
    height: "700"
  }

  var twitterProps =
  {
    width: "300",
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
    <div class="container-fluid bg">
    <div className="App">
      <div className="bge">
          <div class="half-page-left">
            <h1 class="heading1 headbord1">Welcome To Gator Aider</h1>
            <Search data={data} setFilteredClubs={setFilteredClubs} />
            <main className="main">
              {/*Button to create a new post */}
              <button onClick={() => setAddFootballClub(true)}
                class="ui button orange">
                New Post
              </button>
              {/*The add post window at the bottom of the page */}
              <div style={{ marginLeft: "" }} class="">
                {addFootballClub && (
                <AddPost
                  setData={setData}
                  data={data}
                  setAddFootballClub={setAddFootballClub} />)}
              </div>
              <div>
              <div style={{width: "100%", padding: "5%"}}>
                <ViewFootballClub
                  data={data}
                  viewFootballClub={viewFootballClub}
                  setViewFootballClub={setViewFootballClub}/>
              </div>
                <div class="row">
                  {/*Width of the table that shows all the posts */}
                  <div style={{ width: "100%", padding: "3%" }} class="" >
                    {/*The table that holds the posts */}
                    <table class="stackable single line table-striped selectable table padded table-hover">
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
                </div>
              </div>
            </main>
          </div>
      </div>
    </div>
    <div class="half-page-right">
      <FacebookPage{...facebookProps}/>
      <TwitterPage{...twitterProps}/>
    </div>
    <div className="container" class="clear">
      <ContactUs/>
    </div>
    </div>
  );
}
