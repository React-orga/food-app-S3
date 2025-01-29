import MainLayout from "@/components/organisms/Template/MainLayout";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
}

export default App;
