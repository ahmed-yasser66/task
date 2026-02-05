import Image from "next/image";
export default function Header() {
    return (
        <header className="h-[143px] lg:h-[193px] relative flex items-center justify-center">
            <Image
                src={"/images/bg2.webp"}
                alt="bg"
                width={0}
                height={0}
                sizes="auto"
                className="object-cover opacity-[5%] absolute inset-0 size-full object-center"
            />
            <h3 className="font-semibold text-xl lg:text-[32px] text-black">
                Product Details
            </h3>
            <p className="text-[32px] whitespace-nowrap lg:text-[80px] font-bold absolute left-1/2 top-1/2 -translate-1/2 text-stroke">
                Product Details
            </p>
        </header>
    );
}
