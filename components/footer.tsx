import Image from "next/image";
import Container from "@/components/container";

export default function Footer() {
        const socialLinks = [
            {
                alt: "facebook",
                img: "/icons/fb.svg",
            },
            {
                alt: "twitter",
                img: "/icons/twitter.svg",
            },
            {
                alt: "instagram",
                img: "/icons/instagram.svg",
            },
            {
                alt: "linkedin",
                img: "/icons/linkedin.svg",
            },
            {
                alt: "whatsapp",
                img: "/icons/whatsapp.svg",
            },
            {
                alt: "telegram",
                img: "/icons/telegram.svg",
            },
        ];
    return (
        <footer className="mt-[242px] lg:mt-[154px] 2xl:h-[323px] max-2xl:pb-12 relative">
            <Container>
                <div className="wrapper flex flex-col xl:flex-row z-10 relative pt-14">
                    <div className="col">
                        <Image
                            src={"/icons/logo-bnw.svg"}
                            alt="logo"
                            width={65.946533203125}
                            height={51.003761291503906}
                        />
                        <p className="mt-4 text-white/70 lg:w-[324px] max-w-full max-lg:text-xs">
                            Ipsam in eos qui consequatur ab cum maxime.Soluta
                            dolor quae Ipsam in eos qui consequatur ab .Soluta
                            dolor quae Ipsam in eos quconsequatur ab cum
                            maxime.Soluta dolor quae{" "}
                        </p>
                    </div>
                    <div className="flex max-xl:mt-8">
                        <div className="col lg:hidden">
                            <h3 className="text-white font-semibold text-base">
                                Contact Us
                            </h3>
                            <ul className="mt-5 font-medium text-white/70 flex flex-col gap-[9px] max-lg:text-sm">
                                <li className="flex gap-2 items-center">
                                    <Image
                                        src={"/icons/phone.svg"}
                                        alt="phone"
                                        width={24}
                                        height={24}
                                    />
                                    <span>+87 01928491</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Image
                                        src={"/icons/gmail.svg"}
                                        alt="gmail"
                                        width={24}
                                        height={24}
                                    />
                                    <span>Named@gmail.com</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Image
                                        src={"/icons/location.svg"}
                                        alt="gmail"
                                        width={24}
                                        height={24}
                                    />
                                    <span>381, cairo, egypt</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col max-lg:ml-8 xl:ml-[54px]">
                            <h3 className="text-white font-semibold text-base lg:text-2xl">
                                Let Us Help
                            </h3>
                            <ul className="mt-6 font-medium text-white/70 flex flex-col gap-[9px] max-lg:text-sm">
                                <li>My Account</li>
                                <li>FAQs</li>
                                <li>Categories</li>
                                <li>All Products</li>
                            </ul>
                        </div>
                        <div className="col ml-[72px] hidden lg:block">
                            <h3 className="text-white font-semibold text-2xl">
                                Policies
                            </h3>
                            <ul className="mt-6 font-medium text-white/70 flex flex-col gap-[9px] ">
                                <li>Refund Policy</li>
                                <li>About Us</li>
                                <li>Cancellation Policy </li>
                                <li>Terms and Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col xl:ml-[54px] max-lg:mt-5">
                        <h3 className="text-white font-semibold text-base lg:text-2xl mb-6">
                            Send Email
                        </h3>
                        <div className="p-2 bg-white flex rounded-[12px]">
                            <input
                                type="text"
                                placeholder="Email address"
                                className="placeholder:text-text-dim outline-0 text-black flex-1"
                            />
                            <button className="font-semibold py-[12px] px-[47px] bg-primary block rounded-[12px]">
                                Send
                            </button>
                        </div>
                        <div className="follow-us mt-6">
                            <h3 className="text-white font-semibold">
                                Follow Us
                            </h3>
                            <ul className="mt-3 flex gap-4">
                                {socialLinks.map((link) => (
                                    <li key={link.alt}>
                                        <Image
                                            src={link.img}
                                            alt={link.alt}
                                            width={24}
                                            height={24}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
            <Image
                src={"/images/footer.webp"}
                alt="bg"
                width={0}
                height={0}
                sizes="auto"
                className="size-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/70"></div>
        </footer>
    );
}
