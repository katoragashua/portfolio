import {useState, useEffect} from "react";

function useTranslation () {
    const [count, setCount] = useState(() => 0)

    const lang = ["en", "es", "fr", "it", "de", "sw", "pt"];

    const translations = {
        en: {
            greeting: "Hello",
            art: "I'm"
        },
        fr: {
            greeting: "Bonjour",
            art: "je sius"
        },
        es: {
            greeting: "Hola",
            art: "soy"
        },
        pt: {
            greeting: "Olá",
            art: "eu sou"
        },
        de: {
            greeting: "Hallo",
            art: "ich bin"
        },
        sw: {
            greeting: "Salamu",
            art: "yo soya"
        },
        it: {
            greeting: "Ciao",
            art: "sono"
        },
    }

    useEffect(() => {
        let counter = setTimeout(() => {
            setCount(prev => prev === lang.length - 1? 0: prev + 1)
        }, 5000)
        return (() => clearTimeout(counter))
     })

    return {lang, translations, count}
}

export default useTranslation