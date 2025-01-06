"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OrderItem, Order, Product, Variant } from "@prisma/client";
import OrderCard from "../order-card";
import { Separator } from "@/components/ui/separator";

interface IOrderItem extends OrderItem {
    product: Product;
    variant: Variant;
}
export interface IOrder extends Order {
    OrderItem: IOrderItem[];
}

const OrderOverview = ({ orders }: { orders: IOrder[] }) => {
    if (orders?.length) {
        return (
            <div className="flex flex-col gap-y-8 w-full">
                {orders.map((o) => (
                    <div key={o.id} className="pb-2 last:pb-0 last:border-none">
                        <OrderCard order={o} />
                        <Separator />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div
            className="w-full flex flex-col items-center gap-y-4"
            data-testid="no-orders-container"
        >
            <h2 className="text-large-semi">Nothing to see here</h2>
            <p className="text-base-regular">
                You don&apos;t have any orders yet, let us change that {":)"}
            </p>
            <div className="mt-4">
                <Link href="/" passHref>
                    <Button data-testid="continue-shopping-button">
                        Continue shopping
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default OrderOverview;
