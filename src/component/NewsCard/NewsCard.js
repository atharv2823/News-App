import React from "react";
import "./NewsCard.css";
import readMore from "./right-arrow.png";


function NewsCard({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
}) {
  return (
    <>
      <div className="news-container">
        <img className="news-img" src={urlToImage} alt="image" />


        <div className="news-info-container">

          <div className="info">
          <h2 className="news-info">{author}</h2>
          <p className="news-info">{publishedAt}</p>
          </div>


          <h4 className="news-info">{title}</h4>
          <p className="news-info">{description}</p>
        </div>
        <div>
          <a href={url} className="news-url">
            <img
              className="read-more-image"
              src={readMore}
              alt="read-more-image"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
