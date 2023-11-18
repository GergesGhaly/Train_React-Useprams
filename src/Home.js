import React from "react";
import Card from "./Card";
import Nodata from "./Nodata";

function Home({ names, Removhandel, search, admin, setSearch }) {
  return (
    <div className="warper">
      <input
        type="text"
        placeholder="Search...."
        className="ipt"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      {names.length > 0 ? (
        names
          .filter((value) => value.namee.toLowerCase().includes(search))
          .map((el, id) => (
            <Card el={el} key={id} Removhandel={Removhandel} admin={admin} />
          ))
      ) : (
        <Nodata />
      )}
    </div>
  );
}

export default Home;
