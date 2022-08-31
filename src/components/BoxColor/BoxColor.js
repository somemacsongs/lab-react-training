import style from "./BoxColor.module.css"


function BoxColor (prop){
    return (
        <div style={{backgroundColor: `rgb(${prop.r},${prop.g},${prop.b})`}} className={style.box}>rgb({prop.r}, {prop.g}, {prop.b})</div>
    )
}

export default BoxColor;