import { Blog, BlogId } from "@/app/types";
import BlogDetails from "@/components/ui/BlogDetails";

export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:5000/blogs`, {
    cache: "no-store",
  });
  const blogs = await res.json();
  return blogs.slice(0, 2).map((blog: Blog) => ({ blogId: blog.id }));
};

const BlogDetailPage = async ({ params }: BlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  return (
    <div className="my-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailPage;
