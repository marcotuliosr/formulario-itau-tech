 
// querySelector pega as tag form e fica obervando evento do botao submit
// e depois ele chama a funcao handleSubmit
document.querySelector("form").addEventListener("submit", handleSubmit, true);

async function handleSubmit(e) {
  e.preventDefault(); // retira o efeito de reload e nao faz o post padrao do submit

  try {
    const nome = document.getElementById("nome").value; // pega o valor do input do nome e coloca na variavel nome
    const cpf = document.getElementById("cpf").value;// pega o valor do input do numero e coloca na variavel numero
    const endereco = document.getElementById("endereco").value; // pega o valor do input do endereco e coloca na variavel endereco
    const numero = document.getElementById("numero").value; // pega o valor do input numero e coloca na variavel numero
    const telefone_celular = document.getElementById("telefone_celular").value; // pega o valor do input telefone_celular e coloca na variavel telefone_celular

    let erros = ""; // uma string erros para concatenar e mostrar campos que estao faltando

    if (!nome) erros += "NOME\n"; // verifica se nome esta preenchido
    if (!cpf) erros += "CPF\n"; // verifica se numero esta preenchido
    if (!endereco) erros += "ENDEREÇO\n";// verifica se endereco esta preenchido
    if (!numero) erros += "NÚMERO\n"; // verifica se numero esta preenchido
    if (!telefone_celular) erros += "TELEFONE CELULAR\n";// verifica se o celular esta preenchido

    if (erros) {// verifica se variavel erros esta preenchido
      alert("Preencha os campos obrigatórios abaixo:\n " + erros); // mostra o alerta com o texto com o valor de erros 
      return; // retorna a funcao e nao executa o que esta para baixo
    }

    const dados = { Usuário : nome,}; // pega os valores dos campos e armazena em dados

    alert(`Cadastrado com sucesso\n ${JSON.stringify(dados)}`);
     // msotra um alert com msg e dados
     limpa_formulário();
  } catch (error) {
    // cai no cath quando acontece erro
    console.log(error) // mostra o erro no console log
  } 
}

function limpa_formulário() {

  document.getElementById('nome').value = ("");
  document.getElementById('cpf').value = ("");
  document.getElementById('rg').value = ("");
  document.getElementById('sexo').value = ("");
  document.getElementById('cep').value = ("");
  document.getElementById('endereco').value = ("");
  document.getElementById('numero').value = ("");        // Função para limpar formulario apos envio  do cadastro
  document.getElementById('bairro').value = ("");
  document.getElementById('cidade').value = ("");
  document.getElementById('estado').value = ("");
  document.getElementById('telefone_fixo').value = ("");
  document.getElementById('telefone_celular').value = ("");
}