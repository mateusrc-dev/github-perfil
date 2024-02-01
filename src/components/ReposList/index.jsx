import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(false);
    console.log(repos);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => { 
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000)
        });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <>
                    {
                        repos?.message === 'Not Found' ? (
                            <div className="container">
                                <h1>Usuário não existe!</h1>
                            </div>
                        ) : (
                            <ul className={styles.list}>
                                {/*repos.map(item => (*/}
                                {
                                    repos.map(({ id, name, language, html_url }) => (
                                        <li key={id} className={styles.listItem}>
                                            <div className={styles.itemName}>
                                                <b>Nome:</b> {name} <br />
                                            </div>
                                            <div className={styles.itemLanguage}>
                                                <b>Linguagem:</b> {language} <br />
                                            </div>
                                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </>
            )}
        </div>
    )
}

export default ReposList;