import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import { blogData } from "../constant";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "AI: A Must-Have for Modern Businesses",
      description:
        "In today's fast-changing world, businesses need AI to stay ahead, work efficiently, and grow...",
      image: "https://source.unsplash.com/600x400/?technology,ai",
    },
  ];

  return (
    <>
      <WebsiteHeader />
      <div className="min-h-screen bg-gray-100 py-10 px-4 pt-[10rem]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-black">
            Latest Blogs
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[16rem] object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-black">
                    {blog.sections[0].heading}
                  </h2>
                  <p className="text-gray-600 mb-4">{blog.describtion}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-blue-600 hover:underline font-bold"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <WebsiteFooter />
    </>
  );
};

export default Blog;
