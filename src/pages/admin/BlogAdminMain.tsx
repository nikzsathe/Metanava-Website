import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import BlogPostForm from '../../components/admin/BlogPostForm';
import { getAllBlogPosts, deleteBlogPost, type BlogPost } from '../../services/blogService';
import InnerHeader from '../../layouts/headers/InnerHeader';
import FooterOne from '../../layouts/footers/FooterOne';

const BlogAdminMain = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | undefined>();
  const [selectedPage, setSelectedPage] = useState<string>('all');

  useEffect(() => {
    loadPosts();
  }, [selectedPage]);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const pageFilter = selectedPage === 'all' ? undefined : selectedPage;
      const data = await getAllBlogPosts(pageFilter, false); // Get all posts including unpublished
      setPosts(data);
    } catch (error) {
      console.error('Error loading posts:', error);
      toast.error('Failed to load blog posts', { position: 'top-center' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
      return;
    }

    try {
      await deleteBlogPost(id);
      toast.success('Blog post deleted successfully', { position: 'top-center' });
      loadPosts();
    } catch (error: any) {
      console.error('Error deleting post:', error);
      toast.error(error?.message || 'Failed to delete blog post', { position: 'top-center' });
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingPost(undefined);
    loadPosts();
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingPost(undefined);
  };

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
                      <h2 className="td-breadcrumb-title">Blog Admin</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="td-blog-admin-area pt-100 pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="admin-header mb-40">
                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                        <h3>Blog Posts Management</h3>
                        <div className="d-flex gap-3 flex-wrap">
                          <select
                            className="td-input"
                            style={{ width: 'auto', minWidth: '150px' }}
                            value={selectedPage}
                            onChange={(e) => setSelectedPage(e.target.value)}
                          >
                            <option value="all">All Pages</option>
                            <option value="blog_1">Blog 1</option>
                            <option value="home_1">Home 1</option>
                            <option value="home_4">Home 4</option>
                            <option value="home_7">Home 7</option>
                          </select>
                          {!showForm && (
                            <button
                              className="td-btn td-btn-primary"
                              onClick={() => {
                                setShowForm(true);
                                setEditingPost(undefined);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                            >
                              + Create New Post
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {showForm && (
                      <div className="admin-form-section mb-60">
                        <div className="card p-4">
                          <div className="d-flex justify-content-between align-items-center mb-30">
                            <h4>{editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}</h4>
                            <button className="td-btn td-btn-border" onClick={handleCancel}>
                              Cancel
                            </button>
                          </div>
                          <BlogPostForm existingPost={editingPost} onSuccess={handleFormSuccess} />
                        </div>
                      </div>
                    )}

                    <div className="admin-posts-list">
                      {loading ? (
                        <div className="text-center py-5">
                          <p>Loading blog posts...</p>
                        </div>
                      ) : posts.length === 0 ? (
                        <div className="text-center py-5">
                          <p>No blog posts found. Create your first post!</p>
                        </div>
                      ) : (
                        <div className="table-responsive">
                          <table className="admin-table">
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Tag</th>
                                <th>Date</th>
                                <th>Page</th>
                                <th>Status</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {posts.map((post) => (
                                <tr key={post.id}>
                                  <td>
                                    <strong>{post.title}</strong>
                                    <br />
                                    <small className="text-muted">/{post.slug}</small>
                                  </td>
                                  <td>{post.tag}</td>
                                  <td>{post.date}</td>
                                  <td>{post.page}</td>
                                  <td>
                                    <span
                                      className={`badge ${post.published ? 'badge-success' : 'badge-warning'}`}
                                    >
                                      {post.published ? 'Published' : 'Draft'}
                                    </span>
                                  </td>
                                  <td>
                                    <div className="admin-actions">
                                      <button
                                        className="btn-sm btn-edit"
                                        onClick={() => handleEdit(post)}
                                      >
                                        Edit
                                      </button>
                                      <button
                                        className="btn-sm btn-delete"
                                        onClick={() => handleDelete(post.id, post.title)}
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
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
};

export default BlogAdminMain;

