import React from "react";
import { blogData } from "../constant";
import WebsiteFooter from "../components/website/WebsiteFooter";
import WebsiteHeader from "../components/website/WebsiteHeader";

const BlogPage = () => {
  const blog = blogData[0];
  return (
    <>
      <WebsiteHeader />
      <div className="wrapper py-12">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>

        {/* Blog Images */}
        <div className="flex flex-col gap-4 mb-6">
          <img
            src={blog.image}
            alt={`AI Business`}
            className="w-full max-h-[60vh] rounded-lg shadow-lg"
          />
          {/* {blog.images.map((image, index) => (
        ))} */}
          <h2 className="text-2xl font-semibold">{blog.title}</h2>
          <p className="py-2 text-lg">{blog.describtion}</p>
        </div>

        {/* Blog Sections */}
        <div className="space-y-8">
          {blog.sections.map((section, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-3 text-black">
                {section.heading}
              </h2>
              {section.imagetwo && (
                <div className="rounded-2xl bg-black w-fit">
                  <img
                    src={section.imagetwo}
                    alt="blog-image"
                    className="max-h-[50vh]  my-5 rounded-lg "
                  />
                </div>
              )}
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
      <WebsiteFooter />
    </>
  );
};

export default BlogPage;
