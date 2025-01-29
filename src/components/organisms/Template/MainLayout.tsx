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
                    { label: "Home", href: "/" },
                    { label: "Cart", href: "/cart" },
                    { label: "All Users", href: "/all-users" },
                ]}
            />
            <main className="container mx-auto flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
