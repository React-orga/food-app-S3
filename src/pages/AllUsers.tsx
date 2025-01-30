import { fetchUsers } from "@/api/UserApi";
import Button from "@/components/atoms/Button/Button";
import Typography from "@/components/atoms/Typography/Typography";
import { useUserStore } from "@/store/userStore";
import { IUserApi } from "@/types/UserApi/UserApiProps";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function AllUsers() {
    const navigate = useNavigate();
    const { data, isLoading, error } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });
    if (isLoading) return <p>Loading...</p>;
    if (error instanceof Error)
        return <p>Error fetching data: {error.message}</p>;

    const handleLogin = (user: IUserApi) => {
        if (useUserStore.getState().isLoggedIn()) {
            alert(
                "Vous êtes déjà connecté, vous ne pouvez pas vous connecter avec un autre compte"
            );
            return;
        }
        const userStore = useUserStore.getState();
        userStore.setUser({
            id: user.id,
            lastname: user.name.lastname,
            firstname: user.name.firstname,
            email: user.email,
            phone: user.phone,
        });

        if (userStore.isLoggedIn()) {
            navigate("/");
            window.location.reload();
        }
    };

    return (
        <div className="px-4 py-8">
            <Typography variant="h1">Tous les utilisateurs</Typography>
            <Typography variant="p" className="mt-4 text-gray-600">
                Choisissez un utilisateur pour voir ses informations ou bien
                vous connecter avec un compte existant.
            </Typography>

            <div className="mt-8 overflow-x-auto shadow-md rounded-lg">
                <table className="w-full border-collapse bg-white">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Nom
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Email
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Téléphone
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Adresse
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Ville
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Code postal
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Nom d'utilisateur
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {Array.isArray(data) ? (
                            data.map((user: IUserApi) => (
                                <tr
                                    key={user.id}
                                    className="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {user.name.firstname}{" "}
                                        {user.name.lastname}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {user.phone}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {user.address.street}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {user.address.city}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {user.address.zipcode}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {user.username}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        <Button
                                            label="détails"
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                            onClick={() => {
                                                navigate(`/user/${user.id}`);
                                            }}
                                        />
                                        <Button
                                            label="se connecter"
                                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                                            onClick={() => handleLogin(user)}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <p>No users available</p>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
