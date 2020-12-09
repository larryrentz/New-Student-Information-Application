import React from "react";
import { getPost } from "../Functions/AppFunctions";

/**
 *
 * @param {*} props
 *
 *THIS PART WORKS AS EXPECTED
 */

const ViewForumPost = (props) => {
  const getForumPostData = () => {
    return getPost(props.viewForumPost["id"], props.data)[0];
  };

  return (
    <div>
      <div style={{ alignItems: "center", justifyContent: "center" }}>
        <i style={{ color: "black" }}>
          Click to see the full Story
        </i>


        {props.viewForumPost['visible'] && getForumPostData() && (
          <div class="dark-mode">
            <div class="content">
            <button onClick={() => props.setViewForumPost(false)} style={{color: "white"}} type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
              {/*you could find a getter or setter that would make this by the user's email name , else make it by anonymous*/}
              <h class="header">Anonymous User</h>
              <div class="ui divider"></div>
              <div class="description" style={{color: "white"}}>

                <p>Title: {getForumPostData().title}</p>
                <p>Category: {getForumPostData().category}</p>
                <p>Content: {getForumPostData().content}</p>



                {getForumPostData().search && (
                  <p>Search tags: {getForumPostData().search.toString().replace(/,/gi, ', ')}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ViewForumPost;
