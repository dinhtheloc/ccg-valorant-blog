import { gql, useQuery } from '@apollo/client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from "next/head";
import { useRouter } from 'next/router';
import React from "react";
import Card from '../../components/category/Card';
import Loading from '../../components/loading';
const ARTICLE = gql`
query GetArticle($slug: String!) {
    articles(where: {category: { slug: $slug}}) {
        title
        image {
        url,
        name
        }
        category {
        name
        }
        published_at
        content
        slug
        short_description
        user {
            username,
            avatar {
              url
            }
        }
    }
    categories(where: {slug: $slug}) {
        name
    }
}
`;
const Banner = dynamic(() => import("../../components/post/Banner"), { ssr: false })
const Post = () => {
    const router = useRouter()
    const { slug } = router.query;
    if (!slug) {
        return null;
    }

    const { loading, error, data } = useQuery(ARTICLE, {
        variables: { slug },
    });
    if (loading) return <Loading></Loading>;
    if (error) return <p>Error :(</p>;
    console.log('data', data);
    const { articles } = data;
    const { categories } = data;
    const urlImage = process.env.API_URL;
    const nameCategory = categories[0].name;


    // // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed
    // if (!articleBySlug) {
    //     return (<>
    //         <Head>
    //             <meta name="robots" content="noindex" />
    //         </Head>
    //         <Error statusCode={404} />
    //     </>);
    // }

    return (
        <>
            <Head>
                <title>{nameCategory} Valorant</title>
            </Head>
            <nav className="bg-gray-200">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <ol className="breadcrumb breadcrumb-scroll">
                                <li className="breadcrumb-item">
                                    <Link href={`/`}>
                                        <a className="text-gray-700">
                                            Trang chủ
                                    </a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {nameCategory}
                                </li>
                            </ol>

                        </div>
                    </div> {/*  / .row */}
                </div> {/*  / .container */}
            </nav>

            <section>
                <div className="container mt-6">
                    <div className="row">
                        {articles.map((i, index) => {
                            return (
                                <div key={i.id} className="col-12 col-md-6 mb-6 col-lg-4 d-flex">
                                    <Card article={i} ></Card>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>
        </>);
};

export default Post;

