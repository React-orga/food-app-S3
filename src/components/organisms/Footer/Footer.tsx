import Typography from "@/components/atoms/Typography/Typography";

export default function Footer() {
    return (
        <footer className="relative mt-20 bg-gray-900 px-4 pt-20">
            <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2"><img className="h-full object-contain" src="/ReactShop_logo.webp" alt="" /></div>
            <Typography variant="p" underline className="py-10 text-center[]">
                © 2025 - Alexandre Goumain & Bastien Raoult - Tout droit
                réservé.
            </Typography>
        </footer>


    );
}
