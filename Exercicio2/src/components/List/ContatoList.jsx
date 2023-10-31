import React from 'react';
import { ListWrapper, ListItem, ListButton } from '../List/stylesList';

function ContatoList({ contatos, onEditContact, onDeleteContact }) {
  return (
    <ListWrapper>
      <h2>Lista de Contatos</h2>
      <ul>
        {contatos.map((contato, index) => (
          <ListItem key={index}>
            <span>
              <strong>Nome:</strong> {contato.nome}<br />
              <strong>Telefone:</strong> {contato.telefone}<br />
              <strong>Tem Whatsapp:</strong> {contato.temWhatsapp ? 'Sim' : 'Não'}<br />
              <strong>Observações:</strong> {contato.observacoes}
            </span>
            <div>
              <ListButton onClick={() => onEditContact(contato)}>Editar</ListButton>
              <ListButton onClick={() => onDeleteContact(contato)}>Excluir</ListButton>
            </div>
          </ListItem>
        ))}
      </ul>
    </ListWrapper>
  );
}

export default ContatoList;
