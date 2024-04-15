import { Link } from "react-router-dom";
import IRoundedButton from "../Interfaces/IRoundedButton";

const RoundedButton = (props: IRoundedButton) => {
    return (
        <Link
            to={props.link.toString()}
            className="fixed top-5 start-5 font-medium p-3 border-2 border-solid border-indigo-600 rounded-md hover:bg-indigo-600 ease-in-out duration-300"
        >
            {props.btnText}
        </Link>
    );
};

export default RoundedButton;