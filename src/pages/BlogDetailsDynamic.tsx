import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBlogPostBySlug, type BlogPost } from '../services/blogService';
import InnerHeader from '../layouts/headers/InnerHeader';
import FooterOne from '../layouts/footers/FooterOne';
import Breadcrumb from '../components/blogs/blog-details/Breadcrumb';

const BlogDetailsDynamic = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        const postData = await getBlogPostBySlug(slug);
        if (postData) {
          setPost(postData);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <>
        <InnerHeader />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <div className="td-breadcrumb-area">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="td-breadcrumb-content text-center">
                        <h2 className="td-breadcrumb-title">Loading...</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <FooterOne style={false} />
          </div>
        </div>
      </>
    );
  }

  if (notFound || !post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <InnerHeader />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb />
            <div className="td-blog-details-area">
              <div className="container-fluid container-1830">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="td-blog-details-thumb fix td-rounded-10">
                      <img
                        data-speed=".9"
                        className="w-100 td-rounded-10"
                        src={post.featured_image || post.thumb}
                        alt={post.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="td-blog-details-content ml-50 mr-60 pt-110 mb-65">
                      <h6 className="td-blog-details-title mb-30">{post.title}</h6>
                      {post.excerpt && (
                        <p className="td-blog-details-text">{post.excerpt}</p>
                      )}
                      {post.content ? (
                        <div
                          className="td-blog-details-text"
                          dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                      ) : (
                        <p className="td-blog-details-text">
                          This blog post doesn't have content yet. Please check back later.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="td-blog-details-tag-wrap d-flex justify-content-between ml-50 mr-60">
                      <div className="td-blog-details-tag mb-10">
                        <ul>
                          <li>
                            <a href="#">
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.3691 9.92961L9.75775 15.5409C9.61238 15.6865 9.43975 15.8019 9.24974 15.8807C9.05972 15.9595 8.85605 16 8.65035 16C8.44466 16 8.24098 15.9595 8.05096 15.8807C7.86095 15.8019 7.68832 15.6865 7.54295 15.5409L0.820312 8.82613V1H8.64644L15.3691 7.72264C15.6606 8.01591 15.8242 8.41262 15.8242 8.82613C15.8242 9.23964 15.6606 9.63634 15.3691 9.92961Z"
                                  stroke="#1C1D1F"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4.73438 4.91321H4.74272"
                                  stroke="#1C1D1F"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {post.tag}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="td-blog-details-share mb-10 ml-10">
                        <span className="dates">{post.date}</span>
                      </div>
                    </div>
                  </div>
                  {post.author_name && (
                    <div className="col-lg-8">
                      <div className="td-blog-details-author-bottom ml-50 mr-60 mt-30">
                        <div className="row">
                          {post.author_image && (
                            <div className="col-lg-4 col-md-4">
                              <div className="td-blog-details-author-bottom-thumb h-100">
                                <img src={post.author_image} alt={post.author_name} />
                              </div>
                            </div>
                          )}
                          <div className={post.author_image ? 'col-lg-8 col-md-8' : 'col-lg-12'}>
                            <div className="td-blog-details-author-bottom-content">
                              <h5 className="mb-15 mt-20">{post.author_name}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
          <FooterOne style={false} />
        </div>
      </div>
    </>
  );
};

export default BlogDetailsDynamic;



