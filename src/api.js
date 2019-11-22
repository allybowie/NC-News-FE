import axios from 'axios';
// import React from 'react';

export const getArticles = (params) => {
    return axios.get('https://bowie-nc-news.herokuapp.com/api/articles', {params})
    .then(({data}) => {

        return data.articles
    })
  }

export const deleteComment = comment_id => {
    return axios.delete(`https://bowie-nc-news.herokuapp.com/api/comments/${comment_id}`)
}