import React from 'react';
import { ListWrapper, ListItem, EditButton, DelButton } from '../List/stylesList';

function ContatoList({ contatos, onEditContact, onDeleteContact }) {
  return (
    <ListWrapper>
      <h2>Lista de Contatos</h2>
      <div>
        {contatos.map((contato, index) => (
          <ListItem key={index}>
            <span>
              <strong>Nome:</strong> {contato.nome}<br />
              <strong>Telefone:</strong> {contato.telefone}<br />
              <strong>Tem Whatsapp:</strong> {contato.temWhatsapp ? 'Sim' : 'Não'}<br />
              <strong>Observações:</strong> {contato.observacoes}
            </span>
            <div>
              <EditButton onClick={() => onEditContact(contato)}>Editar</EditButton>
              <DelButton onClick={() => onDeleteContact(contato)}>Excluir</DelButton>
            </div>
          </ListItem>
        ))}
      </div>
    </ListWrapper>
  );
}

export default ContatoList;
