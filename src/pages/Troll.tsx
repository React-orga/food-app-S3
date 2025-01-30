import Button from "@/components/atoms/Button/Button";
import { motion } from "framer-motion";
import { useState } from "react";

const TrollPage = () => {
    const [response, setResponse] = useState<string | null>(null); // gère la réponse

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
            <motion.h1
                className="text-5xl font-bold glitch"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Diyaeddine, mets-nous 20...
            </motion.h1>

            <motion.p
                className="mt-4 text-lg text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                Sinon... <span className="text-red-500">rm -rf /</span>
            </motion.p>

            <motion.div
                className="mt-8"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, yoyo: Infinity }}
            >
                <Button
                    className="bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-3 rounded-lg"
                    onClick={() => setResponse("yes")}
                    label="Oui"
                ></Button>
                <Button
                    className="bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-3 rounded-lg"
                    onClick={() => setResponse("no")}
                    label="Non"
                ></Button>
            </motion.div>

            {response && (
                <motion.div
                    className="mt-6 p-4 bg-gray-800 border border-red-500 rounded-lg text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {response === "yes" ? (
                        <>
                            <span className="text-green-500">Merci !</span>
                            <br />
                            <span className="text-white">
                                Vous avez obtenu votre 20/20 ! 🎉
                            </span>
                        </>
                    ) : (
                        <>
                            <span className="text-red-500">
                                Mauvaise réponse...
                            </span>
                            <br />
                            <span className="text-white">
                                Démarrage du formatage en cours...
                            </span>
                        </>
                    )}
                </motion.div>
            )}

            <style jsx>{`
                @keyframes glitch {
                    0% {
                        text-shadow: 2px 2px red, -2px -2px blue;
                    }
                    50% {
                        text-shadow: -2px -2px red, 2px 2px blue;
                    }
                    100% {
                        text-shadow: 2px -2px blue, -2px 2px red;
                    }
                }
                .glitch {
                    animation: glitch 0.5s infinite alternate;
                }
            `}</style>
        </div>
    );
};

export default TrollPage;
