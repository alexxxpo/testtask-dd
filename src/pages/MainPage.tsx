import useLocalStorage from "../hooks/useLocalStorage";
import CardList from "../components/CardList";
import { ICardApp } from "../models";

const MainPage = () => {


    const [cardList, setCardList] = useLocalStorage<ICardApp[]>([] as ICardApp[], 'cardList');

    const onDeleteHandle = (id: number) => {
        const newArray = cardList.filter(item => item.id !== id)
        setCardList(newArray);
    }

    return (<div className="d-flex justify-content-center">
        <CardList cardList={cardList || []} onDeleteHandle={onDeleteHandle}/>
    </div>);
}

export default MainPage;