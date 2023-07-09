import { Product } from "@/types";

const URL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`;

const getProduct = async (id: number): Promise<Product | {}> => {
  try {
    const res = await fetch(`${URL}/${id}`);

    const product = res.json();

    return product;
  } catch (error) {
    return {};
  }
};

export default getProduct;
