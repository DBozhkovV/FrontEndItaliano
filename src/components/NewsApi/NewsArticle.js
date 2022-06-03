import React from "react";

function NewsArticle({ data }) {

  function GoTo (){
    var path = data.url;
    window.location.href = path;
    
  }

  return (
    <div className="news">
      <h1 onClick={GoTo}  className="link" >{data.title}</h1>
      <img src={data.urlToImage} className="img"></img>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <a onClick={GoTo}  className="link">Link</a> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;