"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

import Currency  from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };


  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  
  return ( 
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        <div className="aspect-square rounded-xl bg-gray-100 relative">
          <Image 
            src={data?.thumbnail} 
            alt=""
            fill
            className="aspect-square object-cover rounded-md"
          />
        </div>
        <div>
          <p className="font-semibold text-lg">{data?.title}</p>
          <p className="text-sm text-gray-500">{data?.category}</p>
        </div>
        <div className="flex items-center justify-between">
          <Currency value={data?.price} />
      </div>
    </div>
  );
}

export default ProductCard;
