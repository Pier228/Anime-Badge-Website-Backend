export interface IDanceFloor {
    name: string;
    src: string;
    _id: string;
    count: number;
}

export interface IAnimeTable {
    danceFloorArray: IDanceFloor[];
}
