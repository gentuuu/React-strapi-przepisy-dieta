import './DietItems.scss'

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

const DietItems = () => {

    const { loading: Dietloading, error: Dieterror, data: Dietdata } = useQuery(DIET);
    if (Dietloading) return <p>Loading...</p>;
    if (Dieterror) return <p>Error :(</p>;

  return (
    <>
        <div className="diet">
            <div className="container">
                <div className="diet-title"> Polecane kawy </div>
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
    </>
  )
}

export default DietItems


