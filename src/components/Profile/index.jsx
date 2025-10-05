import style from "./styles.module.css"
import profilePic  from "../../assets/profilePic.jpg"
import LinkButton from "./LinkButton"
 
export default function Profile(){

    return(
        <div className={style.card}>
            <p className={style.title}>Profile</p>
            <img className={style.imagem}  src={profilePic} alt="Minha foto" />
            <div className={style.bottomCard}>
            <div className={style.divText}>
            <h2 className={style.name}>Victor Hugo Regis de Oliveira</h2>
            <p className={style.text}>Estudante de ADS no IFSP - Campus de Bragança Paulista</p>
            <p className={style.text}>WhatsApp: +55916821958</p>
            <p className={style.text}>Email: victor.oliveirahr@gmail.com</p>
            </div>
            <div className={style.divButton}>
                <LinkButton href={"https://github.com/VictorSiger"}>GitHub</LinkButton>
                <LinkButton href={"https://www.linkedin.com/in/victor-oliveira-001551330"}>LinkedIn</LinkButton>
            </div>
            </div>
        </div>
    )
}