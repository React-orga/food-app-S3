import { HeaderProps } from "@/types/Header/HeaderProps";
import { Link } from "react-router-dom";
export default function Header({ links }: HeaderProps) {
    return (
        <>
            <nav className="flex justify-between items-center p-4">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link to={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
