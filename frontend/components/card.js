import React from "react";
import Link from "next/link";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : process.env.API_URL + article.image.url;
  return (
    // <Link href={{ pathname: "article", query: { id: article.id } }}>
    //   <a className="uk-link-reset">
    //     <div className="uk-card uk-card-muted">
    //       <div className="uk-card-media-top">
    //         <img
    //           src={imageUrl}
    //           alt={article.image.url}
    //           height="100"
    //         />
    //       </div>
    //       <div className="uk-card-body">
    //         <p id="category" className="uk-text-uppercase">
    //           {article.category.name}
    //         </p>
    //         <p id="title" className="uk-text-large">
    //           {article.title}
    //         </p>
    //       </div>
    //     </div>
    //   </a>
    // </Link>
    <div className="col-12 col-md-6 order-md-1">
      <Link href={{ pathname: "article", query: { id: article.id } }}>
        <a className="card-body" href="#!">
          <h3>{`${firstArticles.title}`}</h3>
          <p className="mb-0 text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Fusce pellentesque faucibus lorem at viverra. Integer at feugiat odio. In placerat euismod risus proin erat purus.
                      </p>
        </a>
        <a className="card-meta" href="#!">
          <hr className="card-meta-divider" />
          <div className="avatar avatar-sm mr-2">
            <img src={imageUrl} alt="..." className="avatar-img rounded-circle" />
          </div>
          <h6 className="text-uppercase text-muted mr-2 mb-0">
            Ab Hadley
                      </h6>
          <p className="h6 text-uppercase text-muted mb-0 ml-auto">
            <time dateTime="2019-05-02">May 02</time>
          </p>
        </a>
      </Link>
    </div>
  );
};

export default Card;
