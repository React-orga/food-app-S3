import { useUserStore } from "@/store/userStore";
import { Link } from "react-router-dom";

export default function Header() {
    const userStore = useUserStore.getState();
    const headerLinks = [
        { label: "Home", href: "/" },
        { label: "All Users", href: "/all-users" },
    ];

    if (userStore.isLoggedIn()) {
        headerLinks.push({
            label: "My Cart",
            href: "/cart",
        });
    }

    return (
        <header className="mb-2 px-4 shadow">
            <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                <a className="flex items-center text-2xl font-black" href="/">
                    <span className="mr-2 text-3xl text-blue-600">
                        <img
                            className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
                            src="/ReactShop_logo.webp"
                            alt=""
                        />
                    </span>
                    <span>React Shop</span>
                </a>
                <input
                    className="peer hidden"
                    type="checkbox"
                    id="navbar-open"
                />
                <label
                    className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
                    htmlFor="navbar-open"
                >
                    <span className="sr-only">Toggle Navigation</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="0.88em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
                        />
                    </svg>
                </label>
                <nav
                    aria-label="Header Navigation"
                    className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0"
                >
                    <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
                        {headerLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    className="text-gray-600 hover:text-blue-600"
                                    to={link.href}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        {userStore.isLoggedIn() && (
                            <li>
                                <button onClick={userStore.logout}>
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
