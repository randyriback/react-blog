import { Link } from 'react-router-dom'

//props method 1
// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title

//props method 2 below


const BlogList = ({ blogs, title }) => {

    return (
        <div className="bloglist">
        <h1>{ title }</h1>
        {blogs.map((blog) => (  
        <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                   <h2>{ blog.title }</h2>
                   <p>Written by { blog.author }</p>
                </Link>        
        </div>
        ))}  
        </div>
    );
}
 
export default BlogList;