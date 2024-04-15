import { IDanceFloor } from "../Interfaces/IAnimeBadge";

const AnimeBadge = (props: IDanceFloor) => {
    return (
        <div className="border-2 mx-auto border-solid border-indigo-600 w-9/12 p-4">
            <p>Name: {props.name}</p>
            <br />
            <p>Source: {props.src}</p>
            <br />
            <p>ID: {props._id}</p>
        </div>
    );
};

export default AnimeBadge;
