import useLocalStorage from "../hooks/useLocalStorage";
import CardList from "../components/CardList";
import { ICardApp } from "../models";
import Header from "../components/Header";
import React from "react";

const MainPage = () => {


    const [cardList, setCardList] = useLocalStorage<ICardApp[]>([] as ICardApp[], 'cardList');

    const onDeleteHandle = (id: number) => {
        const newArray = cardList.filter(item => item.id !== id)
        setCardList(newArray);
    }

    return (<div >
        <Header cardList={cardList} setCardList={setCardList} />
        <div className="d-flex justify-content-center" >
        <CardList cardList={cardList || []} onDeleteHandle={onDeleteHandle}/>
        </div>
    </div>);
}

export default React.memo(MainPage);