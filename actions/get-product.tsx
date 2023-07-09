import { Product } from "@/types";

const URL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/products`;
// const LOCAL_URL = `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/v1/products`;

const getProduct = async (id: number): Promise<Product | null> => {
  try {
    const res = await fetch(`${URL}/${id}`);

    const product = res.json();
    return product;
  } catch (error) {
    return null;
  }
};

export default getProduct;
