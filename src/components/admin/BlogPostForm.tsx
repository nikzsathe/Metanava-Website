import { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createBlogPost, updateBlogPost, generateSlug, type BlogPostFormData, type BlogPost } from '../../services/blogService';

interface BlogPostFormProps {
  existingPost?: BlogPost;
  onSuccess?: () => void;
}

const schema = yup.object({
  title: yup.string().required('Title is required').min(10, 'Title must be at least 10 characters'),
  slug: yup.string().required('Slug is required'),
  thumb: yup.string().url('Must be a valid URL').required('Thumbnail URL is required'),
  tag: yup.string().required('Tag is required'),
  date: yup.string().required('Date is required'),
  page: yup.string().required('Page is required'),
  excerpt: yup.string(),
  content: yup.string(),
  featured_image: yup.string().url('Must be a valid URL'),
  author_name: yup.string(),
  author_image: yup.string().url('Must be a valid URL'),
  published: yup.boolean(),
});

const BlogPostForm = ({ existingPost, onSuccess }: BlogPostFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [autoGenerateSlug, setAutoGenerateSlug] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<BlogPostFormData & { published: boolean }>({
    resolver: yupResolver(schema) as any,
    defaultValues: existingPost
      ? {
          title: existingPost.title,
          slug: existingPost.slug,
          thumb: existingPost.thumb,
          tag: existingPost.tag,
          date: existingPost.date,
          page: existingPost.page,
          excerpt: existingPost.excerpt || '',
          content: existingPost.content || '',
          featured_image: existingPost.featured_image || '',
          author_name: existingPost.author_name || '',
          author_image: existingPost.author_image || '',
          published: existingPost.published ?? true,
        }
      : {
          page: 'blog_1',
          published: true,
        },
  });

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    if (autoGenerateSlug && !existingPost) {
      setValue('slug', generateSlug(title));
    }
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const postData: BlogPostFormData = {
        title: data.title,
        slug: data.slug,
        thumb: data.thumb,
        tag: data.tag,
        date: data.date,
        page: data.page,
        excerpt: data.excerpt,
        content: data.content,
        featured_image: data.featured_image,
        author_name: data.author_name,
        author_image: data.author_image,
        published: data.published,
      };

      if (existingPost) {
        await updateBlogPost(existingPost.id, postData);
        toast.success('Blog post updated successfully!', { position: 'top-center' });
      } else {
        await createBlogPost(postData);
        toast.success('Blog post created successfully!', { position: 'top-center' });
        reset();
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      console.error('Error saving blog post:', error);
      toast.error(error?.message || 'Failed to save blog post. Please try again.', {
        position: 'top-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="admin-blog-form">
      <div className="row">
        <div className="col-12 mb-25">
          <label htmlFor="title">
            Title <span className="required">*</span>
          </label>
          <input
            {...register('title')}
            className="td-input"
            id="title"
            type="text"
            onChange={handleTitleChange}
          />
          <p className="form_error">{errors.title?.message}</p>
        </div>

        <div className="col-md-8 mb-25">
          <label htmlFor="slug">
            Slug <span className="required">*</span>
            <small className="ml-10">(URL-friendly version)</small>
          </label>
          <input {...register('slug')} className="td-input" id="slug" type="text" />
          <p className="form_error">{errors.slug?.message}</p>
        </div>

        <div className="col-md-4 mb-25">
          <label htmlFor="auto-slug" className="checkbox-label">
            <input
              type="checkbox"
              id="auto-slug"
              checked={autoGenerateSlug}
              onChange={(e) => setAutoGenerateSlug(e.target.checked)}
              disabled={!!existingPost}
            />
            Auto-generate slug
          </label>
        </div>

        <div className="col-md-6 mb-25">
          <label htmlFor="thumb">
            Thumbnail URL <span className="required">*</span>
          </label>
          <input {...register('thumb')} className="td-input" id="thumb" type="url" />
          <p className="form_error">{errors.thumb?.message}</p>
        </div>

        <div className="col-md-6 mb-25">
          <label htmlFor="tag">
            Tag/Category <span className="required">*</span>
          </label>
          <input {...register('tag')} className="td-input" id="tag" type="text" />
          <p className="form_error">{errors.tag?.message}</p>
        </div>

        <div className="col-md-6 mb-25">
          <label htmlFor="date">
            Date <span className="required">*</span>
            <small className="ml-10">(e.g., "August 12, 2024")</small>
          </label>
          <input {...register('date')} className="td-input" id="date" type="text" />
          <p className="form_error">{errors.date?.message}</p>
        </div>

        <div className="col-md-6 mb-25">
          <label htmlFor="page">
            Page <span className="required">*</span>
            <small className="ml-10">(blog_1, home_1, etc.)</small>
          </label>
          <select {...register('page')} className="td-input" id="page">
            <option value="blog_1">Blog 1</option>
            <option value="home_1">Home 1</option>
            <option value="home_4">Home 4</option>
            <option value="home_7">Home 7</option>
          </select>
          <p className="form_error">{errors.page?.message}</p>
        </div>

        <div className="col-12 mb-25">
          <label htmlFor="excerpt">Excerpt</label>
          <textarea
            {...register('excerpt')}
            className="td-input"
            id="excerpt"
            rows={3}
            placeholder="Short description of the blog post"
          />
        </div>

        <div className="col-12 mb-25">
          <label htmlFor="content">Full Content (HTML supported)</label>
          <textarea
            {...register('content')}
            className="td-input"
            id="content"
            rows={15}
            placeholder="Write your blog post content here. HTML is supported."
          />
          <small>You can use HTML tags for formatting</small>
        </div>

        <div className="col-md-6 mb-25">
          <label htmlFor="featured_image">Featured Image URL</label>
          <input {...register('featured_image')} className="td-input" id="featured_image" type="url" />
          <p className="form_error">{errors.featured_image?.message}</p>
        </div>

        <div className="col-md-6 mb-25">
          <label htmlFor="author_name">Author Name</label>
          <input {...register('author_name')} className="td-input" id="author_name" type="text" />
        </div>

        <div className="col-md-6 mb-25">
          <label htmlFor="author_image">Author Image URL</label>
          <input {...register('author_image')} className="td-input" id="author_image" type="url" />
          <p className="form_error">{errors.author_image?.message}</p>
        </div>

        <div className="col-md-6 mb-25">
          <label htmlFor="published" className="checkbox-label">
            <input {...register('published')} id="published" type="checkbox" />
            Publish immediately
          </label>
        </div>

        <div className="col-12">
          <button type="submit" className="td-btn-group" disabled={isSubmitting}>
            <span className="td-btn-circle">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
            <span className="td-btn-2 td-btn-primary">
              {isSubmitting
                ? 'Saving...'
                : existingPost
                ? 'Update Blog Post'
                : 'Create Blog Post'}
            </span>
            <span className="td-btn-circle">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default BlogPostForm;

