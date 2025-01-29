import Typography from "@/components/atoms/Typography/Typography";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <Typography variant="p" underline>
                    © 2025 - Alexandre Goumain & Bastien Raoult - Tout droit
                    réservé.
                </Typography>
            </div>
        </footer>
    );
}
