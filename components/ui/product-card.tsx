"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Currency from "@/components/ui/currency";
import { Product } from "@/types";
import StarRating from "./star-rating";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      data-testid="product-card"
      data-cy-card="product"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          data-cy-info="img"
          src={data?.thumbnail}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
      </div>
      <div>
        <p className="font-semibold text-lg" data-cy-info="title">
          {data?.title}
        </p>
        <p className="text-sm text-gray-500" data-cy-info="category">
          {data?.category}
        </p>
        <StarRating rating={data?.rating} />
      </div>
      <div data-cy-info="price" className="flex items-center justify-between">
        <Currency value={data?.price} />{" "}
        <span
          data-cy-info="percentage"
          className="ml-2 text-sm text-green-600 font-medium bg-green-200 px-2 py-1 rounded-full"
        >
          {`${data?.discountPercentage}% off`}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
