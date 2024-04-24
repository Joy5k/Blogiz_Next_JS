import { BlogId } from "@/app/types";
import BlogDetails from "@/components/ui/BlogDetails";



const BlogDetailPage = async ({params}:BlogId) => {
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
        cache:"no-store"
    })
    const blog= await res.json()
    return (
        <div className="my-10">
            <BlogDetails blog={blog}/>
        </div>
    );
};

export default BlogDetailPage;