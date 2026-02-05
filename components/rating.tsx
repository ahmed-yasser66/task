import Image from "next/image";
import { Fragment } from "react";
import Container from "./container";
import { Star } from "@/public/icons";

export default function Rating() {
    return (
        <Container>
            <section className="mt-[61px] lg:mt-[48.21px] relative">
                <h3 className="text-black font-semibold lg:text-2xl relative after:absolute after:w-10 after:h-1 after:bg-primary after:left-0 after:-bottom-px">
                    Rating & Reviews
                    <Image
                        src={"/icons/water-mark.svg"}
                        alt="watermark"
                        width={59}
                        height={37}
                        className="lg:hidden absolute left-0 -top-2.5 -z-10"
                    />
                </h3>
                <div className="rating mt-4 flex flex-col lg:flex-row">
                    <p className="flex items-center justify-center lg:justify-start">
                        <span className="text-black text-[80px] lg:text-[120px] font-semibold">
                            4,5
                        </span>
                        <span className="font-medium text-[#B0B0B0] text-2xl">
                            /5
                        </span>
                    </p>
                    <div className="lg:ml-10 ratings w-full lg:w-[484px] space-y-2">
                        <div className="row flex items-center">
                            <Star width={20} height={20} />
                            <span className="text-[#545454] text-xl font-medium ml-2 mr-4">
                                5
                            </span>
                            <span className="progress flex-1 bg-[#E6E6E6] h-[6px] rounded-[12px] relative after:absolute after:bg-primary after:w-[67%] after:h-full overflow-hidden"></span>
                            <span className="text-[#545454] text-xl font-medium ml-5">
                                %67
                            </span>
                        </div>
                        <div className="row flex items-center">
                            <Star width={20} height={20} />
                            <span className="text-[#545454] text-xl font-medium ml-2 mr-4">
                                4
                            </span>
                            <span className="progress flex-1 bg-[#E6E6E6] h-[6px] rounded-[12px] relative after:absolute after:bg-primary after:w-[15%] after:h-full overflow-hidden"></span>
                            <span className="text-[#545454] text-xl font-medium ml-5">
                                %15
                            </span>
                        </div>
                        <div className="row flex items-center">
                            <Star width={20} height={20} />
                            <span className="text-[#545454] text-xl font-medium ml-2 mr-4">
                                3
                            </span>
                            <span className="progress flex-1 bg-[#E6E6E6] h-[6px] rounded-[12px] relative after:absolute after:bg-primary after:w-[6%] after:h-full overflow-hidden"></span>
                            <span className="text-[#545454] text-xl font-medium ml-5">
                                %6
                            </span>
                        </div>
                        <div className="row flex items-center">
                            <Star width={20} height={20} />
                            <span className="text-[#545454] text-xl font-medium ml-2 mr-4">
                                2
                            </span>
                            <span className="progress flex-1 bg-[#E6E6E6] h-[6px] rounded-[12px] relative after:absolute after:bg-primary after:w-[3%] after:h-full overflow-hidden"></span>
                            <span className="text-[#545454] text-xl font-medium ml-5">
                                %3
                            </span>
                        </div>
                        <div className="row flex items-center">
                            <Star width={20} height={20} />
                            <span className="text-[#545454] text-xl font-medium ml-2 mr-4">
                                1
                            </span>
                            <span className="progress flex-1 bg-[#E6E6E6] h-[6px] rounded-[12px] relative after:absolute after:bg-primary after:w-[9%] after:h-full overflow-hidden"></span>
                            <span className="text-[#545454] text-xl font-medium ml-5">
                                %9
                            </span>
                        </div>
                    </div>
                    <div className="total-reviews hidden lg:block ml-[141px] flex flex-col w-[186px] items-center">
                        <h4 className="text-[#545454]">Total Reviews</h4>
                        <h3 className="text-black text-[60px] font-semibold">
                            3.0K
                        </h3>
                        <button className="text-white gap-2 flex font-medium p-4 bg-primary rounded-[12px]">
                            <span>Add Comment</span>
                            <Image
                                src={"/icons/comment.svg"}
                                alt="comments"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                </div>
                <div className="comments mt-10 lg:mt-16 text-black w-full xl:w-[1102px]">
                    {Array.from({ length: 4 }).map((_, idx) => {
                        const isLast = idx === 3;

                        return (
                            <Fragment key={idx}>
                                <div className="comment">
                                    <div className="row font-semibold text-xl flex justify-between">
                                        <div className="flex gap-4 items-center">
                                            <span className="[line-height:1.4] text-sm lg:text-xl">
                                                Alex Daewn
                                            </span>
                                            <div className="flex gap-1">
                                                <Star width={20} height={20} />
                                                <Star width={20} height={20} />
                                                <Star width={20} height={20} />
                                                <Star width={20} height={20} />
                                                <Star
                                                    width={20}
                                                    height={20}
                                                    className="opacity-40"
                                                />
                                            </div>
                                        </div>
                                        <p className="text-[10px] lg:text-sm font-medium text-[#545454]">
                                            4 months ago
                                        </p>
                                    </div>

                                    <p className="comment mt-2 lg:mt-10 text-xs lg:text-base font-medium">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy Lorem
                                        ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy dolor
                                        sit Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit, sed
                                    </p>
                                </div>

                                {!isLast && (
                                    <div className="my-5 lg:my-8 bg-[#F4F7F9] h-0.5" />
                                )}
                            </Fragment>
                        );
                    })}
                    <button className="mt-6 lg:mt-8 bg-gray text-primary font-semibold text-sm py-4 px-[25px] rounded-[12px] mx-auto block">
                        View More Comments
                    </button>
                    <Image
                        src={"/icons/water-mark.svg"}
                        alt="watermark"
                        width={98}
                        height={57.0976448059082}
                        className="hidden lg:block absolute bottom-2"
                    />
                </div>
            </section>
        </Container>
    );
}
