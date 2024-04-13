import './RecipeSidebar.scss';
import { gql, useQuery } from '@apollo/client';

const CATEGORY = gql`
  query {
    kategorie {
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
              }
            }
          }
        }
      }
    }
  }
`;

const RecipeSidebar = () => {
  const { loading, error, data } = useQuery(CATEGORY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // Losowo wybierz trzy kategorie spośród dostępnych
  const getRandomCategories = () => {
    const categories = data.kategorie.data;
    const randomCategories = [];
    while (randomCategories.length < 3) {
      const randomIndex = Math.floor(Math.random() * categories.length);
      const randomCategory = categories[randomIndex];
      if (!randomCategories.includes(randomCategory)) {
        randomCategories.push(randomCategory);
      }
    }
    return randomCategories;
  };

  const randomCategories = getRandomCategories();

  return (
    <>
      <div className="recipe-left">
        <div className="recipe-left-primary">Kategorie przepisów</div>
        <div className="recipe-left-items">
          {randomCategories.map(category => (
            <a key={category.id} href={`/kategorie/${category.attributes.slug}`} className="recipe-left-item">
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
  );
};

export default RecipeSidebar;
