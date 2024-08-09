export interface GamesDB {
    id:                   number;
    title:                string;
    released:             string;
    companie:             string;
    poster:               string;
    state:                State;
    hours:                number;
    dateStart:            string;
    dateEnd:              string;
    achievementsObtained: number;
    achievementsTotals:   number;
    platform:             Platform;
}

export enum Platform {
    EAPlay = "EA Play",
    PCGame = "PC Game",
    Steam = "Steam",
    XboxSeriesX = "Xbox Series X",
}

export enum State {
    Abandonado = "abandonado",
    Completado = "completado",
    Jugando = "jugando",
    Pausado = "pausado",
}
