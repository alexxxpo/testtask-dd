import React, { useState } from "react"
import { Button, Form } from "react-bootstrap";
import useLocalStorage from "../hooks/useLocalStorage";
import { ICardApp } from "../models";


const AddCard = () => {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [cardList, setCardList] = useLocalStorage([] as ICardApp[], 'cardList');


    const onChangeHandle = (value: string, setValue: React.Dispatch<React.SetStateAction<string>>) => {
        setValue(value);
    };

    const onAddCardHandle = () => {
        const newCard: ICardApp[] = [...cardList, {
            id: +(Math.random()* 10000).toFixed(0),
            title,
            content,
            createdAt: Date.now(),
            editedAt: Date.now()
        }]
        setCardList(newCard);
        setTitle('');
        setContent('')
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
            <Button variant="primary" onClick={onAddCardHandle}>Создать каточку</Button>
            <Button variant="secondary">Отменить</Button>
        </Form>
    )
}

export default AddCard;