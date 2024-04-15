export interface IDanceFloor {
    name: string;
    src: string;
    _id: string;
}

export interface IAnimeTable {
    danceFloorArray: IDanceFloor[];
}
