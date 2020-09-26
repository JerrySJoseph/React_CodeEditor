import React, { useState, useEffect } from 'react'

const PREFIX = 'jscodepen-local-store';

export default function useLocalStorage(key, initialValue, enabled) {
    const PrefixedKey = PREFIX + key;
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(PrefixedKey);
        if (jsonValue != null) return JSON.parse(jsonValue);
        if (typeof jsonValue === 'function')
            return initialValue();
        else
            return initialValue;
    })
    useEffect(() => {
        if (enabled)
            localStorage.setItem(PrefixedKey, JSON.stringify(value));

    }, [PrefixedKey, value])

    return [value, setValue];
}
