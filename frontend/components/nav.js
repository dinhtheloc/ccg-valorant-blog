import React from "react";
import Link from "next/link";
import { useQuery, gql } from '@apollo/client';
const CATEGORY = gql`
query GetCategory {
  categories (sort: "id:asc") {
      id
        name
        slug
    }
}
`;

const Nav = () => {

  const { loading, error, data } = useQuery(CATEGORY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { categories } = data;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
      <Link href={`/`}>
        <a className="navbar-brand">
          <img src="/logo.svg" className="navbar-brand-img" alt="logo" />
        </a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fe fe-x"></i>
          </button>
          <ul className="navbar-nav ml-auto">
            {categories.map((category, i) => {
              return (
                <li key={category.id} className="nav-item">
                  <Link href={`/category/${encodeURIComponent(category.slug)}`}>
                    <a className="nav-link">
                      {category.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <a className="navbar-btn btn btn-sm btn-danger lift ml-auto" href="https://www.youtube.com/channel/UCF061_8xINLPsYHPcBReBFA" target="_blank">
            CCG youtube channel
        </a>
        </div>

      </div>
    </nav>

  );
};

export default Nav;