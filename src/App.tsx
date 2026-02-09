import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import styles from "./app.module.css";

export default function App(){

    function handleRestartGame(){
        alert("Reiniciar o jogo!");
    }

    return (
        <div className={styles.container}>
            <main>
                <Header current={5} max={10} onRestart={handleRestartGame} />
                
                <Tip tip="Uma das linguagens de programação mais utilizadas" />

                <Letter value="R" />
                <Letter value="E" />
                <Letter value="A" />
                <Letter value="C" />
                <Letter value="T" />
            </main>
        </div>
    )
}