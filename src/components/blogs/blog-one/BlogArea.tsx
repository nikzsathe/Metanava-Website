import { Link } from "react-router-dom"
import { useBlogPosts } from "../../../hooks/useBlogPosts"

const BlogArea = () => {

  const { posts, loading } = useBlogPosts({ page: "blog_1" });

  if (loading) {
    return (
      <div className="td-blog-area pt-140 pb-100">
        <div className="container">
          <div className="text-center">
            <p>Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="td-blog-area pt-140 pb-100">
      <div className="container">
        <div className="row">
          {posts.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
              <div className="td-blog-wrap mb-60">
                <div className="td-blog-thumb fix mb-25">
                  <img className="w-100" src={item.thumb} alt={item.title} />
                </div>
                <div className="td-blog-content">
                  <h3 className="td-blog-title mb-30">
                    <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <div className="td-blog-cetagory d-flex align-items-center">
                    <span className="cetagory">{item.tag}</span>
                    <span className="td-border ml-20 mr-15 d-inline-block"></span>
                    <span className="dates">{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogArea
