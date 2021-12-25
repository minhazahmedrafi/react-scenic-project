import React from "react";
import BlogPost from "../../components/blogpost/BlogPost";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./blogs.scss";

const Blogs = () => {
  return (
    <>
      <div className="blogs">
        <Header
          path="#blogPost"
          hContent="BLOGS"
          pContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veritatis dolorem ipsa assumenda?"
        />
        <BlogPost />
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
