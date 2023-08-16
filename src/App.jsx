import TypingAnimation from "./components/TypingAnimation"
import SkillsComponent from "./components/Skills"
import styles from './App.module.css';
import Footer from "./components/Footer";

const array_skills = [
    {
        id: 1,
        titulo: 'Me sinto confiante em:',
        badges: ['CSS e seus frameworks', 'ReactJS', 'SQL', 'JavaScript', 'Git'],
    },
    {
        id: 2,
        titulo: 'Tenho um bom conhecimento em:',
        badges: ['Front-end toolings', 'Design System e prótotipos (Figma)', 'VueJS', 'PHP (Laravel)'],
    },
    {
        id: 3,
        titulo: 'Posso lidar com alguma ajuda',
        badges: ['Pythons', 'TypeScript', 'NodeJS', 'Ruby on Rails'],
    }
];

function App() {
    return (
        <>
            <header>
                <h1>Eu sou <b>Ana Alencar</b>, desenvolvedora <b>front-end</b></h1>
                <h2>Criando o elo entre conceitos e interações.</h2>
            </header>

            <main>
                <section className={styles.sobre}>
                    <p> Apresento-me como entusiasta de inovação, design e tecnologias de informação, especialmente aquelas relacionadas à programação e todo o ecossistema que a envolve. 
                        Atualmente, sou <b> graduanda em Bacharelado Interdisciplinar em Ciência e Tecnologia na Universidade Federal do Maranhão </b>, onde tenho direcionado meus esforços para me
                        qualificar em Engenharia da Computação e na área de Desenvolvimento Front-end. <br /><br /> <b> Minha jornada nessa fascinante área teve início em 2020, quando meu
                        amor pela TI ganhou vida. </b> Desde então, tenho aproveitado oportunidades de formação complementar, o que me tem proporcionado a chance de trabalhar em projetos 
                        colaborativos com equipes interdisciplinares e, por consequência, me conectar com profissionais experientes do mercado de tecnologia.
                    </p>
                    <p>
                        Além disso, tive a grata oportunidade de aplicar meus conhecimentos e paixão pela programação em contextos profissionais. Através de experiências anteriores, fui uma
                        parte ativa no desenvolvimento de sistemas web, contribuindo em projetos que exigiram habilidades técnicas e, igualmente importante, a habilidade de trabalhar de forma
                        adaptável, demonstrando minha versatilidade e comprometimento em alcançar resultados eficazes. <br /><br /> <b> Essas experiências têm sido enriquecedoras, permitindo-me
                        aprimorar minhas habilidades e expandir meu horizonte no universo do desenvolvimento front-end. </b>
                    </p>
                </section>

                <section className={styles.habilidades}>
                    <h3>Habilidades</h3>
                    <TypingAnimation />
                    <SkillsComponent skills={array_skills} />
                </section>

                <section className={styles.motivacao}>
                    <h3>Motivação</h3>
                    <p>
                        Uma das minhas principais convicções é a busca pelo impacto positivo. Desde o começo da minha carreira encontrei uma satisfação ao saber que meu trabalho não apenas cria 
                        interfaces funcionais, mas também transforma a vida das pessoas de alguma forma. O voluntariado para mim é uma oportunidade de ampliar esse impacto. 
                        <b> Acredito que a tecnologia pode ser uma poderosa ferramenta para mudanças positivas, e estou entusiasmada para contribuir de maneira significativa, tocando as vidas 
                        daqueles que possam se beneficiar da minha paixão pelo desenvolvimento front-end. </b>
                        Participar desse voluntariado contribui com a realização do meu desejo de fazer a diferença, de transformar vidas e de ser parte de algo que verdadeiramente importa.
                    </p>
                </section>

            </main>
        </>
    )
}

export default App
