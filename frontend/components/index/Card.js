import React from "react";
import Link from "next/link";
import Moment from "react-moment";
const Cards = ({ article, isLasted }) => {
  const urlImage = process.env.API_URL;
  // console.log(article);
  return (
    <div className={`card mb-6 mb-md-0 shadow-light-lg lift lift-lg ${isLasted ? 'd-lg-none' : ''}`}>
      {/* Image */}
      <Link href={`/post/${encodeURIComponent(article.slug)}`}>
        <a className="card-img-top">
          {/* Image */}
          <img src={`${urlImage}${article.image.url}`} alt="..." className="card-img-top" />
          {/* Shape */}
          <div className="position-relative">
            <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
              <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor"></path></svg>
            </div>
          </div>
        </a>
      </Link>
      {/* Body */}
      <Link href={`/post/${encodeURIComponent(article.slug)}`}>
        <a className="card-body" >
          {/* Heading */}
          <h3>{article.title}</h3>
          {/* Text */}
          <p className="mb-0 text-muted">
            {article.short_description}
          </p>
        </a>
      </Link>
      {/* Meta */}
      <Link href={`/post/${encodeURIComponent(article.slug)}`}>
        <a className="card-meta mt-auto" >
          {/* Divider */}
          <hr className="card-meta-divider" />
          {/* Avatar */}
          <div className="avatar avatar-sm mr-2">
            <img src={`${urlImage}${article.user.avatar.url}`} alt="..." className="avatar-img rounded-circle" />
          </div>
          {/* Author */}
          <h6 className="text-uppercase text-muted mr-2 mb-0">
            {article.user.username}
          </h6>
          {/* Date */}
          <p className="h6 text-uppercase text-muted mb-0 ml-auto">
            <Moment format="DD/MM/YYYY">{article.published_at}</Moment>
          </p>
        </a>
      </Link>
    </div>
  );
};

export default Cards;
