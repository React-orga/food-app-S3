import { fetchUserById } from "@/api/UserApi";
import Button from "@/components/atoms/Button/Button";
import Typography from "@/components/atoms/Typography/Typography";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { IUserApiResponse } from "@/types/UserApi/UserApiProps";

export default function UserDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: user, isLoading, error } = useQuery<IUserApiResponse>({
        queryKey: ["user", id],
        queryFn: () => fetchUserById(Number(id)),
        enabled: !!id, 
    });

    if (isLoading) return <p>Loading user details...</p>;
    if (error instanceof Error)
        return <p>Error fetching user: {error.message}</p>;
    if (!user) return <p>User not found.</p>;

    return (
        <div className="px-4 py-8">
            <Typography variant="h1">Détails de l'utilisateur</Typography>
            <div className="mt-6 p-6 bg-white shadow-md rounded-lg">
                <Typography variant="h2">
                    {user.name.firstname} {user.name.lastname}
                </Typography>
                <Typography variant="p">Email: {user.email}</Typography>
                <Typography variant="p">Téléphone: {user.phone}</Typography>
                <Typography variant="p">
                    Adresse: {user.address.street}, {user.address.city},{" "}
                    {user.address.zipcode}
                </Typography>
                <Typography variant="p">Nom d'utilisateur: {user.username}</Typography>
                <Button
                    label="Retour"
                    className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md"
                    onClick={() => navigate(-1)}
                />
            </div>
        </div>
    );
}
