import React from "react";
import "../App.css";
import { Link } from "@reach/router";

const Sort = props => {
  const { handleOrder, handleSort, sort_by, order, topic } = props;

  return (
    <form className="Sort">
      <label className="SortBy">
        Sort By:
        <select onChange={handleSort} className="SortSelect">
          <option value="created_at">Date</option>
          <option value="votes">Popularity</option>
          <option value="comment_count">Activity</option>
        </select>
      </label>
      <label className="SortOrder">
        Order:
        <select onChange={handleOrder} className="OrderSelect">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      {topic === "" ? (
        <Link to={`/?sort_by=${sort_by}&&order=${order}`} className="SortLink">
          Sort Articles
        </Link>
      ) : (
        <Link
          to={`/articles/topic/${topic}?sort_by=${sort_by}&&order=${order}`}
          className="SortLink"
        >
          Sort Articles
        </Link>
      )}
    </form>
  );
};

export default Sort;
