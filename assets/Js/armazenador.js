window.onload = () => {
  // carrega o ultimo identificador de usuário usado
  tiposenha1.value = localStorage.getItem('tiposenha1');
  senha1.value = localStorage.getItem('senha1');
  descricao_senha_1.value = localStorage.getItem('descricao_senha_1')

  tiposenha2.value = localStorage.getItem('tiposenha2');
  senha2.value = localStorage.getItem('senha2');
  descricao_senha_2.value = localStorage.getItem('descricao_senha_2')

  // loga o usuário e registra o seu identificador
  login.onsubmit = (evento) => {
      localStorage.setItem('tiposenha1', tiposenha1.value);
      localStorage.setItem('senha1', senha1.value);
      localStorage.setItem('descricao_senha_1', descricao_senha_1.value);

      localStorage.setItem('tiposenha2', tiposenha2.value);
      localStorage.setItem('senha2', senha2.value);
      localStorage.setItem('descricao_senha_2', descricao_senha_2.value);
      alert(`Senhas Cadastradas.`);
      evento.preventDefault();
  };

  apagarTudo.onsubmit = (evento) => {
    localStorage.clear();
    alert(`As senhas foram apagadas.`)
    document.location.reload(true);
    evento.preventDefault();
  };

  apagarPrimeiro.onsubmit = (evento) => {
    localStorage.removeItem('tiposenha1');
    localStorage.removeItem('senha1');
    localStorage.removeItem('descricao_senha_1');
    alert(`Primeiro campo foi apagado.`);
    document.location.reload(true);
    evento.preventDefault();
  };

  apagarSegundo.onsubmit = (evento) => {
    localStorage.removeItem('tiposenha2');
    localStorage.removeItem('senha2');
    localStorage.removeItem('descricao_senha_2');
    alert(`Segundo campo foi apagado.`);
    document.location.reload(true);
    evento.preventDefault();
  };
};