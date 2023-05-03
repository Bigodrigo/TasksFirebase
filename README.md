# Aplicativo de Tarefas
## (Finalizado) - 14/04/2023
### Este Projeto é um Aplicativo Android e Web que possui um registro de contas e login pelo Firebase (banco de dados do google)!

## Sobre o App!

<div align="center">
<img src="/src/assets/App.gif" width="270" height="555">
</div>

Dentro do App podemos criar tarefas, colocar elas como concluidas e deletar! Podemos criar uma conta no banco de dados e associar as tarefas a um usuário.
Se vc quiser testar o aplicativo, basta baixar o [APK](https://github.com/Bigodrigo/testeFBAndroid/blob/main/Apk%20Donwload/application-02c63002-b602-486e-9fac-ac6f36c2bad4.apk).
Hoje ele funciona somente no Android :upside_down_face: e é necessário confirmar a instalação.
É possível ajustar para web, mas durante as atualizações do Expo me concentrei mais em deixar na forma Mobile, outros projetos no git são focados em Web!

<!--  Neste momento estou adicionando os componentes no Storybook... Isso pode facilitar a visualização, talvez possa utilizar o Snack (Expo GO) ou gravar um vídeo.
~~No futuro seria interessante terminar o código para gerar um .apk e testar se o git permite deixar o arquivo...~~  -->

<!--  11/04 - Sofrendo bastante com a mudança do SDK! Neste momento estou tentando enviar para o EAS a configuração de uma build! Importante comentar que existe um guia com os passos! Talvez seja necessário seguir ele, pq as configs são diferentes dos SDKs anteriores!
Tbm acho relevante comentar q duranto a build, o expo doctor reclamou dos packages  @expo/config-plugins, uma solução é substituir o "overrides"!
OUtra questão é o expo update, tem q criar o config?!
Consegui fazer o apk finalizado! -->


<!--  12/04 - O Firebase não lida tão bem com Barras(/), o banco interpreta como um caminho, então abre pastas dentro de pastas, adicionei um script para substituir! -->
###  O que falta:
- [x] ~~Resolver o Fetch sem botão!~~
- [x] Arrumar o Ícone!
- [x] ~~Adicionar as informações restritas como FB no gitignore?~~
- [x] Melhorar as informações sobre cada função e variável!
- [x] ~~Rever algumas páginas como o Routes, precisa ou n está sendo usado!~~
- [x] ~~Login, recuperar a mensagem funciona? E os Erros?!~~

### O que poderia ser melhorado?
* O tratamento dos erros, quando o usuário não existe não fica tão claro....
* Percebi que dependendo do celular o teclado fica em cima do input!

### Como eu posso testar?
Bom existem 2 formas!
A mais simples e recomendada é baixar o apk, instalar e criar uma conta, vc pode usar um email real, até para testar "Esqueci minha senha", ou usar a conta teste:
Usuário: teste@teste.com
Senha: 123456
Como o App não é oficial e não passa pelas Stores o seu android vai colocar como App Suspeito, mas não se preocupe eu não sei ~~(Ainda)~~ mexer em dados sensíveis! :smiling_imp:

Se vc possui o Visual Studio Code instalado e o Android Studio, pode baixar o repositório, instalar os pacotes e rodar internamente! Dessa forma vc pode inclusive alterar as coisas
Nesse caso basta fazer o clone do git, usar npm install, abrir o emulador de celular e rodar npx expo start selecionando a opção android!
SUUUPER recomendo esse caso, mas isso depende de um conhecimento maior de TI!

**Fico muito feliz com qualquer comentário e espero que vc ache interessante o app, qualquer coisa fico a disposição!**

Algumas referências que foram usadas nesse projeto:
Playlist utilizada para iniciar o projeto: https://www.youtube.com/playlist?list=PLSdWzeBQ3csG_Gp9PfTNct0WDZr0qYB3z
Vídeo RocketSeat sobre Yup-React: https://www.youtube.com/watch?v=JEKZc_rkqgc
Expo (documentos sobre a plataforma que permite construir Apps e Web): https://docs.expo.dev/
NativeBase (biblioteca de front/design): https://nativebase.io/