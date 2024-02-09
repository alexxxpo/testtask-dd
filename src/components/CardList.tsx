import React from "react";
import CardApp from "./CardApp";
import { ICardApp } from "../models";
import { ListGroup } from "react-bootstrap";

interface ICardListProps {
    cardList: ICardApp[];
    onDeleteHandle: (id: number) => void;
}

export default function CardList({ cardList,onDeleteHandle }: ICardListProps) {
    if (cardList.length > 0) {
        return (
            <ListGroup>
                {cardList?.map((card, i) => {
                    return <ListGroup.Item key={i}>
                        <CardApp {...card} onDelete={onDeleteHandle}/>
                    </ListGroup.Item>
                })}
            </ListGroup>
        )
    }
    return <div>
            Нет ни одной карточки
        </div>
    

}