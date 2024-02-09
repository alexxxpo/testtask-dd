import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Header() {
    return <>

        <Link to='/add' color="#fff" style={{ color: "fff" }}>
            Добавить карточку
        </Link >


        Сортировка
        По названию
        По дате создания
        По дате последнего изменения
    </>
}