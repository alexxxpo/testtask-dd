import { useEffect, useState } from "react";

function useLocalStorage<V> (initialValue: V, key: string): [V, React.Dispatch<React.SetStateAction<V>>] {
    function getItems() {
        const storage = localStorage.getItem(key);
        if (storage) {
            return JSON.parse(storage)
        }
        return initialValue;
    }

    const [value, setValue] = useState<V>(getItems);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);
    
    return [value, setValue];
}

export default useLocalStorage;