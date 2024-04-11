import './Blog.scss';
import { useQuery, gql } from '@apollo/client';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

const BLOGS = gql`
query GetBlogs($slug: String!){
  artykuly(filters:{slug: {eq: $slug}}){
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


const BlogItem = () => {

    const { slug } = useParams();
    const { loading, error, data } = useQuery(BLOGS, {
      variables: { slug: slug },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

  return (
    <>
        <div className="page-blog">
            <div className="container">
                <div className="page-blog-row">
                    <div className="page-blog-content">
                        <div className="page-blog__img">
                            <img src={`http://localhost:1337${data.artykuly.data[0].attributes.Image.data.attributes.url}`} alt="" />
                        </div>
                        <div className="page-blog-right">
                            <div className="page-blog__title">{data.artykuly.data[0].attributes.title}</div>
                            <div className="page-blog__desc">{parse(data.artykuly.data[0].attributes.Description)} </div>
                        </div>
                    </div>
                    <div className="page-blog__text">
                        {parse(data.artykuly.data[0].attributes.Text)}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


export default BlogItem
