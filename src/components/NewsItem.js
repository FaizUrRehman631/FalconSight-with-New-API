import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl,content, author, date, source } = props;
  return (
    <div className="container my-3">
      <div className="card h-100">
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
          {source}
        </span>
        <img
          src={
            !imageUrl? "https://i.insider.com/671a9caba0a0cc14f223b618?width=1200&format=jpeg":
               imageUrl
          }
          className="card-img-top"
          alt=""
        />
        <div className="card-body d-flex flex-column">
          <h5
            className="card-title "
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 2, // Shows up to 2 lines
            }}
          >
            {title}
          </h5>
          <p
            className="card-text "
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 2, // Shows up to 2 lines
            }}
          >
            {description}
          </p>
          <p
            className="card-text "
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 2, // Shows up to 2 lines
            }}
          >
            {content}
          </p>
          <p className="card-text mt-auto">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Visit page
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
