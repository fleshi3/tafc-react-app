// TEST src/components/List

import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
