import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header
                links={[
                    { label: "catégories", href: "/" },
                    { label: "produits", href: "/products" },
                ]}
            />

            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
