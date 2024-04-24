import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "../types";

const BlogsPage = async () => {
    const res = await fetch("http://localhost:5000/blogs")
    const blogs=await res.json()

  return (
    <div>
      <h1 className="text-4xl text-center my-5">
       All Blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="mx-auto w-2/4 text-xl text-center text-gray-400">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
          </p>
          <div className="grid grid-cols-3 gap-4">
              {
                  blogs.map((blog:Blog)=>(<BlogCard  key={blog.id} blog={blog}></BlogCard>))
              }
          </div>
    </div>
  );
};

export default BlogsPage;