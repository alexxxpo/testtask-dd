import React from "react";
import Card from 'react-bootstrap/Card';

interface ICardAppProps {
  title: string;
  content?: string;
  createdAt?: Date;
  editedAt?: Date;
  onEdit?: () => {};
  onDelete?: () => {};
}

export default function CardApp({title, content, createdAt, editedAt}: ICardAppProps) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{`Created at: ${createdAt ? createdAt : ''} / Edited at: ${editedAt ? editedAt : ''}`}</Card.Subtitle>
          <Card.Text>
            {content}
          </Card.Text>
          <Card.Link href="#">Редактировать</Card.Link>
          <Card.Link href="#">Удалить</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}