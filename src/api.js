import axios from "axios";

export const getArticles = params => {
  return axios
    .get("https://bowie-nc-news.herokuapp.com/api/articles", { params })
    .then(({ data }) => {
      return data.articles;
    });
};

export const deleteComment = comment_id => {
  return axios.delete(
    `https://bowie-nc-news.herokuapp.com/api/comments/${comment_id}`
  );
};

export const fetchArticle = article_id => {
  return axios.get(
    `https://bowie-nc-news.herokuapp.com/api/articles/${article_id}`
  );
};

export const fetchComments = article_id => {
  return axios.get(
    `https://bowie-nc-news.herokuapp.com/api/articles/${article_id}/comments`
  );
};

export const addComment = (article_id, user, value) => {
  const commentInfo = { body: value, username: user };

  return axios.post(
    `https://bowie-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
    commentInfo
  );
};

export const updateVote = (id, patchedItem, voteUpdate) => {
  return axios.patch(
    `https://bowie-nc-news.herokuapp.com/api/${patchedItem}/${id}`,
    voteUpdate
  );
};
