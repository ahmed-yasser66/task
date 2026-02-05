import { LeftArrow, Love, RightArrow } from "@/public/icons";
import Container from "./container";
import Image from "next/image";
import Pill from "./pill";
import SelectInput from "./select";

export default function ProductDetails() {
    return (
        <Container>
            <section className="product mt-4 lg:mt-10  flex flex-col lg:flex-row gap-7">
                <div className="product_images flex flex-col gap-2">
                    <div className="main-image relative xl:w-[524px] max-w-full bg-gray rounded-3xl overflow-hidden pt-[51px]">
                        {/* INDICATORS */}
                        <div className="indicators absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-transparent h-[73px]">
                            <div className="mt-4 mx-4 flex gap-1">
                                <span className="bg-[#D4D4D4] w-1/4 h-1 block"></span>
                                <span className="bg-white w-1/4 h-1 block"></span>
                                <span className="bg-[#D4D4D4] w-1/4 h-1 block"></span>
                                <span className="bg-[#D4D4D4] w-1/4 h-1 block"></span>
                            </div>
                        </div>
                        {/* ARROWS */}
                        <div className="absolute size-12 bg-[#C4C4C4] flex items-center justify-center top-1/2 -translate-y-1/2 left-3 lg:left-5 rounded-[38px]">
                            <LeftArrow width={20} height={20} />
                        </div>
                        <div className="absolute size-12 bg-primary flex items-center justify-center top-1/2 -translate-y-1/2 right-3 lg:right-5 rounded-[38px]">
                            <RightArrow width={20} height={20} />
                        </div>
                        <Image
                            src={"/images/main.png"}
                            alt="product-image-1"
                            width={0}
                            height={0}
                            sizes="auto"
                            className="h-[514px] w-[305px] object-contain mx-auto"
                        />
                    </div>
                    <div className="other-images *:bg-gray xl:w-[524px] max-w-full *:px-4 *:py-5 flex gap-2 *:rounded-3xl">
                        <div>
                            <Image
                                src={"/images/1.png"}
                                alt="image"
                                width={142}
                                height={142}
                                sizes="auto"
                                className="w-full object-contain"
                            />
                        </div>
                        <div>
                            <Image
                                src={"/images/2.png"}
                                alt="image"
                                width={142}
                                height={142}
                                sizes="auto"
                                className="w-full object-contain"
                            />
                        </div>
                        <div className="relative overflow-clip">
                            <div className="overlay bg-black/70 inset-0 absolute"></div>
                            <p
                                className="text-white text-[32px] font-semibold absolute left-1/2
                             top-1/2 -translate-1/2"
                            >
                                +2
                            </p>
                            <Image
                                src={"/images/3.png"}
                                alt="image"
                                width={142}
                                height={142}
                                sizes="auto"
                                className="w-full object-contain"
                            />
                        </div>
                    </div>
                    <Image
                        src={"/icons/water-mark.svg"}
                        alt="watermark"
                        width={98}
                        height={57.0976448059082}
                        className="-translate-4 -z-10 hidden lg:block"
                    />
                </div>
                <div className="product_details flex-1">
                    <div className="row flex items-end justify-between w-full">
                        <Pill />
                        <div className="flex gap-2">
                            <div className="size-12 rounded-lg p-2 bg-white/30 border border-[#4040401A]">
                                <Image
                                    src={"/icons/bag-add.svg"}
                                    width={32}
                                    height={32}
                                    alt="add to cart"
                                />
                            </div>
                            <div className="size-12 rounded-lg p-2 bg-white/30 border border-[#4040401A]">
                                <Love
                                    width={32}
                                    height={32}
                                    className={"text-primary"}
                                />
                            </div>
                        </div>
                    </div>
                    <p className="font-medium text-base lg:text-2xl max-w-[524px] text-black mt-4">
                        J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free
                        With Blue
                    </p>
                    <div className="price mt-3">
                        <p className="font-medium text-xl lg:text-2xl text-black">
                            <span>$300.00</span>
                            <span className="text-text-dim text-base ml-2 line-through">
                                $360.00
                            </span>
                        </p>
                        <p className="text-xs text-black">
                            This price is exclusive of taxes.
                        </p>
                    </div>
                    <div className="description mt-4 text-black max-w-[510px] text-xs lg:text-base">
                        Lorem ipsum dolor sit , consectetuer adipiscing elit,
                        sed diam nonummy Lorem ipsum dolor sit amet, diam
                        nonummy
                    </div>
                    <div className="line-break bg-[#E6E6E6] h-px mt-5 mb-8"></div>
                    <div className="controls">
                        <SelectInput
                            label="Type"
                            options={["Cotton", "Wool", "Silk"]}
                        />
                        <SelectInput
                            label="Size"
                            options={["sm", "m", "lg", "xl", "2xl"]}
                            className="mt-6"
                        />
                        <div className="colors mt-8 flex flex-col">
                            <h3 className="text-black font-medium lg:text-xl mb-4">
                                Colors
                            </h3>
                            <ul className="flex gap-4">
                                <li className="bg-[#F4F7F9] w-fit p-2.5 lg:p-3.5 rounded-full">
                                    <span className="bg-[#D90202] rounded-full lg:size-8 size-6 block"></span>
                                </li>
                                <li className="bg-[#F4F7F9] w-fit p-2.5 lg:p-3.5 rounded-full border-2 border-black relative">
                                    <span className="bg-[#B8CCDA] rounded-full lg:size-8 size-6 block"></span>
                                    <span className="absolute font-medium text-sm text-black -bottom-6 left-1/2 -translate-x-1/2">
                                        Blue
                                    </span>
                                </li>
                                <li className="bg-[#F4F7F9] w-fit p-2.5 lg:p-3.5 rounded-full ">
                                    <span className="bg-[#988755] rounded-full lg:size-8 size-6 block"></span>
                                </li>
                                <li className="bg-[#F4F7F9] w-fit p-2.5 lg:p-3.5 rounded-full ">
                                    <span className="bg-[#7198C8] rounded-full lg:size-8 size-6 block"></span>
                                </li>
                                <li className="bg-[#F4F7F9] w-fit p-2.5 lg:p-3.5 rounded-full ">
                                    <span className="bg-[#5D5D5B] rounded-full lg:size-8 size-6 block"></span>
                                </li>
                            </ul>
                        </div>
                        <div className="quantity flex flex-col gap-4 mt-9">
                            <p className="text-black flex gap-2 lg:text-xl items-center font-medium">
                                Quantity
                                <span className="text-text-dim text-xs lg:text-base">
                                    ($300.00 for Piece)
                                </span>
                            </p>
                            <div className="row flex items-center justify-between flex-wrap gap-y-6">
                                <div className="flex gap-5 items-center">
                                    <ul className="w-[184px] bg-gray p-2 flex gap-8 items-center justify-center rounded-[12px]">
                                        <li className="size-10 bg-white rounded-[12px] text-[#B0B0B0] text-[28px] flex items-center justify-center">
                                            -
                                        </li>
                                        <li className="text-[#333333] font-medium text-2xl">
                                            01
                                        </li>
                                        <li className="size-10 bg-white rounded-[12px] flex items-center justify-center">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 5V19M5 12H19"
                                                    stroke="black"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </li>
                                    </ul>
                                    <p className="text-black text-2xl font-medium">
                                        $300.00
                                    </p>
                                </div>
                                <button className="text-white font-medium px-[53px] py-4 bg-primary rounded-[12px] flex gap-2 w-full justify-center lg:w-fit">
                                    <span>Add To Cart</span>
                                    <Image
                                        src={"/icons/shopping-bag-btn.svg"}
                                        alt="shopping bag"
                                        width={24}
                                        height={24}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}
