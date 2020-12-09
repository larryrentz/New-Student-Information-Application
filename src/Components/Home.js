//import React from 'react';
import FacebookPage from './FacebookAPI.js'
import TwitterPage from './TwitterAPI.js'
import React, { useState } from "react";


import Search from "./Search";
import ViewForumPost from "./ViewForumPost";
import ForumPostLists from "./ForumPostLists";
import AddPost from "./AddPosts";


import { getData } from "../data/data";


import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './contactForm';
import './Home.css';



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
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [viewForumPost, setViewForumPost] = useState({
    visible: false,
    id: 0,
  });
  const [addPost, setAddPost] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
  }


  return (
    <div class="container-fluid bg">
    <div className="App">
      <div className="bge">
          <div class="half-page-left">
            <h1 class="heading1 headbord1">Welcome To Gator Aider</h1>
            <Search data={data} setFilteredPosts={setFilteredPosts} />
            <main className="main">
              {/*Button to create a new post */}
              <button onClick={() => setAddPost(true)}
                class="ui button orange">
                New Post
              </button>
              {/*The add post window at the bottom of the page */}
              <div style={{ marginLeft: "" }} class="">
                {addPost && (
                <AddPost
                  setData={setData}
                  data={data}
                  setAddPost={setAddPost} />)}
              </div>
              <div>
              <div style={{width: "100%", padding: "3%"}}>
                <ViewForumPost
                  data={data}
                  viewForumPost={viewForumPost}
                  setViewForumPost={setViewForumPost}/>
              </div>
                <div class="row">
                  {/*Width of the table that shows all the posts */}
                  <div style={{ width: "100%", padding: "2%"}} class="my-custom-scrollbar" >
                    {/*The table that holds the posts */}
                    <table class="table-striped table-bordered table-dark selectable table padded table-hover">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Category</th>
                        </tr>
                      </thead>
                      <ForumPostLists
                        data={data}
                        filteredPosts={filteredPosts}
                        setViewForumPost={setViewForumPost} />
                      {/*this shows the filtered posts in the table  */}
                      <tfoot>
                        <tr>
                          <th>
                          {filteredPosts !== null && filteredPosts.length !== 0 ? "Search results: " + filteredPosts.length: data.length}{" "}Post(s)
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
      <div class="pad">
        <FacebookPage{...facebookProps}/>
      </div>
      <div class="pad">
        <TwitterPage{...twitterProps}/>
      </div>
    </div>
    <div className="container" class="clear">
      <ContactUs/>
    </div>
    </div>
  );
}
