import { IAnimeTable } from "../Interfaces/IAnimeBadge";
import AnimeBadge from "./AnimeBadge";

const AnimeTable = (props: IAnimeTable) => {
    return (
        <div className="flex flex-col h-full w-full overflow-auto py-6 gap-y-5">
            {props.danceFloorArray.map((anime, index) => (
                <AnimeBadge name={anime.name} src={anime.src} key={index} _id={anime._id} count={++index}/>
            ))}
        </div>
    );
};

export default AnimeTable;
