import style from "./IdCard.module.css"

function IdCard (prop){
    return (
        
            <div className={style.idCard}>
                <img src={prop.picture} alt="pic" className={style.img}/>
                <div className={style.info}>
                    <p><strong>First name:</strong> {prop.firstName}</p>
                    <p><strong>Last name:</strong> {prop.lastName}</p>
                    <p><strong>Gender:</strong> {prop.gender}</p>
                    <p><strong>Height:</strong> {Math.floor(prop.height/100)}.{prop.height%100}m</p>
                    <p><strong>Birth:</strong> {prop.birth.toDateString()}</p>
                </div>
            </div>
        
    )         
}

export default IdCard;