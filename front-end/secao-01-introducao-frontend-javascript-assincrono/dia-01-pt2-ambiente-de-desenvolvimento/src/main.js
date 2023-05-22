import validator from 'validator';

const validateBtn = document.getElementById('validate-button');

const testaTipos = (string) => {
  const tipo = document.getElementById('select-info').value;
  switch (tipo) {
  case 'nome':
    return validator.isAlpha(string);

  case 'email':
    return validator.isEmail(string);

  case 'cpf':
    return validator.isTaxID(string, 'pt-BR');

  case 'sexo':
    return validator.equals(string, 'masculino') || validator.equals(string, 'feminino');

  case 'site':
    return validator.isURL(string);

  default:
    console.log('opção invalida');
  }
};

const validaCampos = () => {
  const input = document.getElementById('input-info').value;
  const resposta = document.getElementById('resposta');
  const respostaPositiva = 'A validação retornou true';
  const respostaNegativa = 'A validação retornou false';
  if (validator.isEmpty(input)) {
    resposta.innerText = 'Por favor, preencha a informação';
  } else {
    resposta.innerText = testaTipos(input) ? respostaPositiva : respostaNegativa;
  }
};

validateBtn.addEventListener('click', validaCampos);
