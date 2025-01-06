"use client";

import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/utility/MaxWidthWrapper";
import CheckoutSummary from "@/components/checkout/templates/CheckoutSummary";
import CartLines from "@/components/cart/components/CartLines";
import useUserStore from "@/context/useUserStore";
import AuthDialog from "@/components/auth/AuthDialog";
import { useState } from "react";
import useCartStore from "@/context/useCartStore";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { createCheckoutSession } from "./actions";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { currentUser } = useUserStore();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();

  const { cart, cartTotal } = useCartStore();
  const { toast } = useToast();

  const tax = +(cartTotal * 0.13).toFixed(2);
  const shipping = 3.0;
  const total = +(cartTotal + tax + shipping).toFixed(2);

  const { mutate: createPaymentSession } = useMutation({
    mutationKey: ["get-checkout-session"],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) {
        router.push(url);
      } else {
        throw new Error("Unable to retrieve payment URL");
      }
    },
    onError: () => {
      toast({
        title: "Error creating checkout session",
        description: "Please try again later",
        variant: "destructive",
      });
    },
  });

  const handleCheckout = () => {
    if (currentUser) {
      console.log(cart?.id);

      createPaymentSession({
        cartTotal: parseFloat(cartTotal.toFixed(2)),
        cartId: cart!.id,
        images: cart!.items[0].product.images[0],
      });
    } else {
      console.log("Please");
    }
  };

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col lg:flex-row justify-between gap-10 py-8">
        <div className="w-full">
          <div className="flex-1 h-full">
            <CartLines />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <CheckoutSummary
            shouldDisplayTooltip={false}
            tax={tax}
            totalPrice={total}
            shipping={shipping}
            shouldDisplaySummaryText={true}
          />

          {!currentUser ? (
            <div>
              <Button
                onClick={() => setDialogOpen(true)}
                className="w-full mt-4"
              >
                Sign in to Continue
              </Button>
            </div>
          ) : (
            <Button
              disabled={!currentUser}
              onClick={() => handleCheckout()}
              className="w-full mt-4"
            >
              Proceed to Checkout
            </Button>
          )}
          <AuthDialog
            isDialogOpen={isDialogOpen}
            setDialogOpen={setDialogOpen}
            redirectTo="/checkout?step=address"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CartPage;
