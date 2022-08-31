import style from "./Greetings.module.css"

function Greetings (prop){
    function hello(lang){
        if (lang==="fr") return "Bonjour"
        if (lang==="de") return "Hallo"
        if (lang==="en") return "Hello"
        if (lang==="es") return "Hola"
    }
    
    return (
        <div className={style.greet}>
            <p className={style.text}>{hello(prop.lang)} {prop.children}</p>
        </div>
    )
}

export default Greetings