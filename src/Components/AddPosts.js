import React, { useState, useEffect } from "react";
import { addPostData } from "../Functions/AppFunctions";
//Now we write to a JSON file
//var fs = require('fs');
//var data = fs.readFileSync('../posts.json');
//var words = JSON.parse('../posts.json');


/**
 *
 * @param {*} props
 * My version of this has errors, reimplement it
 */

const AddPost = (props) => {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState(null);

  
  
const submit = () => {
  //determines what fields must be put in
    const required = title && content; //&& category ;//&& color;
    if (required) {
      const id =
        props.data.length > 0 ? props.data[props.data.length - 1].id + 1 : 1;

      let _new_post = {};
      if (!search) {
        _new_post = {
          title: title,
          content: content,
          category: category,
          id: id,
        };
      } else {
        _new_post = {
          title: title,
          content: content,
       
          category: category,
          search: search.split(","),
          id: id,
        };
      }
      props.setData(addPostData(_new_post, props.data));
      props.setAddPost(false);


     
      
    }

    //we want to write this data to the JSON File

 
  };//end of submit

  return (
    <div>
      <div class="ui card fluid">
        <div class="content">
          <a class="header">New Post</a>
          <div class="ui divider"></div>
          <div class="description">
            <form class="ui form small fluid">
              <div class="required field">
                <label>Title</label>
                <input
                  style={{ height: "35px" }}
                  type="text"
                  value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                ></input>
              </div>

              <div class="field">
                <label>Category</label>
                <input
                  style={{ height: "35px" }}
                  type="text"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Category"
                ></input>
              </div>

              <div class="required field">
                <label>Content</label>
                <input
                  type="text"
                  required
                  value={content}
                  placeholder="Content"
                  onChange={(e) => setContent(e.target.value)}
                  rows="2"
                ></input>
              </div>
      
             

              <div class="field">
                <label>Tags</label>
                <textarea
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  rows="2"
                ></textarea>
              </div>

              <button class="ui button green" type="submit" onClick={submit}>
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPost;
