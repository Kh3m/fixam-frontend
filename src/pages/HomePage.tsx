import Banner from "../components/Banner";
import Categories from "../components/Categories/Categories";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import FeaturedProducts from "../components/FeaturedProducts";
import Main from "../components/Main";

import Partners from "../components/Partners";
import Space from "../components/Space";
import useCategories from "../hooks/category/useCategories";
import { FetchResponseType } from "../services/apiClient";
import { CategoryType } from "../services/category";
import { getMainCategory } from "../utils/category";

function HomePage() {
  const { data: categories, isLoading } = useCategories();

  let mainCat: CategoryType[] = [];

  if (categories) {
    mainCat = getMainCategory(categories as FetchResponseType<CategoryType>);
  }

  return (
    <Main>
      <Banner
        heading="High Quality Materials"
        description="At Fixam, we procure our merchandise from reputable producers,
            guaranteeing robustness and dependability with each acquisition."
        bannerURL="https://s3-alpha-sig.figma.com/img/8c28/35b0/6ca63cff2ec598ec252fe7cea1c7036a?Expires=1702857600&Signature=PkxkO9yMdC~8E3HuUXsYHQfQCzelDyi5Q4Iosd7CkVAB1NmJWRN7cwArUfo9FhPVqStzxr7tUObSV13Z92cUq3ncAgemOPhpKScF49es7Phyi9v1pNYlwnMRy9f5kBsuq8ksFWWbIdnklmuc~fros~Fou~XBIW2KyfHpljFhdfB5ydYDCqU~85MsitAsQW0G-nyxps1pGeSCcoRdfLkIJqWeoN7T2UqEy1f0qV5liYtaFDvHl3oLmRnD4pyRiOs9Qu4pZxgTM5X5-jlJXyqbFjGOklqhBOP3smxPgD7qjpcBxz9Hxrjbq8wJ1BJ2L6ZgjXKQkuaHhUJNr-stMlWjRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
      <Space spacing="my-14" />
      {categories && !isLoading && (
        <Container Aside={<Categories categories={categories} />} twoColLayout>
          {categories &&
            mainCat.length &&
            mainCat.map((cat) => (
              <FeaturedProducts
                key={cat.id}
                title={cat.name}
                to={`/${cat.name.toLocaleLowerCase()}`}
                categoryId={cat.id}
              />
            ))}
        </Container>
      )}
      <Space spacing="my-14" />
      <Partners />
    </Main>
  );
}

export default HomePage;
