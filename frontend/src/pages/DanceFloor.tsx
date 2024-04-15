import { useEffect, useState } from "react";
import RoundedButton from "../components/RoundedButton";
import Loader from "../components/Loader";
import AnimeTable from "../components/AnimeTable";
import { IDanceFloor } from "../Interfaces/IAnimeBadge";
import consts from "../consts";

const Customers = () => {
    const [data, setData] = useState<IDanceFloor[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:${consts.PORT}/api/getData`)
            .then((res) => res.json())
            .then((json) => setData(json))
            .then(() => setLoading(false))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="h-screen flex items-center justify-center">
            <RoundedButton btnText="Go to Main" link="/" />
            <div className="border-2 border-solid border-indigo-600 w-3/6 h-5/6 flex justify-center items-center">
                {isLoading ? <Loader /> : <AnimeTable danceFloorArray={data} />}
            </div>
        </div>
    );
};

export default Customers;
