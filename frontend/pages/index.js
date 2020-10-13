import React from "react";
import ListArticles from "../components/index/ListArticles";
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import("../components/index/Banner"), { ssr: false });

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor" /></svg>
        </div>
      </div>
      <section className="mt-n6">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="rounded shadow mb-4">
                <div className="input-group input-group-lg">
                  <div className="input-group-prepend">
                    <span className="input-group-text border-0 pr-1">
                      <i className="fe fe-search"></i>
                    </span>
                  </div>
                  <input type="text" className="form-control border-0 px-1" aria-label="Tìm kiếm bài viết" placeholder="Tìm kiếm bài viết" />
                  <div className="input-group-append">
                    <span className="input-group-text border-0 py-0 pl-1 pr-3">
                      <a className="btn btn-sm btn-primary" href="blog-search.html">
                        Tìm kiếm
                    </a>
                    </span>
                  </div>
                </div>
              </form>
              {/* <div className="row align-items-center">
                <div className="col-auto">
                  <h6 className="font-weight-bold text-uppercase text-muted mb-0">
                    Tags:
                </h6>

                </div>
                <div className="col ml-n5">
                  <a className="badge badge-pill badge-secondary-soft" href="blog-search.html">
                    <span className="h6 text-uppercase">Design</span>
                  </a>
                  <a className="badge badge-pill badge-secondary-soft" href="blog-search.html">
                    <span className="h6 text-uppercase">Product</span>
                  </a>
                  <a className="badge badge-pill badge-secondary-soft" href="blog-search.html">
                    <span className="h6 text-uppercase">UX</span>
                  </a>
                  <a className="badge badge-pill badge-secondary-soft" href="blog-search.html">
                    <span className="h6 text-uppercase">Resources</span>
                  </a>

                </div>
              </div> */}

            </div>
          </div>
        </div>
      </section>

      {/* articles */}
      <ListArticles></ListArticles>

      <section className="py-8 py-md-11 border-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">

              {/* <!-- Preheader --> */}
              <h6 className="text-uppercase text-primary" data-aos="fade-up">
                youtube channel
              </h6>

              {/* <!-- Headin --> */}
              {/* <h1 className="display-1 font-weight-bold" data-aos="fade-up" data-aos-delay="50">
                Banking for Startups.
            </h1> */}

              {/* <!-- Text --> */}
              <p className="lead text-muted mb-6" data-aos="fade-up" data-aos-delay="100">
                Bạn hãy ủng hộ kênh youtube của bọn mình để bọn mình có thêm động lực ra thêm nhiều nội dung hay và hấp dẫn nhé
            </p>

              {/* <!-- Button --> */}
              <p className="mb-7 mb-md-9" data-aos="fade-up" data-aos-delay="150">
                <a className="btn btn-danger shadow lift" href="https://www.youtube.com/channel/UCF061_8xINLPsYHPcBReBFA" target="_blank">
                  CCG youtube channel <i className="fe fe-arrow-right ml-3"></i>
                </a>
              </p>

            </div>
          </div>
          {/* <!-- / .row --> */}
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay="200">

              {/* <!-- Video --> */}
              <div className="embed-responsive embed-responsive-16by9">
                <video className="embed-responsive-item rounded-lg bg-light shadow-lg" src="/valorant-video.mp4" autoPlay loop muted>
                  Sorry, your browser doesn't support embedded videos,
                but don't worry, you can <a href="/valorant-video.mp4">download it</a>
                and watch it with your favorite video player!
              </video>
              </div>

            </div>
          </div>
          {/* <!-- / .row --> */}
        </div>
        {/* <!-- / .container --> */}
      </section>

    </>
  );
};

export default Home;