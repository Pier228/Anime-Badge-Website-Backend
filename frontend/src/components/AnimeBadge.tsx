import { IDanceFloor } from "../Interfaces/IAnimeBadge";

const AnimeBadge = (props: IDanceFloor) => {
    return (
        <div className="border-2 mx-auto border-solid border-indigo-600 w-9/12 p-4 overflow-auto min-h-96 relative flex flex-col gap-y-3">
            <p>#{props.count}</p>
            <p>Name: {props.name}</p>
            <p className="whitespace-nowrap">Source: {props.src}</p>
            <p>ID: {props._id}</p>
            <img src={props.src} alt={props.name} className="object-contain w-40 h-40"/>
        </div>
    );
};

export default AnimeBadge;
