import Typography from "@/components/atoms/Typography/Typography";
import { useParams } from "react-router-dom";

export default function DetailProduct() {
    const { id } = useParams();

    return (
        <div className="container mx-auto px-4 py-8">
            <Typography variant="h1">Detail Product {id}</Typography>
        </div>
    );
}
