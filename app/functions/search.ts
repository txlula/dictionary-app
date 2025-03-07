'use server'

import { Dictionary } from "../types/dictionary";

export const search = async (searchValue: string) => {
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
    const dictionary: Dictionary[] = await data.json();

    dictionary.forEach((dictionaryValue) => {
        console.log(dictionaryValue);
    })

    return dictionary;
}