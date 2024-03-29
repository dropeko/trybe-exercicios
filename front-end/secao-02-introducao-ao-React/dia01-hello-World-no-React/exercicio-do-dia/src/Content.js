import React from 'react';

const conteudos = [
  {
    nome: 'JavaScript assíncrono',
    bloco: 9,
    status: 'já aprendi',
  },
  {
    nome: 'Composição de Componentes',
    bloco: 10,
    status: 'estou aprendendo',
  },
  {
    nome: 'Composição de Estados',
    bloco: 11,
    status: 'aprenderei',
  },
  {
    nome: 'Redux',
    bloco: 15,
    status: 'aprenderei',
  },
];

class Content extends React.Component {
  render() {
    return (
      <section>
        <ul>Lista de Contéudos</ul>
        {
          conteudos.map((content) => { 
            return <li>{`Eu ${content.status} o conteúdo ${content.nome} no bloco ${content.bloco}`}</li>
          })
        }
      </section>
    );
  }
}
// Exportando
export default Content;
