import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
    /* get the football club data from req.body */
    /* Then save the FootballClub to the database */
    const post = req.body;
    if (!post) {
      return res.status(200).send({
        error: "Post not found",
      });
    }
    await new Post(post).save()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(200).send(err);
      });
  };

  export const getPosts = async (req, res) => {
    await Post.find({}, (err, posts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!posts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Post not found` })
        }
        return res.status(200).json({ success: true, data: posts })
    }).catch(err => console.log(err))
}