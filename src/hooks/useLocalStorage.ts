import { useEffect, useState } from "react";

const useLocalStorage = (initialValue: any, key: string) => {
    function getItems() {
        const storage = localStorage.getItem(key);
        if (storage) {
            return JSON.parse(storage)
        }
        return initialValue;
    }

    const [value, setValue] = useState(getItems);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, value);

    return [value, setValue];
}

export default useLocalStorage;