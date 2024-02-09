import React from "react";
import CardApp from "./CardApp";
import { ICardApp } from "../models";
import { ListGroup } from "react-bootstrap";

interface ICardListProps {
    cardList: ICardApp[]
}

export default function CardList({ cardList }: ICardListProps) {
    if (cardList.length > 0) {
        return (
            <ListGroup>
                {cardList?.map((card, i) => {
                    return <ListGroup.Item key={i}>
                        <CardApp id={card.id} title={card.title} content={card.content} createdAt={card.createdAt} editedAt={card.editedAt} />
                    </ListGroup.Item>
                })}
            </ListGroup>
        )
    }
    return <div>
            Нет ни одной карточки
        </div>
    

}