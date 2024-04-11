import './RecipeItems.scss'
import { FaChartSimple, FaClock, FaUserLarge  } from "react-icons/fa6";
import { useQuery, gql } from '@apollo/client'

const RECIPES = gql`
query{
  przepisy{
    data{
      id
      attributes{
        title
        slug
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
              text
              slug
              image{
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
    }
  }
}
`


export const RecipeItems = () => {

    const { loading, error, data } = useQuery(RECIPES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
    <>
        <div className="recipe-right">
            <div className="recipe-right-primary">Przepisy</div>
            <div className="recipe-right-items">
                {data.przepisy.data.map(recipe =>(
                    <a key={recipe.id} href={`/przepisy/${recipe.attributes.slug}`} className="recipe-item" >
                    <div className="recipe-item__img">
                        <img src={`http://localhost:1337${recipe.attributes.Image.data.attributes.url}`} alt="" />
                        <div className="recipe-item__category">
                            {recipe.attributes.kategoria.data.map(category => (
                                <div key={category.id} className="recipe-item__category-item">{category.attributes.title}</div>
                            ))}
                        </div>
                        <div className="recipe-item__hover">
                            <div className="recipe-item__hover-items">
                                <div className="recipe-item__hover-item lavel">
                                    <FaChartSimple />
                                    <p>{recipe.attributes.Level}</p>
                                </div>
                                <div className="recipe-item__hover-item time">
                                    <FaClock />
                                    <p>{recipe.attributes.Time}</p>
                                </div>
                                <div className="recipe-item__hover-item person">
                                    <FaUserLarge />
                                    <p>{recipe.attributes.Person} osoby</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-item__title">
                        {recipe.attributes.title}
                    </div>
                </a>
                ))}
                
           
            </div>
        </div>
    </>
    )
}
