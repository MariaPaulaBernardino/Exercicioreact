import React, { useState, useEffect } from 'react';
import { FormWrapper, FormInput, FormButton, ClearButton } from '../Form/stylesForm';

function ContatoForm({ onAddContact, contatoEmEdicao, setContatoEmEdicao, onSaveContact }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [temWhatsapp, setTemWhatsapp] = useState(false);
  const [observacoes, setObservacoes] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (contatoEmEdicao) {
      setNome(contatoEmEdicao.nome);
      setTelefone(contatoEmEdicao.telefone);
      setTemWhatsapp(contatoEmEdicao.temWhatsapp);
      setObservacoes(contatoEmEdicao.observacoes);
    } else {
      setNome('');
      setTelefone('');
      setTemWhatsapp(false);
      setObservacoes('');
    }
  }, [contatoEmEdicao]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome.trim() === '' || telefone.trim() === '') {
      setError('Nome e telefone são campos obrigatórios.');
      return; 
    }

    const newContact = {
      nome,
      telefone,
      temWhatsapp,
      observacoes,
    };

    if (contatoEmEdicao) {
      onSaveContact(newContact);
    } else {
      onAddContact(newContact);
    }

    setNome('');
    setTelefone('');
    setTemWhatsapp(false);
    setObservacoes('');
    setContatoEmEdicao(null);
    setError(''); 
  };

  const reset = () => {
    setNome('');
    setTelefone('');
    setTemWhatsapp(false);
    setObservacoes('');
    setError(''); 
  };

  return (
    <FormWrapper>
      <h2>{contatoEmEdicao ? 'Editar Contato' : 'Adicionar Contato'}</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <FormInput
          type="number"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <label>
          Tem Whatsapp:
          <FormInput
            type="checkbox"
            checked={temWhatsapp}
            onChange={() => setTemWhatsapp(!temWhatsapp)}
          />
        </label>
        <FormInput
          type="text"
          placeholder="Observações"
          value={observacoes}
          onChange={(e) => setObservacoes(e.target.value)}
        />
        <FormButton type="submit">{contatoEmEdicao ? 'Salvar' : 'Adicionar'}</FormButton>
        <ClearButton type="reset" onClick={reset}>Limpar</ClearButton>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </FormWrapper>
  );
}

export default ContatoForm;
