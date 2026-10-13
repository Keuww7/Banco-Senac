// 1. Dados em Memória
const clientes = [
    { cpf: "111.222.333-44", senha: "123", nome: "Dennis Lopes", saldo: 5000 },
    { cpf: "222.333.444-55", senha: "123", nome: "Nicolas Silva", saldo: 1500 },
    { cpf: "333.444.555-66", senha: "123", nome: "Ana Maria", saldo: 3000 },
    { cpf: "444.555.666-77", senha: "123", nome: "Bruno Costa", saldo: 500 },
    { cpf: "555.666.777-88", senha: "123", nome: "Carla Souza", saldo: 10000 }
];

let usuarioLogado = null;

// 2. Seleção de Elementos (DOM)
const secaoLogin = document.querySelector('#login-section');
const secaoCadastro = document.querySelector('#cadastro-section');
const secaoSucesso = document.querySelector('#sucesso-section');
const secaoPainel = document.querySelector('#painel-section');

const campoSaldo = document.querySelector('#saldo-valor');
const boasVindas = document.querySelector('#boas-vindas');
const loginErro = document.querySelector('#login-erro');

// 3. Alternância entre Telas (Login <-> Cadastro)
document.querySelector('#link-ir-cadastro').addEventListener('click', (e) => {
    e.preventDefault();
    secaoLogin.style.display = 'none';
    secaoCadastro.style.display = 'block';
});

document.querySelector('#link-voltar-login').addEventListener('click', (e) => {
    e.preventDefault();
    secaoCadastro.style.display = 'none';
    secaoLogin.style.display = 'block';
});

// 4. Eventos de Login
document.querySelector('#btn-login').addEventListener('click', () => {
    const cpfDigitado = document.querySelector('#input-cpf').value.trim();
    const senhaDigitada = document.querySelector('#input-senha').value.trim();

    const clienteEncontrado = clientes.find(c => c.cpf === cpfDigitado && c.senha === senhaDigitada);

    if (clienteEncontrado) {
        usuarioLogado = clienteEncontrado;
        loginErro.style.display = 'none';
        secaoLogin.style.display = 'none';
        secaoPainel.style.display = 'block';

        campoSaldo.textContent = `R$ ${usuarioLogado.saldo.toFixed(2)}`;
        boasVindas.textContent = `Olá, ${usuarioLogado.nome}`;
    } else {
        loginErro.style.display = 'block';
    }
});

// 5. Lógica de Submissão de Cadastro (Onde aplicaremos as RegEx)
document.querySelector('#form-cadastro').addEventListener('submit', (e) => {
    e.preventDefault();

    // TODO: Os alunos vão validar os campos com RegEx e conferir se as senhas coincidem.
    // Após a validação com sucesso, transita para a tela de análise:
    secaoCadastro.style.display = 'none';
    secaoSucesso.style.display = 'block';
});

// 6. Botão para voltar ao início a partir da tela de sucesso
document.querySelector('#btn-voltar-inicio').addEventListener('click', () => {
    location.reload();
});

// 7. Operações Bancárias (Espaço reservado para as próximas aulas / API)
document.querySelector('#btn-depositar').addEventListener('click', () => { });
document.querySelector('#btn-sacar').addEventListener('click', () => { });
document.querySelector('#btn-transferir').addEventListener('click', () => { });

document.querySelector('#btn-sair').addEventListener('click', () => {
    location.reload();
});