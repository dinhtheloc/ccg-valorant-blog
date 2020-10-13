import React from "react";
import { useQuery, gql } from '@apollo/client';
import CardRow from '../index/CardRow';
import Card from '../index/Card';
const ARTICLES = gql`
  query GetArticles {
    articles (limit: 5, sort: "created_at:desc") {
        id
        title
        slug
        short_description
        user {
            username,
            avatar {
              url
            }
        }
        image {
            url,
            name
        }
        category {
            name
        }
        published_at
        }
    }
`;

const ListArticles = () => {
    const { loading, error, data } = useQuery(ARTICLES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

console.log('data', data);
    if (data.articles.length === 0){
        return <p>Khong co data...</p>;
    }

    const article = data.articles[0];
    const remainingArticles = data.articles.slice(1, data.articles.length);

    

    return (
        <>
            <CardRow article={article}></CardRow>
            <section className="pt-7 pt-md-10">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-12 col-md">

                            {/* Heading */}
                            <h3 className="mb-0">
                                Latest Stories
                            </h3>

                            {/* Text */}
                            <p className="mb-0 text-muted">
                                Here’s what we've been up to recently.
                            </p>

                        </div>
                        <div className="col-12 col-md-auto">

                            {/* Button */}
                            <a href="#!" className="btn btn-sm btn-outline-gray-300 d-none d-md-inline">
                                View all
                            </a>

                        </div>
                    </div> {/* .row */}
                    <div className="row">
                        { remainingArticles ? remainingArticles.map((i, index)=> {
                            return (
                                <div key={i.id} className="col-12 col-md-6 col-lg-4 d-flex">
                                    <Card article={i} isLasted={index === 3 ? true : false} ></Card>
                                </div>
                            )
                        }) : '123' }
                    </div> {/* .row */}
                </div> {/* .container */}
            </section>

        </>
    );

};

export default ListArticles;