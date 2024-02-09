export interface ICardApp {
    id: number;
    title: string;
    content: string;
    createdAt: Date | string;
    editedAt: Date | string;
}

export interface ILocationState {
    id: number;
    title: string;
    content: string;
}