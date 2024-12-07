"use client";

import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LocalizedClientLink from "@/lib/LocalizedClientLink";
import CheckoutSummary from "@/components/checkout/templates/CheckoutSummary";
import { ScrollArea } from "@/components/ui/scroll-area";
import CartLines from "@/components/cart/components/CartLines";

const CartPage = () => {
  return (
    <MaxWidthWrapper>
      {/* <MaxWidthWrapper> */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 py-8">
        <ScrollArea className="w-full">
          <div className="flex-1 max-h-[80vh]">
            <CartLines />
          </div>
        </ScrollArea>
        <div className="w-full lg:w-1/3">
          <CheckoutSummary shouldDisplayTaxText shouldDisplayTooltip />
          <LocalizedClientLink href="/checkout?step=address">
            <Button className="w-full mt-4">Go to Checkout</Button>
          </LocalizedClientLink>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CartPage;
