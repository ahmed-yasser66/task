import Image from "next/image";
import Container from "./container";

export default function Navbar() {
    const navLinks = [
        {
            imageUrl: "/icons/home.svg",
            label: "Home",
        },
        {
            imageUrl: "/icons/category.svg",
            label: "Our Category",
        },
        {
            imageUrl: "/icons/about.svg",
            label: "About Us",
        },
        {
            imageUrl: "/icons/contact.svg",
            label: "Contact Us",
        },
        {
            imageUrl: "/icons/faqs.svg",
            label: "FAQs",
        },
    ];
    return (
        <Container>
            <nav className="flex justify-between py-5">
                <div className="right flex items-center">
                    <Image
                        src="/icons/logo.png"
                        alt="logo"
                        width={65.95}
                        height={51}
                        className="w-[45px] h-[35px] lg:w-[65.95px] lg:h-[51px]"
                    />
                    <ul className="ml-[42.05px] hidden lg:flex gap-6">
                        {navLinks.map((link) => (
                            <li
                                className="flex items-center gap-[3px] text-text-dim text-sm"
                                key={link.label}
                            >
                                <Image
                                    src={link.imageUrl}
                                    alt={link.label}
                                    width={20}
                                    height={0}
                                />
                                {link.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="left hidden lg:flex gap-4">
                    <Image
                        src={"/icons/shopping-bag.svg"}
                        alt="shopping bag"
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/icons/notification.svg"}
                        alt="notification"
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/icons/love.svg"}
                        alt="love"
                        width={20}
                        height={20}
                    />
                    <div className="flex items-center">
                        <span className="text-black font-medium">EN</span>
                        <Image
                            src={"/icons/down-arrow.svg"}
                            alt="down-arrow"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className="flex items-center">
                        <Image
                            src={"/icons/user.svg"}
                            alt="user"
                            width={20}
                            height={20}
                        />
                        <Image
                            src={"/icons/down-arrow.svg"}
                            alt="down-arrow"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <Image
                    src={"/icons/menu.svg"}
                    alt="menu"
                    width={24}
                    height={24}
                    className="block lg:hidden"
                />
            </nav>
        </Container>
    );
}
