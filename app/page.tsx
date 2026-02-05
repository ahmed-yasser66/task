import BreadCrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import ProductDetails from "@/components/product-details";
import Rating from "@/components/rating";
import Similar from "@/components/similar";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Header />
            <BreadCrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Our Category", href: "/dashboard" },
                    { label: "Product Details" },
                ]}
            />
            <ProductDetails />
            <Rating />
            <Similar />
            <Footer />
        </main>
    );
}
