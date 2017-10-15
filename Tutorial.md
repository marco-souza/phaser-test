# Get Starting - Phaser 5.0

Esse tutorial irá ajudar no estudo sobre Phaser JS, uma biblioteca JavaScript voltada para desenvolvimento de jogos para plataforma web, utilizando **HTML 5 Canvas** e **WebGL**.


## Vamos precisar de um servidor web

Talvez você pense:

> Porque eu preciso de um servidor web? Porque não posso apenas jogar os arquivos HTML no meu browser?

JavaScript no navegador **não tem permissões** para acessar diretamente **arquivos locais** em seu computador, por razões óbvias.

Imagine se ele pudesse carregar qualquer arquivo de sua maquina sem um "intermediador"? O que impediria seus dados de serem enviados a qualquer servidor externo?

Portanto, por segurança, seus jogos só poderão carregar **arquivos locais** por meio de um `protocolo`.

### Protocolos ?

Protocolos de comunicações são como **"regras" pre estabelicidas** de como as informações serão **solicitadas e respondidas**.

Quando requisitamos alguma informação na web, utilizamos o protocolo `http://`. Esse protocolo estabelece niveis de acesso e segurança para os arquivos disponíveis que **serão estabelecidas por você**.

Quando você abre um arquivo diretamente em seu browser, ele utiliza o protocolo `file://`. Esse protocolo estabelece uma série de limitações por abrir apenas um `raw file`.

No seu jogo você precisa carregar recursoso de imagem, audio, dados, ou até mesmo JavaScript files. Para isso você precisa de segurança utilizando um servidor `http://` para acessar os arquivos do jogo. E para isso nos precisar de um servidor web.

## Instalando um servidor web

Como pretendemos fazer um projeto multiplataforma, ou seja, que rode em qualquer máquina, utilizaremos ferramentas baseadas em JavaScript.

Para criar nosso servidor local precisamos de instalar o **NodeJS** com **npm**, o seu gerenciador de pacotes. Acesse www.nodejs.org e veja como fazer a instalação para seu sistema operacional

### Inicializar o projeto

Para inicializar um projeto, cria uma pasta, acesse o terminal e digite:

```
npm install -g yarn
yarn init
```

Utilizaremos a princípio o módulo `http-server` para NodeJS. mas com o decorrer do tudorial iremos mudar para uma tarefa do `gulp` com o plugin `gulp-connect`.

Vamos instalar todas essas dependencias:

```
yarn add --dev http-server gulp gulp-connect
```

