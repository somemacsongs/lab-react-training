import style from "./Random.module.css";

function Random (prop){
    return (
        <div className={style.random}>
            <p className={style.text}>Random value between {prop.min} and {prop.max} => {Math.floor(Math.random()* prop.max) + prop.min}</p>
        </div>
    )
}

export default Random;