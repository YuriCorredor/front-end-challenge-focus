<h1>Front-end Challenge</h1>

Visite o site [AQUI](https://front-end-challenge-focus.vercel.app/).

<h2>Desafio: criar uma tela que consuma a API de CEPs de forma que um usuário leigo possa investigar as possibilidades que a API fornece.</h2>

<h3>Qual foi seu maior desafio na solução deste problema?</h3>

<p>Conceitualizar e desenvolver um Design que fizesse sentido com a identidade visual da empresa foi desafiante, assim como utilizar os blocos de código, coisa que nunca havia feito antes e que acabei por utilizar uma biblioteca. Usar a API deles, apesar de nunca tê-lo feito antes, foi uma das etapas mais fáceis de todo o processo devido à ótima documentação disponibilizada por eles. O que me foi mais desafiador foi pensar em como realizar o desafio mantendo em mente quem seria o usuário final. Caso se tratasse de um trabalho, quem seria o usuário final do site? Essa foi a minha pergunta durante todo o processo de desenvolvimento. Nesse caso, imaginei um potencial cliente da Focus, e fiz um site orientado a isso.</p>

<br>

<h3>Tecnologias usadas</h3>
<ul>
    <li>
        Next.js
        <ul>
            <li>
                Renderização no servidor - Server Side Rendering - SSR
            </li>
            <li>
                Importe Dinâmico
            </li>
            <li>
                Otimização de imagens
            </li>
            <li>
                Indexação fácil nos mecanismos de busca (SEO)
            </li>
            <li>
                Usabilidade imediata de rotas
            </li>
        </ul>
    </li>
    <li>
        Tailwind
        <ul>
            <li>
                Desenvolvimento mais rápido de componentes
            </li>
            <li>
                Não precisa nomear classes 🙏
            </li>
        </ul>
    </li>
    <li>
        API FOCUS NFe
        <ul>
            <li>
                Documentação completa de todos os serviços fornecidos
            </li>
            <li>
                Fácil de usar e integração super simples
            </li>
            <li>
                Respostas rápidas para as requisições
            </li>
        </ul>
    </li>
</ul>

<br>
<br>

<h1>Execute localmente</h1>

<p>Este projeto usa, como explicitado acima, a API da FOCUS NFe. Para que o projeto funcione corretamente, é necessário ter uma chave. Trata-se de uma API muito poderosa e é o serviço fornecido pela empresa, portanto é paga.</p>

<br>


```bash
git clone https://github.com/YuriCorredor/front-end-challenge-focus.git
cd front-end-challenge-focus
# instale as dependências
npm install
# ou
yarn install
```

<br>

<p>Antes de iniciar o servidor, é necessário inserir a sua chave da API no arquivo .env.local, caso contrário os requests à API retornarão com erro e o APP não funcionará como deveria.</p>


```bash
# No arquivo .env.local, altere o campo com a sua chave
ACCESS_TOKEN=YOUR_ACCEESS_TOKEN
```

<br>

<p>Agora basta executar o servidor local.</p>

```bash
npm run dev
# ou
yarn dev
```

<br>
<br>

<h1>Visão geral do aplicativo</h1>

Visite o site [AQUI](https://front-end-challenge-focus.vercel.app/).

![APP-OVERVIEW](/public/overview.png)