import { ApolloProvider } from "@apollo/react-hooks";
import Head from 'next/head';
import React from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import withData from "../utils/apollo";

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Trang chủ - Phân tích chia sẻ những điều liên quan đến valorant</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/assets/fonts/Feather/feather.css" />
        <link rel="stylesheet" href="/assets/libs/@fancyapps/fancybox/dist/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/assets/libs/aos/dist/aos.css" />
        <link rel="stylesheet" href="/assets/libs/choices.js/public/assets/styles/choices.min.css" />
        <link rel="stylesheet" href="/assets/libs/flickity-fade/flickity-fade.css" />
        <link rel="stylesheet" href="/assets/libs/flickity/dist/flickity.min.css" />
        <link rel="stylesheet" href="/assets/libs/highlightjs/styles/vs2015.css" />
        <link rel="stylesheet" href="/assets/libs/jarallax/dist/jarallax.css" />
        <link rel="stylesheet" href="/assets/libs/quill/dist/quill.core.css" />
        <link rel="stylesheet" href="/assets/css/theme.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      <script src="/assets/libs/jquery/dist/jquery.min.js"></script>
      <script src="/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/libs/@fancyapps/fancybox/dist/jquery.fancybox.min.js"></script>
      <script src="/assets/libs/aos/dist/aos.js"></script>
      <script src="/assets/libs/choices.js/public/assets/scripts/choices.min.js"></script>
      <script src="/assets/libs/countup.js/dist/countUp.min.js"></script>
      <script src="/assets/libs/dropzone/dist/min/dropzone.min.js"></script>
      <script src="/assets/libs/flickity/dist/flickity.pkgd.min.js"></script>
      <script src="/assets/libs/flickity-fade/flickity-fade.js"></script>
      <script src="/assets/libs/highlightjs/highlight.pack.min.js"></script>
      <script src="/assets/libs/imagesloaded/imagesloaded.pkgd.min.js"></script>
      <script src="/assets/libs/isotope-layout/dist/isotope.pkgd.min.js"></script>
      <script src="/assets/libs/jarallax/dist/jarallax.min.js"></script>
      <script src="/assets/libs/jarallax/dist/jarallax-video.min.js"></script>
      <script src="/assets/libs/jarallax/dist/jarallax-element.min.js"></script>
      <script src="/assets/libs/quill/dist/quill.min.js"></script>
      <script src="/assets/libs/smooth-scroll/dist/smooth-scroll.min.js"></script>
      <script src="/assets/libs/typed.js/lib/typed.min.js"></script>
    </ApolloProvider>
  )
};

// Wraps all components in the tree with the data provider
export default withData(App);