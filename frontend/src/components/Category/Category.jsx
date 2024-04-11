import { FaChartSimple, FaClock, FaUserLarge } from "react-icons/fa6";
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';


const CATEGORY = gql`
query GetCategory($slug: String!){
  kategorie(filters: { slug: { eq: $slug } }) {
    data {
      id
      attributes {
        title
        slug
        text
        image {
          data {
            attributes {
              url
            }
          }
        }
        przepisy {
          data {
            attributes {
              title
              Text
              slug
              Person
              Time
              Level
              Description
              kategoria{
                data{
                  attributes{
                    title
                  }
                }
              }
              Image {
                data {
                  attributes {
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
`;

const Category = () => {

    const { slug } = useParams();
    const { loading, error, data } = useQuery(CATEGORY, {
      variables: { slug: slug },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( przepisy </p>;

  const recipes = data.kategorie.data[0].attributes.przepisy.data; // Przepisy należące do kategorii

  return (
    <>
        <div className="category-page">
            <div className="container">
                <div className="category-contnet">
                <div className="recipe-right">
        <div className="recipe-right-primary">Przepisy</div>
        <div className="recipe-right-items">
          {recipes.map((recipe) => (
            <a key={recipe.attributes.slug} href={`/przepisy/${recipe.attributes.slug}`} className="recipe-item">
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
              <div className="recipe-item__title">{recipe.attributes.title}</div>
            </a>
          ))}
        </div>
      </div>
                </div>
            </div>
        </div>

    </>
  );
};

export default Category;
