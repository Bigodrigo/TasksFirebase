# Aplicativo de Tarefas
## (Finalizado) - 16/05/2023
### Este Projeto é um Aplicativo Android e Web que possui um registro de contas e login pelo Firebase (banco de dados do google).

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript e JSON
- React, React Native, Native Base
- [Expo](https://docs.expo.dev/)
- [Firebase](https://firebase.google.com/docs?hl=pt-br)
- [Node e NPM](https://nodejs.org/)

## 💻 Projeto

Dentro do App podemos criar tarefas, colocar elas como concluidas e deletar. Podemos criar uma conta no banco de dados e associar as tarefas a um usuário.
Se vc quiser testar o aplicativo, basta baixar o [APK](https://github.com/bigodrigo/TasksFirebase/blob/main/Apk%20Donwload/application-02c63002-b602-486e-9fac-ac6f36c2bad4.apk).
Hoje ele funciona somente no Android :upside_down_face: e é necessário confirmar a instalação.
É possível ajustar para web, mas durante as atualizações do Expo me concentrei mais em deixar na forma Mobile, outros projetos no git são focados em Web!

## 🔖 Layout

<div align="center">
<img src="/src/assets/App.gif" width="270" height="555">
</div>

### Como eu posso testar?
Bom existem 2 formas!
A mais simples e recomendada é baixar o apk, instalar e criar uma conta, vc pode usar um email real, até para testar "Esqueci minha senha", ou usar a conta teste:
Usuário: teste@teste.com
Senha: 123456

Se vc possui o Visual Studio Code instalado e o Android Studio, pode baixar o repositório, instalar os pacotes e rodar internamente! Dessa forma vc pode inclusive alterar as coisas
Nesse caso basta fazer o clone do git, usar npm install, abrir o emulador de celular e rodar npx expo start selecionando a opção android!
SUUUPER recomendo esse caso, mas isso depende de um conhecimento maior de TI!

### O que poderia ser melhorado?
* O tratamento dos erros (quando o usuário não existe não fica tão claro...);
* A responsividade dependendo do tamanho do celular;
* As informações sobre cada função e variável;
* Ajustar o Ícone.

**Fico muito feliz com qualquer comentário e espero que vc ache interessante o app, qualquer coisa fico a disposição!**

### Algumas referências que foram usadas nesse projeto:
* [Playlist utilizada para iniciar o projeto](https://www.youtube.com/playlist?list=PLSdWzeBQ3csG_Gp9PfTNct0WDZr0qYB3z)
* [Vídeo RocketSeat sobre Yup-React](https://www.youtube.com/watch?v=JEKZc_rkqgc)
* [Expo (documentos sobre a plataforma que permite construir Apps e Web)](https://docs.expo.dev/)
* [NativeBase (biblioteca de front/design)](https://nativebase.io/)
