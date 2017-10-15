# Get Starting - Phaser 5.0

Esse tutorial irá ajudar no estudo sobre Phaser JS, uma biblioteca JavaScript voltada para desenvolvimento de jogos para plataforma web, utilizando **HTML 5 Canvas** e **WebGL**.

## Configurando o Ambiente de Desenvolvimento

### Vamos precisar de um servidor web

Talvez você pense:

> Porque eu preciso de um servidor web? Porque não posso apenas jogar os arquivos HTML no meu browser?

JavaScript no navegador **não tem permissões** para acessar diretamente **arquivos locais** em seu computador, por razões óbvias.

Imagine se ele pudesse carregar qualquer arquivo de sua maquina sem um "intermediador"? O que impediria seus dados de serem enviados a qualquer servidor externo?

Portanto, por segurança, seus jogos só poderão carregar **arquivos locais** por meio de um `protocolo`.

#### Protocolos

Protocolos de comunicações são como **"regras" pre estabelicidas** de como as informações serão **solicitadas e respondidas**.

Quando requisitamos alguma informação na web, utilizamos o protocolo `http://`. Esse protocolo estabelece niveis de acesso e segurança para os arquivos disponíveis que **serão estabelecidas por você**.

Quando você abre um arquivo diretamente em seu browser, ele utiliza o protocolo `file://`. Esse protocolo estabelece uma série de limitações por abrir apenas um `raw file`.

No seu jogo você precisa carregar recursoso de imagem, audio, dados, ou até mesmo JavaScript files. Para isso você precisa de segurança utilizando um servidor `http://` para acessar os arquivos do jogo. E para isso nos precisar de um servidor web.

### Instalando um servidor web

Como pretendemos fazer um projeto multiplataforma, ou seja, que rode em qualquer máquina, utilizaremos ferramentas baseadas em JavaScript.

Para criar nosso servidor local precisamos de instalar o **NodeJS** com **npm**, o seu gerenciador de pacotes. Acesse www.nodejs.org e veja como fazer a instalação para seu sistema operacional

### Inicializar o projeto

Para inicializar um projeto, cria uma pasta, acesse o terminal e digite:

```bash
npm install -g yarn
yarn init
```

Utilizaremos o `gulp` para criar tarefas e uma delasusará o plugin `gulp-connect` para criar um servidor web.

Vamos instalar todas essas dependencias:

```bash
yarn add --dev gulp gulp-connect
```

Agora crie um arquivo `gulpfile.js` e escreva:

```jsx
const
    gulp = require("gulp"),
    connect = require("gulp-connect")

/** Connect to a Web Serer */
gulp.task("connect", () => {
    const serverOpts = {
        root: 'dist',
        livereload: true
    }
    connect.server(serverOpts);
})

/** html reload */
gulp.task('html', () => {
    gulp.src('./dist/*.html')
        .pipe(connect.reload());
});

/** Watch */
gulp.task('watch', function () {
    gulp.watch(['./dist/*.html'], ['html']);
});

/** Default */
gulp.task('default', ['connect', 'watch']);
```

### Instalando Phaser

Agora precisamos instalar o Phaser na ultima versão estável. Para isso vamos utilizar o **yarn**:

```bash
yarn add phaser-ce@2.9.1
```
