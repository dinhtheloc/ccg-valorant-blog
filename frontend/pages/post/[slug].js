import { useRouter } from 'next/router';
import ReactMarkdown from "react-markdown";
import Error from 'next/error';
import Head from "next/head";
import Moment from "react-moment";
import React from "react";
import { useQuery, gql } from '@apollo/client';
import dynamic from 'next/dynamic';
const ARTICLE = gql`
query GetArticle($slug: String!) {
    articleBySlug(slug: $slug) {
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
        short_description
        user {
            username,
            avatar {
              url
            }
        }
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
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log('data', data);
    const { articleBySlug } = data;
    const urlImage = process.env.API_URL;


    // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed
    if (!articleBySlug) {
        return (<>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <Error statusCode={404} />
        </>);
    }

    articleBySlug.content = articleBySlug.content.replaceAll("/uploads/", "http://localhost:1337/uploads/");

    return (
        <>
            <Banner image={`${urlImage}${articleBySlug.image.url}`}></Banner>
            {/* <!-- HEADER ================================================== --> */}
            <section className="pt-8 pt-md-11">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-9 col-xl-8">

                            {/* <!-- Heading --> */}
                            <h1 className="display-4 text-center">
                                {articleBySlug.title}
                            </h1>

                            {/* <!-- Text --> */}
                            <p className="lead mb-7 text-center text-muted">
                                {articleBySlug.short_description}
                            </p>

                            {/* <!-- Meta --> */}
                            <div className="row align-items-center py-5 border-top border-bottom">
                                <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-lg">
                                        <img src={`${urlImage}${articleBySlug.user.avatar.url}`} alt="avatar" className="avatar-img rounded-circle" />
                                    </div>

                                </div>
                                <div className="col ml-n5">

                                    {/* <!-- Name --> */}
                                    <h6 className="text-uppercase mb-0">
                                        {articleBySlug.user.username}
                                    </h6>
                                    <Moment className="font-size-sm text-muted" format="DD/MM/YYYY">{articleBySlug.published_at}</Moment>

                                </div>
                                <div className="col-auto">

                                    {/* <!-- Share --> */}
                                    <span className="h6 text-uppercase text-muted d-none d-md-inline mr-4">
                                        Share:
                                        </span>
                                    {/* <!-- Icons --> */}
                                    <ul className="d-inline list-unstyled list-inline list-social">
                                        <li className="list-inline-item list-social-item mr-3">
                                            <a href="#!" className="text-decoration-none">
                                                <img src="/facebook.svg" className="list-social-icon" alt="facebook-icon" />
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- / .row --> */}
                </div>
                {/* <!-- / .container --> */}
            </section>

            <section className="pt-6 pt-md-8" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                            <ReactMarkdown source={articleBySlug.content} escapeHtml={false} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-6 pt-md-8 pb-8 pb-md-11">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-9 col-xl-8">

                            {/* <!-- Meta --> */}
                            <div className="row align-items-center py-5 border-top border-bottom">
                                <div className="col-auto">

                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-lg">
                                        <img src={`${urlImage}${articleBySlug.user.avatar.url}`} alt="avatar"
                                            className="avatar-img rounded-circle" />
                                    </div>

                                </div>
                                <div className="col ml-n5">

                                    {/* <!-- Name --> */}
                                    <h6 className="text-uppercase mb-0">
                                        {articleBySlug.user.username}
                                    </h6>

                                    {/* <!-- Date --> */}
                                    <Moment className="font-size-sm text-muted" format="DD/MM/YYYY">{articleBySlug.published_at}</Moment>

                                </div>
                                <div className="col-auto">

                                    {/* <!-- Share --> */}
                                    <span className="h6 text-uppercase text-muted d-none d-md-inline mr-4">
                                        Share:
                                        </span>

                                    {/* <!-- Icons --> */}
                                    <ul className="d-inline list-unstyled list-inline list-social">
                                        <li className="list-inline-item list-social-item mr-3">
                                            <a href="#!" className="text-decoration-none">
                                                <img src="/facebook.svg" className="list-social-icon" alt="facebook-icon" />
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- / .row --> */}
                </div>
                {/* <!-- / .container --> */}
            </section>
        </>);
};

export default Post;