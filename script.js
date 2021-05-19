function is_cpf(c) {

  if ((c = c.replace(/[^\d]/g, "")).length != 11) // Pegar 14 caracteres incluso pontos , nada alem disso                    //O método replace() retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres). O padrão pode ser uma string ou uma RegExp, e a substituição pode ser uma string ou uma função a ser chamada para cada correspondência. Se o padrão for uma string, apenas a primeira ocorrência será substituída.
    
  // valida o cpf
    return false

  if (c == "00000000000")// Validar CPF Falso
    return false;

  if (c == "11111111111")// Validar CPF Falso
    return false;

  if (c == "22222222222")// Validar CPF Falso
    return false;

  if (c == "33333333333")// Validar CPF Falso
    return false;

  if (c == "44444444444")// Validar CPF Falso
    return false;

  if (c == "55555555555")// Validar CPF Falso
    return false;

  if (c == "66666666666")// Validar CPF Falso
    return false;

  if (c == "77777777777")// Validar CPF Falso
    return false;

  if (c == "88888888888")// Validar CPF Falso
    return false;

  if (c == "99999999999")// Validar CPF Falso
    return false;

  var r; // Variavel Resto
  var s = 0; // Variavel de incrimento

  for (i = 1; i <= 9; i++)
    s = s + parseInt(c[i - 1]) * (11 - i);                        //parseInt =  A função parseInt() analisa um argumento string e retorna um inteiro na base especificada

  r = (s * 10) % 11; // multiplica resulado soma por 10 e dividide por 11

  if ((r == 10) || (r == 11))
    r = 0;

  if (r != parseInt(c[9]))
    return false;

  s = 0;

  for (i = 1; i <= 10; i++)
    s = s + parseInt(c[i - 1]) * (12 - i);

  r = (s * 10) % 11; // multiplica resulado soma por 10 e dividide por 11


  if ((r == 10) || (r == 11))
    r = 0;

  if (r != parseInt(c[10]))
    return false;

  return true; // Caso todo algortimo rode , retornar verdadeiro
}


function fMasc(objeto, mascara) {
  // settimeout
  obj = objeto
  masc = mascara
  setTimeout("fMascEx()", 1)
}

function fMascEx() {
  obj.value = masc(obj.value)
}

function mCPF(cpf) {
  cpf = cpf.replace(/\D/g, "")
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
  return cpf
}

cpfCheck = function (el) {

  if (!is_cpf(el.value)) { // verifica se tem valor
    alert(`CPF é invalido`) // alert cpf invalido
    document.getElementById('cpf').value = '';
  }
  else if (!el.value) alert(`Campo obrigatorio preencha esse campo`) // verifica se nao tem valor e exibe uma mensamgem
}

//-------------------------------------------------


function fMasc(objeto, mascara) {
  obj = objeto
  masc = mascara
  setTimeout("fMascEx()", 1)
}

function fMascEx() {
  obj.value = masc(obj.value)
}

function mCPF(cpf) {
  cpf = cpf.replace(/\D/g, "") //Remove tudo o que não é dígito
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
  return cpf
}


//---------------------------------------------------------------------------------------
function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('cep').value = ("");
  document.getElementById('endereco').value = ("");
  document.getElementById('bairro').value = ("");
  document.getElementById('cidade').value = ("");
  document.getElementById('estado').value = ("");

}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('endereco').value = (conteudo.logradouro);
    document.getElementById('bairro').value = (conteudo.bairro);
    document.getElementById('cidade').value = (conteudo.localidade);
    document.getElementById('estado').value = (conteudo.uf);

  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {

  var cep = valor.replace(/\D/g, '');
  //Nova variável "cep" somente com dígitos.


  if (cep != "") { //Verifica se campo cep possui valor informado.


    var validacep = /^[0-9]{8}$/; // Expressão RegEx para validar CEP

    //Valida o formato do CEP.
    if (validacep.test(cep)) {

      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById('endereco').value = "...";
      document.getElementById('bairro').value = "...";
      document.getElementById('cidade').value = "...";
      document.getElementById('estado').value = "...";


      //Cria um elemento javascript.
      var script = document.createElement('script');

      //Sincroniza com o callback.
      script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);

    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
};

//-------------------------------------------------------------------


function mascara(o, f) {
  v_obj = o
  v_fun = f
  setTimeout("execmascara()", 1)
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value)
}
function mtel(v) {

  v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id(el) {
  return document.getElementById(el);
}
window.onload = function () {
  // id('telefone').onkeyup = function () {
  //   mascara(this, mtel);
  // }
}
