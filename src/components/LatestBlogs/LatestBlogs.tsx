import { Blog } from "@/app/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({blogs}:{blogs:Blog[]}) => {
        return (
        <div className="w-[90%] mx-auto">
            <h1 className="text-4xl text-center my-5">The Latest Blogs from <span className="text-accent">Blogiz</span></h1>
        <p className="mx-auto w-2/4 text-xl text-center text-gray-400">
            <i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i>
                
                </p>
                <div className="grid grid-cols-2 gap-4 my-5">
                    {
                        blogs.slice(0,2).map((blog)=>(<LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>))
                    }
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {
                        blogs.slice(2,5).map((blog)=>(<BlogCard key={blog.id} blog={blog}></BlogCard>))
                    }
                </div>
        </div>
    );
};

export default LatestBlogs;