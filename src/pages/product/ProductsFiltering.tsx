import React, { useState } from "react";
import Container from "../../components/Container";
import MiniAdBanner from "../../components/MiniAdBanner";
import Space from "../../components/Space";
import BreadcrumbTrail from "../../components/BreadcrumbTrail";
import EmptyState from "../../components/EmptyState";
import Filters from "../../components/Filters/Filters";
import Main from "../../components/Main";
import Products from "../../components/Products/Products";
import SortFilter from "../../components/Filters/SortFilter";
import Center from "../../components/Center";
import Spinner from "../../components/Spinner";
import { FetchResponseType } from "../../services/apiClient";
import { ProductType } from "../../services/product";
import useProducts from "../../hooks/products/useProducts";
import { useProductFilteringContext } from "../../contexts/product-filtering-context";

const ProductsFiltering = () => {
  // Filtering states
  //   const [categoryId, setCategoryId] = useState("");

  const { filteringState } = useProductFilteringContext();

  const { data, isLoading } = useProducts({
    // categoryId: "bbb7b075-1dab-4276-abfb-a03166b561b2",
    categoryId: filteringState.categoryId,
  });

  const products = data as FetchResponseType<ProductType>;

  if (isLoading)
    return (
      <Main>
        <Space spacing="my-14" />
        <Container>
          <MiniAdBanner />
          <Space spacing="my-8" />
          <BreadcrumbTrail />
        </Container>
        <Space spacing="my-8" />
        <Container Aside={<Filters />} twoColLayout>
          <Center>
            <Spinner />
          </Center>
        </Container>
        <Space spacing="my-14" />
      </Main>
    );

  if (products && products.results.length)
    return (
      <Main>
        <Space spacing="my-14" />
        <Container>
          <MiniAdBanner />
          <Space spacing="my-8" />
          <BreadcrumbTrail />
        </Container>
        <Space spacing="my-8" />
        <Container Aside={<Filters />} twoColLayout>
          <SortFilter />
          <Products products={products.results} />
          <Space spacing="my-8" />
        </Container>
        <Space spacing="my-14" />
      </Main>
    );

  // Empty state
  if (products && !products.results.length)
    return (
      <Main>
        <Space spacing="my-14" />
        <Container>
          <MiniAdBanner />
          <Space spacing="my-8" />
          <BreadcrumbTrail />
        </Container>
        <Space spacing="my-8" />
        <Container Aside={<Filters />} twoColLayout>
          <EmptyState />
          <Space spacing="my-8" />
        </Container>
        <Space spacing="my-14" />
      </Main>
    );
};

export default ProductsFiltering;
