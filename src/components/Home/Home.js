import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return <div className="text-center">
        <h2>Find a movie to watch tonight</h2>
        <hr />
        <Link to="/movies"></Link>
        {/* <img src={Ticket} alt="movie tickets"></img> */}
    </div>;
};

