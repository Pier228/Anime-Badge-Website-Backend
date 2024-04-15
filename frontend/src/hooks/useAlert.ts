import { useState, useEffect } from "react";

const useAlert = () => {
    const [alertMessage, setAlertMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState(false);

    const closeAlert = () => {
        setShowAlert(false);
    };

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [showAlert]);

    return {
        alertMessage,
        showAlert,
        alertType,
        setAlertMessage,
        setShowAlert,
        setAlertType,
        closeAlert,
    };
};

export default useAlert;
