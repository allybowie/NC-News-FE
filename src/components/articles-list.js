import ArticleCard from "./article-card";
import React from "react";

const ArticlesList = props => {
  const { articlesList, user, isLoading } = props;
  return (
    <ul className="ArticlesList">
      {isLoading ? (
        <p className="Loading">We're getting your articles...</p>
      ) : (
        articlesList.map((article, i) => {
          const { article_id } = article;
          let listClass;
          if (i % 2 === 0) {
            listClass = "ListItemEven";
          } else listClass = "ListItemOdd";
          return (
            <ArticleCard
              key={article_id}
              article={article}
              listClass={listClass}
              user={user}
            />
          );
        })
      )}
    </ul>
  );
};

export default ArticlesList;
