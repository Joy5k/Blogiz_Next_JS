"use client`"

import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "../types";
import { useGetBlogsQuery } from "@/redux/api/baseApi";

const BlogsPage = async () => {
    // const res = await fetch("http://localhost:5000/blogs",{
    //     cache:"no-store"
    // })
    // const blogs=await res.json()
  const { data:blogs, isLoading, isError, error } = useGetBlogsQuery("")
  
  return (
    <div className="w-[90%] mx-auto ">
      <h1 className="text-4xl text-center my-5">
       All Blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="mx-auto w-2/4 text-xl text-center text-gray-400">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
          </p>
          <div className="grid grid-cols-3 gap-4 my-5">
              {
                  blogs.map((blog:Blog)=>(<BlogCard  key={blog.id} blog={blog}></BlogCard>))
              }
          </div>
    </div>
  );
};

export default BlogsPage;
