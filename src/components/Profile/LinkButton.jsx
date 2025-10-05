import style from "./styles.module.css"

export default function LinkButton(props){
    return(
        <>
        <a
        className={style.button}
        href={props.href}
        targert="_blank"
        >
            {props.children}
        </a>
        </>
    )
}