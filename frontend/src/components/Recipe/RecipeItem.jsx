import './Recipe.scss'
import { FaChartSimple, FaClock, FaUserLarge  } from "react-icons/fa6";
import DietItems from '../common/DietItems/DietItems';
import Blog from '../common/Blog/Blog';
import { RecipeItems } from '../common/RecipeItems/RecipeItems';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';


const RECIPES = gql`
    query GetRecipes($slug: String!) {
        przepisy(filters:{slug: {eq: $slug}}) {
            data{
                id 
                attributes{
                    title
                    slug
                    Text
                    Ingredients
                    Image{
                        data{
                            attributes{
                                url
                            }
                        }
                    }
                    Description
                    Person
                    Time
                    Level
                    kategoria{
                        data{
                            id
                            attributes{
                                title
                            }
                        }
                    }
                }
            }
       
        }
    }

`


const RecipeItem = () => {
    

    const { slug } = useParams();
    const { loading, error, data } = useQuery(RECIPES, {
      variables: { slug: slug },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( przepisy </p>;

  return (
    <>
  
        <div className="page-recipe">
            <div className="container">
                <div className="page-recipe-row">
                    <div className="page-recipe-content">
                        <div className="page-recipe__title">{data.przepisy.data[0].attributes.title}</div>
                        <div className="page-recipe-details">
                            <div className="page-recipe__img">
                                <img src={`http://localhost:1337${data.przepisy.data[0].attributes.Image.data.attributes.url}`} alt="" />
                            </div>
                            <div className="page-recipe__info">
                                <div className="page-recipe-items">
                                    <div className="page-recipe-item lavel">
                                        <FaChartSimple />
                                        <p>{data.przepisy.data[0].attributes.Level}</p>
                                    </div>
                                    <div className="page-recipe-item time">
                                        <FaClock />
                                        <p>{data.przepisy.data[0].attributes.Time}</p>
                                    </div>
                                    <div className="page-recipe-item person">
                                        <FaUserLarge />
                                        <p>{data.przepisy.data[0].attributes.Person} osoby</p>
                                    </div>
                                </div>
                                <div className="page-recipe-ingredients">
                                    <h2>Składniki</h2>
                                    {parse(data.przepisy.data[0].attributes.Ingredients)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-recipe-text">
                            {parse(data.przepisy.data[0].attributes.Text)}
                    </div>
                </div>
                <RecipeItems />
             
            </div>
        </div>
        <DietItems />
        <Blog />
    </>
  )
}

export default RecipeItem
