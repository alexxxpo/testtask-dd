import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { ICardApp, ILocationState } from "../models";
import currentDateTime from "../utils/currentDateTime";

export default function EditCard(props: ILocationState) {

    const [title, setTitle] = useState<string>(props.title);
    const [content, setContent] = useState<string>(props.content);
    const [cardList, setCardList] = useLocalStorage([] as ICardApp[], 'cardList');


    const onChangeHandle = (value: string, setValue: React.Dispatch<React.SetStateAction<string>>) => {
        setValue(value);
    };

    const onEditCardHandle = () => {
        const newCardList = cardList.map(card => {
            if (card.id === props.id) {
                card.title = title;
                card.content = content;
                card.editedAt = currentDateTime();
            };
            return card;
        });
        
        setCardList(newCardList);
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

            <Button href="/" className="me-5" variant="primary" onClick={onEditCardHandle}>
                Сохранить изменения
            </Button>

            <Link to="/" onClick={onCancelHandle}>
                <Button variant="secondary">Отменить</Button>
            </Link>
        </Form>
    )
}