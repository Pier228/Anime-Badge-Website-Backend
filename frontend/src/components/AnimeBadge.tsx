import { IDanceFloor } from "../Interfaces/IAnimeBadge";

const AnimeBadge = (props: IDanceFloor) => {
    return (
        <div className="border-2 mx-auto border-solid border-indigo-600 w-9/12 p-4 overflow-auto min-h-48 relative flex flex-col gap-y-3">
            <p>#{props.count}</p>
            <p>Name: {props.name}</p>
            <p className="whitespace-nowrap">Source: {props.src}</p>
            <p>ID: {props._id}</p>
        </div>
    );
};

export default AnimeBadge;
