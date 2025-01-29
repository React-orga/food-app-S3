import Button from "@/components/atoms/Button/Button";
import Typography from "@/components/atoms/Typography/Typography";

export default function AllUsers() {
    const MockedUsers = [
        {
            address: {
                geolocation: {
                    lat: "-37.3159",
                    long: "81.1496",
                },
                city: "kilcoole",
                street: "new road",
                number: 7682,
                zipcode: "12926-3874",
            },
            id: 1,
            email: "john@gmail.com",
            username: "johnd",
            password: "m38rmF$",
            name: {
                firstname: "john",
                lastname: "doe",
            },
            phone: "1-570-236-7033",
            __v: 0,
        },
        {
            address: {
                geolocation: {
                    lat: "-37.3159",
                    long: "81.1496",
                },
                city: "kilcoole",
                street: "new road",
                number: 7682,
                zipcode: "12926-3874",
            },
            id: 1,
            email: "john@gmail.com",
            username: "johnd",
            password: "m38rmF$",
            name: {
                firstname: "john",
                lastname: "doe",
            },
            phone: "1-570-236-7033",
            __v: 0,
        },
        {
            address: {
                geolocation: {
                    lat: "-37.3159",
                    long: "81.1496",
                },
                city: "kilcoole",
                street: "new road",
                number: 7682,
                zipcode: "12926-3874",
            },
            id: 1,
            email: "john@gmail.com",
            username: "johnd",
            password: "m38rmF$",
            name: {
                firstname: "john",
                lastname: "doe",
            },
            phone: "1-570-236-7033",
            __v: 0,
        },
        {
            address: {
                geolocation: {
                    lat: "-37.3159",
                    long: "81.1496",
                },
                city: "kilcoole",
                street: "new road",
                number: 7682,
                zipcode: "12926-3874",
            },
            id: 1,
            email: "john@gmail.com",
            username: "johnd",
            password: "m38rmF$",
            name: {
                firstname: "john",
                lastname: "doe",
            },
            phone: "1-570-236-7033",
            __v: 0,
        },
        {
            address: {
                geolocation: {
                    lat: "-37.3159",
                    long: "81.1496",
                },
                city: "kilcoole",
                street: "new road",
                number: 7682,
                zipcode: "12926-3874",
            },
            id: 1,
            email: "john@gmail.com",
            username: "johnd",
            password: "m38rmF$",
            name: {
                firstname: "john",
                lastname: "doe",
            },
            phone: "1-570-236-7033",
            __v: 0,
        },
        {
            address: {
                geolocation: {
                    lat: "-37.3159",
                    long: "81.1496",
                },
                city: "kilcoole",
                street: "new road",
                number: 7682,
                zipcode: "12926-3874",
            },
            id: 1,
            email: "john@gmail.com",
            username: "johnd",
            password: "m38rmF$",
            name: {
                firstname: "john",
                lastname: "doe",
            },
            phone: "1-570-236-7033",
            __v: 0,
        },
        {
            address: {
                geolocation: {
                    lat: "-37.3159",
                    long: "81.1496",
                },
                city: "kilcoole",
                street: "new road",
                number: 7682,
                zipcode: "12926-3874",
            },
            id: 1,
            email: "john@gmail.com",
            username: "johnd",
            password: "m38rmF$",
            name: {
                firstname: "john",
                lastname: "doe",
            },
            phone: "1-570-236-7033",
            __v: 0,
        },
    ];

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
                        {MockedUsers.map((user) => (
                            <tr
                                key={user.id}
                                className="hover:bg-gray-50 transition-colors duration-200"
                            >
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    {user.name.firstname} {user.name.lastname}
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
                                            alert("détails");
                                        }}
                                    />
                                    <Button
                                        label="se connecter"
                                        className="bg-green-500 text-white px-4 py-2 rounded-md"
                                        onClick={() => {
                                            alert("se connecter");
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
