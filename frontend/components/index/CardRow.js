import React from "react";
import Link from "next/link";
import Moment from "react-moment";
const CardRow = ({ article }) => {
    const urlImage = process.env.API_URL;
    return (
        <section className="pt-7 pt-md-10">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-row shadow-light-lg mb-6 lift lift-lg">
                            <div className="row no-gutters">
                                <div className="col-12">
                                    <span className="badge badge-pill badge-light badge-float badge-float-inside">
                                        <span className="h6 text-uppercase">{article.category.name}</span>
                                    </span>
                                </div>
                                <Link href={`/post/${encodeURIComponent(article.slug)}`}>
                                    <a className="col-12 col-md-6 order-md-2 bg-cover card-img-right"
                                        style={{
                                            'backgroundImage': `url(${urlImage}${article.image.url})`
                                        }}>
                                        <img src={`${urlImage}${article.image.url}`} alt="..." className="img-fluid d-md-none invisible" />
                                        <div className="shape shape-left shape-fluid-y svg-shim text-white d-none d-md-block">
                                            <svg viewBox="0 0 112 690" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z" fill="currentColor" /></svg>
                                        </div>
                                    </a>
                                </Link>
                                <div className="col-12 col-md-6 order-md-1">
                                    <Link href={`/post/${encodeURIComponent(article.slug)}`}>
                                        <a className="card-body">
                                            <h3>
                                                {article.title}
                                            </h3>
                                            <p className="mb-0 text-muted">
                                                {article.short_description}
                                            </p>
                                        </a>
                                    </Link>
                                    <Link href={`/post/${encodeURIComponent(article.slug)}`}>
                                        <a className="card-meta">
                                            <hr className="card-meta-divider" />
                                            <div className="avatar avatar-sm mr-2">
                                                <img src={`${urlImage}${article.user.avatar.url}`} alt="..." className="avatar-img rounded-circle" />
                                            </div>
                                            <h6 className="text-uppercase text-muted mr-2 mb-0">
                                                {article.user.username}
                                            </h6>
                                            <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                                                <Moment format="DD/MM/YYYY">{article.published_at}</Moment>
                                            </p>

                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default CardRow;