import { useLocation } from "react-router-dom";
import EditCard from "../components/EditCard";
import { ILocationState } from "../models";


const EditPage = () => {
    const location = useLocation();
    const state= location.state as ILocationState
    console.log(state);

    return (<EditCard {...state} />);
}

export default EditPage;