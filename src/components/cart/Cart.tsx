"use client";

import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet";
import { buttonVariants } from "../ui/button";
import useStore from "@/context/useStore";
import CartLine from "./CartLine";
import LocalizedClientLink from "@/lib/LocalizedClientLink";
import { useFormatPrice } from "@/lib/utils";

const Cart: React.FC = () => {
  const { allProducts } = useStore();
  const { formatPrice } = useFormatPrice();
  const cartTotal = useStore((state) => state.cartTotal);
  const cartItemsFromStore = useStore((state) => state.cartItems);
  const itemCount = useStore((state) => state.cartItemsCount);

  return (
    <Sheet>
      <SheetTrigger className="group flex items-center ">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-primary group-hover:text-muted-foreground z-50"
        />
        <span className=" ml-2 text-sm font-medium text-muted-foreground group-hover:text-muted-foreground">
          {itemCount}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg z-[1000000] h-full">
        <div className="flex-grow flex flex-col pr-6 overflow-y-auto">
          {itemCount > 0 ? (
            <>
              <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                <ul className="flex-grow overflow-auto py-4">
                  {cartItemsFromStore.map((item, i) => {
                    const product = allProducts.find(
                      (p) => p.id === item.productId
                    );

                    return product ? (
                      <CartLine
                        product={product}
                        quantity={item.quantity!}
                        selectedSize={item.selectedSize}
                        selectedColor={item.selectedColor}
                        key={i}
                      />
                    ) : null;
                  })}
                </ul>
                <div className="py-4 text-md text-primary">
                  <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1">
                    <p>Total</p>
                    <p className="flex justify-end space-y-2 text-right text-sm">
                      {formatPrice(cartTotal)}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div
                aria-hidden="true"
                className="relative mb-4 h-60 w-60 text-primary"
              >
                <ShoppingBag className="relative mb-4 h-60 w-60" />
              </div>
              <div className="text-xl font-semibold">Your cart is empty</div>
              <SheetTrigger asChild>
                <LocalizedClientLink
                  href="/products"
                  className={buttonVariants({
                    variant: "link",
                    size: "default",
                    className: "text-sm text-secondary-foreground",
                  })}
                >
                  Add items to your cart to checkout
                </LocalizedClientLink>
              </SheetTrigger>
            </div>
          )}
        </div>
        {itemCount > 0 && (
          <div className="pr-6">
            <SheetFooter>
              <div className="w-full">
                <SheetTrigger asChild>
                  <LocalizedClientLink
                    href="/cart"
                    className={buttonVariants({
                      variant: "default",
                      size: "default",
                      className: "w-full",
                    })}
                  >
                    View Cart ({itemCount})
                  </LocalizedClientLink>
                </SheetTrigger>
              </div>
            </SheetFooter>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
