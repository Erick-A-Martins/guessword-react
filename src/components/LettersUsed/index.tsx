import styles from "./styles.module.css";
import { Letter } from "../Letter";

// type Props

export function LettersUsed(){
    return (
        <div className={styles.lettersUsed}>
            <h5>Letras utilizadas</h5>

            <div>
                <Letter value="X" size="small" color="correct"/>
                <Letter value="E" size="small" color="wrong"/>
            </div>
        </div>
    )
}