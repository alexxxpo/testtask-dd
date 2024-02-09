export interface ICardApp {
    id: number;
    title: string;
    content: string;
    createdAt: Date | number;
    editedAt: Date | number;
}

export interface ILocationState {
    id: number;
    title: string;
    content: string;
}