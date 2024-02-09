import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { ICardApp } from "../models"
import React, {useEffect, useState } from "react";

interface IHeaderProps {
    cardList: ICardApp[];
    setCardList: React.Dispatch<React.SetStateAction<ICardApp[]>>;
}

function Header({cardList, setCardList} : IHeaderProps) {
    const [sortBy, setSortBy] = useState('title');
    const [sortTitleUp, setSortTitleUp] = useState<boolean>(true);
    const [sortCreateUp, setSortCreateUp] = useState<boolean>(true);
    const [sortEditUp, setSortEditUp] = useState<boolean>(true);
    const [sortedArray, setSortedArray] = useState<ICardApp[]>(cardList);

    function sortByTitle() {
        if (sortTitleUp) {
            setSortedArray([...sortedArray.sort((a, b) => (a.title).localeCompare(b.title))]);
            setSortTitleUp(prev => !prev);
        }
        if (!sortTitleUp) {
            setSortedArray([...sortedArray.sort((a, b) => (b.title).localeCompare(a.title))])
            setSortTitleUp(prev => !prev);
        }
        setSortBy('title');
    }

    function sortByCreating() {
        if (sortCreateUp) {
            setSortedArray([...sortedArray.sort((a, b) => (a.createdAt).localeCompare(b.createdAt))]);
            setSortCreateUp(prev => !prev);
        }
        if (!sortCreateUp) {
            setSortedArray([...sortedArray.sort((a, b) => (b.createdAt).localeCompare(a.createdAt))])
            setSortCreateUp(prev => !prev);
        }
        setSortBy('create');
    }

    function sortByEditing() {
        if (sortEditUp) {
            setSortedArray([...sortedArray.sort((a, b) => (a.editedAt).localeCompare(b.editedAt))]);
            setSortEditUp(prev => !prev);
        }
        if (!sortEditUp) {
            setSortedArray([...sortedArray.sort((a, b) => (b.editedAt).localeCompare(a.editedAt))])
            setSortEditUp(prev => !prev);
        }
        setSortBy('edit');
    }

    useEffect(() => {
        setCardList([...sortedArray])        
    }, [sortedArray])

    return <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Main Page</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/add">Добавить карточку</Nav.Link>
                        <NavDropdown title="Сортировка">
                            <NavDropdown.Item onClick={sortByTitle}>По названию {sortBy === 'title' ? sortTitleUp ? '(По возрастанию)' : '(По убыванию)' : ''}</NavDropdown.Item>
                            <NavDropdown.Item onClick={sortByCreating}>По дате создания {sortBy === 'create' ? sortCreateUp ? '(По возрастанию)' : '(По убыванию)' : ''}</NavDropdown.Item>
                            <NavDropdown.Item onClick={sortByEditing}>По дате последнего изменения {sortBy === 'edit' ? sortEditUp ? '(По возрастанию)' : '(По убыванию)' : ""}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}

export default React.memo(Header)