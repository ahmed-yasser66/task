import { LeftArrow, RightArrow } from "@/public/icons";
import React from "react";
import Container from "./container";
import ProductCard from "./product-card";

export default function Similar() {
    const similarProds = [
        {
            label: "prod1",
            img: "/images/prod1.png",
        },
        {
            label: "prod2",
            img: "/images/prod2.png",
            sale: true,
        },
        {
            label: "prod3",
            img: "/images/prod3.png",
            addedToFav: true,
        },
        {
            label: "prod4",
            img: "/images/prod4.png",
            sale: true,
        },
        {
            label: "prod5",
            img: "/images/prod5.webp",
            sale: true,
        },
    ];
    return (
        <Container className="pe-0!">
            <section className="mt-[61px] lg:mt-[100px]">
                <h3 className="text-black font-semibold lg:text-2xl relative after:absolute after:w-10 after:h-1 after:bg-primary after:left-0 after:-bottom-px">
                    Similar Items
                </h3>
                <div className="products mt-8 flex overflow-clip gap-4 w-full">
                    {similarProds.map((prod) => (
                        <ProductCard
                            img={prod.img}
                            sale={prod.sale || false}
                            key={prod.label}
                            addedToFav={prod.addedToFav}
                        />
                    ))}
                </div>
                <div className="controls mt-8 flex gap-3 justify-center">
                    <span className="size-[50px] bg-blue-50 block rounded-full flex justify-center items-center">
                        <LeftArrow
                            width={24}
                            height={24}
                            className={"text-black"}
                        />
                    </span>
                    <span className="size-[50px] bg-primary block rounded-full flex justify-center items-center">
                        <RightArrow
                            width={24}
                            height={24}
                            className={"text-white"}
                        />
                    </span>
                </div>
            </section>
        </Container>
    );
}
