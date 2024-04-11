import './RecipeSidebar.scss'
import { gql, useQuery } from '@apollo/client';

const CATEGORY = gql`
query{
  kategorie{
    data{
      id
      attributes{
        title
        slug
        text
        image{
          data{
            attributes{
              url
            }
          }
        }
        przepisy{
          data{
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

const RecipeSidebar = () => {

    const { loading, error, data } = useQuery(CATEGORY);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

  return (
    <>
        <div className="recipe-left">
           <div className="recipe-left-primary">Kategorie</div>
           <div className="recipe-left-items">
           {data.kategorie.data.map(category =>(
                <a key={category.id} href={`/kategorie/${category.attributes.slug}`} className="recipe-left-item" >
                    <div className="recipe-left-item__img">
                        <img src={`http://localhost:1337${category.attributes.image.data.attributes.url}`} alt="" />
                    </div>
                    <div className="recipe-left-item__text">
                        <div className="recipe-left-item__text-title">{category.attributes.title}</div>
                        <div className="recipe-left-item__text-text">{category.attributes.text.substring(0, 50)}</div>
                    </div>
                </a>
           ))}
                
           </div>
       </div>
    </>
  )
}

export default RecipeSidebar
