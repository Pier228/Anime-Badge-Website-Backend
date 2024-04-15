import { useEffect, useState } from "react";
import IAlert from "../Interfaces/IAlert";

const Alert = (props: IAlert) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            props.onClose();
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div
            className={`fixed top-5 right-5  p-4 rounded ${
                props.success ? "bg-green-500" : "bg-red-500"
            } text-white`}
        >
            {props.message}
        </div>
    );
};

export default Alert;
