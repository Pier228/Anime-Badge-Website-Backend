import { useRef } from "react";
import RoundedButton from "./components/RoundedButton";
import consts from "./consts";
import Alert from "./components/Alert";
import useAlert from "./hooks/useAlert";

function App() {
    const name = useRef<HTMLInputElement>(null);
    const src = useRef<HTMLInputElement>(null);
    const {
        alertMessage,
        showAlert,
        alertType,
        setAlertMessage,
        setShowAlert,
        setAlertType,
        closeAlert,
    } = useAlert();

    const sendData = async () => {
        try {
            if (name.current && src.current) {
                if (
                    name.current.value.length > 2 ||
                    src.current.value.length > 2
                ) {
                    const response = await fetch(
                        `http://localhost:${consts.PORT}/api/postData`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name: name.current.value,
                                src: src.current.value,
                            }),
                        }
                    );

                    if (!response.ok) {
                        throw new Error("Failed to add character");
                    }

                    setAlertType(true);
                    setAlertMessage("Successfully added character");
                    setShowAlert(true);
                } else {
                    throw new Error("Input is too short!");
                }
            } else {
                throw new Error("Input is empty!");
            }
        } catch (error) {
            setAlertType(false);
            setAlertMessage("Failed to add character");
            setShowAlert(true);
            console.error(error);
        }
    };

    return (
        <div className="h-screen flex items-center">
            <RoundedButton link="./characters" btnText="Characters" />
            <div className="border-2 border-solid border-indigo-600 mx-auto w-3/6 p-10">
                <form className="flex flex-col gap-y-8">
                    <input
                        type="text"
                        placeholder="Name"
                        className="font-medium bg-transparent border-2 border-solid border-indigo-600 rounded-md p-3"
                        minLength={2}
                        name="name"
                        ref={name}
                    />
                    <input
                        type="text"
                        placeholder="Source"
                        className="font-medium bg-transparent border-2 border-solid border-indigo-600 rounded-md p-3"
                        minLength={2}
                        name="src"
                        ref={src}
                    />
                    <button
                        type="button"
                        className="font-medium mx-auto p-3 border-2 border-solid border-indigo-600 rounded-md hover:bg-indigo-600 ease-in-out duration-300 w-72"
                        onClick={sendData}
                    >
                        Add character
                    </button>
                </form>
            </div>
            {showAlert && (
                <Alert
                    message={alertMessage}
                    success={alertType}
                    onClose={closeAlert}
                />
            )}
        </div>
    );
}

export default App;
