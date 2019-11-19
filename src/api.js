import axios from 'axios';
// import React from 'react';

const getArticles = (params) => {
    return axios.get('http://bowie-nc-news.herokuapp.com/api/articles', {params})
    .then(({data}) => {
        return data.articles
    })
  }

  export default getArticles