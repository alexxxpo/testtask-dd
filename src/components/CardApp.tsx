import React from "react";
import Card from 'react-bootstrap/Card';
import { ICardApp } from "../models";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ICardAppProps extends ICardApp {
  onEdit?: () => {};
  onDelete: (id: number) => void;
}

export default function CardApp({ id, title, content, createdAt, editedAt, onDelete }: ICardAppProps) {

  return (
    <div>
      <Card style={{ width: '36rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{`Created at: ${createdAt ? createdAt : ''} / Edited at: ${editedAt ? editedAt : ''}`}</Card.Subtitle>
          <Card.Text>
            {content}
          </Card.Text>
          <Link to="/edit" state={{ id, title, content }}>
            <Button className="me-5" >Редактировать</Button>
          </Link>
          <Button onClick={() => onDelete(id)}>Удалить</Button>
        </Card.Body>
      </Card>
    </div>
  );
}