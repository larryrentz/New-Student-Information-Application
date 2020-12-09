import React from "react";

/**
 *
 * @param {*} props
 *
 */

const ForumPostLists = (props) => {

 
  
  const viewPostData = (id) => {
    props.setViewForumPost({
      visible: true,
      id: id,
    });
  };

  //console.log(props.data)

  const buildingList =
    props.filteredPosts.length === 0
      ? props.data.map((forumPost) => {
          return (
            <tr
              key={forumPost.id}
            >
              <td onClick={() => viewPostData(forumPost.id)} data-label="Title">{forumPost.title} </td>
              <td onClick={() => viewPostData(forumPost.id)} data-label="Content"> {forumPost.content} </td>
          
            </tr>
          );
        })
      : props.filteredPosts.map((forumPost) => {
          return (
            <tr
              key={forumPost.id}
            >
              <td onClick={() => viewPostData(forumPost.id)} data-label="Title">{forumPost.title} </td>
              <td onClick={() => viewPostData(forumPost.id)} data-label="Content"> {forumPost.content} </td>
                
            </tr>
          );
        });

  return <tbody>{buildingList}</tbody>;
};
export default ForumPostLists;
