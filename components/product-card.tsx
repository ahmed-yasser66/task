import { Love, Loved, Star } from "@/public/icons";
import Image from "next/image";
import SaleBadge from "./sale-badge";

export default function ProductCard({
    sale = false,
    img,
    addedToFav,
}: {
    sale: boolean;
    img: string;
    addedToFav?: boolean;
}) {
    return (
        <div className="w-[172px] lg:w-[288px]">
            <div className="image w-[172px] h-[207px] lg:size-[288px] border border-[#0000000D] rounded-[20px] flex items-end justify-center relative">
                {sale && <SaleBadge />}
                <div className="flex gap-1 lg:gap-2 absolute right-3 top-3 lg:right-4 lg:top-4">
                    <div className="size-8 lg:size-9 rounded-lg p-1.5 lg:p-2 bg-white/30 border border-[#4040401A] flex justify-center items-center">
                        {addedToFav ? (
                            <Image
                                src={"/icons/bag-remove.svg"}
                                width={32}
                                height={32}
                                alt="add to cart"
                                className="size-5 lg:size-8"
                            />
                        ) : (
                            <Image
                                src={"/icons/bag-add.svg"}
                                width={32}
                                height={32}
                                alt="add to cart"
                                className="size-5 lg:size-8"
                            />
                        )}
                    </div>
                    <div className="size-8 lg:size-9 rounded-lg flex items-center justify-center p-1.5 lg:p-2 bg-white/30 border border-[#4040401A]">
                        {addedToFav ? (
                            <Loved
                                width={24}
                                height={24}
                                className={" size-5 lg:size-10"}
                            />
                        ) : (
                            <Love
                                width={24}
                                height={24}
                                className={"text-primary size-5 lg:size-10"}
                            />
                        )}
                    </div>
                </div>
                <Image
                    src={img}
                    alt="product"
                    width={197.60401916503906}
                    height={198}
                    className="-translate-y-2 size-[137px] lg:size-[198px]"
                />
            </div>
            <div className="details mt-3  text-black">
                <div className="row flex justify-between">
                    <span className="font-medium text-xs text-[#545454]">
                        Dresses
                    </span>
                    <p className="text-black font-medium text-xs flex gap-1 items-center">
                        <Star width={16} height={16} />
                        <span>4.5</span>
                        <span className="text-[#545454] text-[10px]">
                            (2910)
                        </span>
                    </p>
                </div>
                <p className="mt-2 text-[10px] lg:text-sm font-medium">
                    J.VER Women's Dress Shirts Solid Long Sleeve Stretch
                    Wrinkle-Free With Yello ..
                </p>
                <div className="row text-black font-medium flex flex-col lg:flex-row gap-y-2 justify-between mt-3">
                    <p className="text-sm lg:text-base">
                        AED 900
                        {sale && (
                            <span className="text-[#8A8A8A] text-xs font-medium line-through">
                               {" "} AED 1300
                            </span>
                        )}
                    </p>
                    <ul className="*:size-5 *:rounded-full flex gap-1">
                        <li className="bg-primary"></li>
                        <li className="bg-[#333333]"></li>
                        <li className="bg-[#E8E8E8]"></li>
                        <li>+2</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
