import './Blog.scss'
import { gql, useQuery } from '@apollo/client'

const BLOGS = gql`
query{
  artykuly{
    data{
      attributes{
        title
        slug
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


const Blog = () => {
    const { loading, error, data } = useQuery(BLOGS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

  return (
    <>
        <div className="article">
            <div className="container">
                <div className="article-title">Artykuły commmon blog</div>
                <div className="article-items">
                    {data.artykuly.data.map(blog =>(
                        <a key={blog.id} className="article-item" href={`/artykuly/${blog.attributes.slug}`}> 
                            <div className="article-item__img">
                                <img src={`http://localhost:1337${blog.attributes.Image.data.attributes.url}`} alt="" />
                            </div>
                            <div className="article-item__title">
                                {blog.attributes.title}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog
