import './Blogs.scss'
import { gql, useQuery } from '@apollo/client'

const BLOGS = gql`
query{
  artykuly{
    data{
      attributes{
        title
        Slug
        Description
		Text
        Image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}

`

const Blogs = () => {

    const { loading, error, data } = useQuery(BLOGS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


  return (
    <>
        <div className="page-blogs">
            <div className="container">
                <div className="page-blogs-content">
                    <div className="page-blogs-items">
                        {data.artykuly.data.map(blog =>(
                            <a key={blog.id} className="page-blogs-item" href={`/bogs/${blog.id}`}> 
                                <div className="page-blogs-item__img">
                                    <img src={`http://localhost:1337${blog.attributes.Image.data.attributes.url}`} alt="" />
                                </div>
                                <div className="page-blogs-item-row">
                                    <div className="page-blogs-item__title">
                                        {blog.attributes.title}
                                    </div>
                                    <div className="page-blogs-item__text">{blog.attributes.Description}</div>
                                </div>  
                            </a>
                        ))}     
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blogs
