import schools from './posts.json'

const getData = () => {
  let all_posts = [];
  let id = 1;
    schools.forEach(element => {
        element["id"] = id
        all_posts.push(element)
       
        id++
        
    });
  return all_posts
};

export { getData };


//function works properly as is, posts can still be added to the lists
//find a way to write to a json
//posts.json works as intended