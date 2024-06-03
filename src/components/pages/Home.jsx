import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NewsBoard from "../pages/NewsBoard";
import { useState } from "react";

function Home() {
    const [category,setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <Footer />
    </div>
  );
}

export default Home;
