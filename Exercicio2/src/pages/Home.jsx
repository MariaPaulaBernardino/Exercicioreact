import React, { useState } from 'react';
import ContatoForm from '../components/Form/ContatoForm';
import ContatoList from '../components/List/ContatoList';
import { GlobalStyle } from '../global/globalStyle';

function Home() {
  const [contatos, setContatos] = useState([]);
  const [contatoEmEdicao, setContatoEmEdicao] = useState(null);

  const handleAddContact = (newContact) => {
    if (contatoEmEdicao) {
      const updatedContatos = contatos.map((contato) =>
        contato === contatoEmEdicao ? newContact : contato
      );
      setContatos(updatedContatos);
      setContatoEmEdicao(null);
    } else {
      setContatos([...contatos, newContact]);
    }
  };

  const handleEditContact = (contactToEdit) => {
    setContatoEmEdicao(contactToEdit);
    const updatedContatos = contatos.filter((contato) => contato !== contactToEdit);
    setContatos(updatedContatos);
  };

  const handleDeleteContact = (contactToDelete) => {
    const updatedContatos = contatos.filter((contato) => contato !== contactToDelete);
    setContatos(updatedContatos);
  };

  const handleSaveContact = (editedContact) => {
    setContatos([...contatos, editedContact]); 
    setContatoEmEdicao(null);
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <ContatoForm onAddContact={handleAddContact} contatoEmEdicao={contatoEmEdicao} setContatoEmEdicao={setContatoEmEdicao} onSaveContact={handleSaveContact} />
        <ContatoList
          contatos={contatos}
          onEditContact={handleEditContact}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </>
  );
}

export default Home;
