import './Diet.scss'
import { useQuery, gql } from '@apollo/client'
import parse from 'html-react-parser';


const DIET = gql`
query{
  diety{
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
            }
          }
        }
      }
    }
  }
}
`



const Diets = () => {

    const { loading: Dietloading, error: Dieterror, data: Dietdata } = useQuery(DIET);
    const { loading: Recipeloading, error: Recipeerror, data: Recipedata } = useQuery(RECIPES);
  
    if (Dietloading || Recipeloading) return <p>Loading...</p>;
    if (Dieterror || Recipeerror) return <p>Error :(</p>;

return (
<>
    <div className="page-diet">
        <div className="container">
            <div className="page-diet-content">
                <div className="recipe-left">
                    <div className="recipe-left-primary">Popularne przepisy</div>
                    <div className="recipe-left-items">
                        {Recipedata.przepisy.data.map(recipe =>(
                            <a key={recipe.id} href={`/przepisy/${recipe.attributes.slug}`} className="recipe-left-item">
                                <div className="recipe-left-item__img">
                                    <img src={`http://localhost:1337${recipe.attributes.Image.data.attributes.url}`} alt="" />
                                </div>
                                <div className="recipe-left-item__text">
                                    <div className="recipe-left-item__text-title">{recipe.attributes.title}</div>
                                    <div className="recipe-left-item__text-text">{recipe.attributes.Description.substring(0, 50)}</div>
                                </div>
                            </a>

                        ))}  
                    </div>
                </div>
                <div className="diet-items">
                    {Dietdata.diety.data.map(diet =>(
                    <a key={diet.id} href={`/diety/${diet.attributes.slug}`} className="diet-item"> 
                        <div className="diet-item__img">
                            <img src={`http://localhost:1337${diet.attributes.Image.data.attributes.url}`} alt="" />
                        </div>
                        <div className="diet-item__title">
                            {diet.attributes.title}
                        </div>
                        <div className="diet-item__category">
                            {parse(diet.attributes.Description.substring(0, 50))}
                        </div>
                        <div className="diet-item__btn"><img src="img/arrow-right-recipe.png" alt=""/></div>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default Diets