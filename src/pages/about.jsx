import React from "react";
import Menu from "../components/Menu";
import Layout from '../components/Layout'
import CardV2 from "../components/CardV2";

const aboutStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'


}

const cardsStyles = {
    display: 'flex',
    
}

const About = () => {

    return (
        <div style={aboutStyles}>
            <Menu></Menu>
            <Layout>


                <h1>Sobre</h1>

                <div style={cardsStyles}>

                    <CardV2 nomeBotao={'Abrir'} path={'/contact'} texto={'Para conhecer mais o desenvolvedor abra a página.'} titulo={'Contato'} ></CardV2>
                    <CardV2 nomeBotao={'Abrir'} path={'/'} texto={'Veja nossa página inicial clicando abaixo.'} titulo={'Home'} ></CardV2>
                </div>
            </Layout>
        </div>


    )
}

export default About