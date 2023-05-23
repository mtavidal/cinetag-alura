import styles from "./Rodape.module.css";


export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <p>Desenvolvido por <a href='http://github.com/mtavidal' rel="noreferrer" target='_blank'>Manuela Vidal</a></p>
        </footer>
    )
}