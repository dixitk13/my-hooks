import * as React from "react";

export const Home = () => {
  return (
    <>
      <p>contains some hooks which have been either:</p>
      <ul className="home-links">
        <li>
          inspired from{" "}
          <a href="https://usehooks.com/" rel="noopener noreferrer">
            usehooks
          </a>
        </li>
        <li>i've created or used in other projects</li>
        <li>
          or learnt from{" "}
          <a href="https://overreacted.io" rel="noopener noreferrer">
            dan's blog
          </a>
        </li>
        <li>or stackoverflow ;)</li>
      </ul>
    </>
  );
};
