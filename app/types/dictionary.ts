type Phonetic = {
    text: string,
    audio: string,
}

type Definition = {
    definition: string,
    synonyms: string[],
    antonyms: string[],
    example: string,
}

type Meaning = {
    partOfSpeech: string,
    definitions: Definition[]
}

export type Dictionary = {
    word: string,
    phonetics: Phonetic[],
    meanings: Meaning[],
}