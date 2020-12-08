import Post from "../models/postModel.js";

export const create = async (req, res) => {
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