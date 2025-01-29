import Typography from "./components/atoms/Typography/Typography";
import Home from "@pages/Home";


function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Typography variant="h1" underline>
                Hello World
            </Typography>
            <Home />
        </div>
    );
}

export default App;
