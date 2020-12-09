

const getFilteredPosts = (filterText, data) => {
  //
  
  let results = [];
  results = data.filter((forumPost) => {
    return (
      filterText.length > 0 &&
      forumPost.title
        .toLowerCase()
        .indexOf(filterText.toLowerCase().trim()) !== -1
    );
  });
  
  
  if (results.length === 0) {
    data.filter((forumPost) => {
      forumPost.search.filter((tags) => {
        if (tags.indexOf(filterText) !== -1) {
          results.push(forumPost);
        }
      });
    });
    //remove duplicates
    const unique = new Set(results);
    //change it back to an array and return it
    results = [...unique];
    return results;
  }
  return results;
};



const getPost = (id, data) => {
  return data.filter((forumPost) => {
    return forumPost.id === id;
  });
}

const addPostData = (forumPost, data) => {
  const _data_ = data
  _data_.push(forumPost);
   return _data_
};


export {
  getFilteredPosts,
  addPostData,
  getPost,
};
