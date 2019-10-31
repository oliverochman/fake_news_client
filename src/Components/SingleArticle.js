import React, { Component } from "react";
import { getSpecificArticle } from '../Modules/ArticlesData'

class SingleArticle extends Component {

  state = {
    article: null
  }

  async componentDidMount() {
    let response = await getSpecificArticle(2)
    if (response.status === 200) {
      this.setState({
        article: response.data
      })
    } else {
      debugger;
      this.props.renderErrorMessage(response)
    }
  }

  render() {

    let singleArticle
    const article = this.state.article
    if (article !== null) {
      singleArticle = (
        <div id="single-article">
          <h1>Test!</h1>
          <p id="article-title">{article.title}</p>
          <p id="article-content">{article.content}</p>
        </div>
      )
    }
    return (
      <>
        {singleArticle}
      </>
    );
  }
};

export default SingleArticle