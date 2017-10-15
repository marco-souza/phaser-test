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
/* global __dirname */
const
    config  = require("common-config"),
    gulp    = require("gulp"),
    pug     = require("gulp-pug"),
    connect = require("gulp-connect")

/** Connect to a Web Serer */
gulp.task("connect", () => {
    const serverOpts = {
        root: config.src.dist,
        livereload: true
    }
    connect.server(serverOpts);
})

/** pug reload */
gulp.task('pug', () => {
    console.log(config);
    return gulp.src(config.src.pug.path)
        .pipe(pug(config.src.pug.opts))
        .pipe(gulp.dest( config.src.dist ))
        .pipe(connect.reload());
});

/** Watch */
gulp.task('watch', () => {
    gulp.watch([config.src.pug.path], ['pug']); // Pug Watcher
});

/** Watch */
gulp.task('default', ['connect', 'watch']);
```

### Instalando Phaser

Agora precisamos instalar o Phaser na ultima versão estável. Para isso vamos utilizar o **yarn**:

```bash
yarn add phaser-ce@2.9.1
```

### Instalando PUG

Vamos instalar a biblioteca `pug`, para tornar a escrita de html menos massante:

```bash
yarn add --dev gulp-pug
```

Vamos instalar também um pacote para abstrair as configurações na pasta `./config` usando o comando:

```bash
yarn add --dev http://github.com/nosebit/common-config.git
```

Agora vamos criar um arquivo `config/default.yml` com o seguinte conteudo:

```yml
# Source Configuration
src:
  dist: dist/
  app: dist/app/
  pug:
    path: src/*.pug
    opts:
      locals:
        title: Phaser Test
```

Agora crie seu arquivo `/src/index.pug` contendo:

```jade
<!DOCTYPE html>
html(lang="pt-BR")
    head
        meta(charset="UTF-8")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        meta(http-equiv="X-UA-Compatible", content="ie=edge")
        title #{title}
    body

        H1 Teste
```

### Test

Agora tente rodar o gulp e acessar o servidor gerado

```bash
gulp
```