import BlogList from './bloglist'
import useFetch from './useFetch'

// npx json-server --watch db.json --port 8000

const Home = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            { error && <div>Sorry, can't find: { error }</div>}
            { isPending && <div>One moment please...</div>}
            { !isPending && <BlogList blogs={ data } title="All Blogs"/>} 
        </div>
    );
}
 
export default Home;