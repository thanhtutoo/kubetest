import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import ProductList from "@/components/ui/product-list";
import ProductsFilter from "@/components/ui/products-filter";
import { getProductsPriceRange } from "@/lib/utils";

const HomePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const products = await getProducts({ limit: 50, skip: 0, ...searchParams });
  const categories = await getCategories();
  const priceRange = getProductsPriceRange(products);
  console.log("products", products);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <ProductsFilter categories={categories} priceRange={priceRange} />
        <ProductList products={products} />
      </div>
    </Container>
  );
};

export default HomePage;
