import React, { useState } from "react"
import { Button, Form } from "react-bootstrap";
import useLocalStorage from "../hooks/useLocalStorage";
import { ICardApp } from "../models";
import { Link } from "react-router-dom";
import currentDateTime from "../utils/currentDateTime";


const AddCard = () => {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [cardList, setCardList] = useLocalStorage([] as ICardApp[], 'cardList');


    const onChangeHandle = (value: string, setValue: React.Dispatch<React.SetStateAction<string>>) => {
        setValue(value);
    };

    const onAddCardHandle = () => {
        const newCard: ICardApp[] = [...cardList, {
            id: +(Math.random() * 10000).toFixed(0),
            title,
            content,
            createdAt: currentDateTime(),
            editedAt: currentDateTime(),
        }]
        setCardList(newCard);
        setTitle('');
        setContent('');
    }

    const onCancelHandle = () => {
        setTitle('');
        setContent('');
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Название</Form.Label>
                <Form.Control placeholder="Введите название" value={title} onChange={(e) => onChangeHandle(e.target.value, setTitle)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Текст карточки</Form.Label>
                <Form.Control as="textarea" rows={3} value={content} onChange={(e) => onChangeHandle(e.target.value, setContent)} />
            </Form.Group>

            <Button href="/" variant="primary" onClick={onAddCardHandle}>
                Создать каточку
            </Button>

            <Link to="/" onClick={onCancelHandle}>
                <Button variant="secondary">Отменить</Button>
            </Link>
        </Form>
    )
}

export default AddCard;