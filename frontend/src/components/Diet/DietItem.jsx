import './Diet.scss'
import { useQuery, gql } from '@apollo/client'
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';


const DIETS = gql`
    query GetRecipes($slug: String!) {
        diety(filters:{slug: {eq: $slug}}) {
            data{
                id
                attributes{
                    title
                    Description
                    slug
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


const DietItem = () => {

    const { slug } = useParams();
    const { loading, error, data } = useQuery(DIETS, {
      variables: { slug: slug },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

  return (
    <>
        <div className="single-diet">
            <div className="container">
                <div className="single-diet-row">
                <div className="single-diet-content">
                        <div className="single-diet__title">{data.diety.data[0].attributes.title}</div>
                        <div className="single-diet-details">
                            <div className="single-diet__img">
                                <img src={`http://localhost:1337${data.diety.data[0].attributes.Image.data.attributes.url}`} alt="" />
                            </div>
                            <div className="single-diet__info">
                                {parse(data.diety.data[0].attributes.Description)}
                            </div>
                        </div>
                    </div>
                    <div className="single-diet-text">
                            {parse(data.diety.data[0].attributes.Text)}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DietItem
