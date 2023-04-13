# Aplicativo de Tarefas
## (Em Andamento) - 13/04/2023
### Este Projeto é um Aplicativo Android e Web que possui um registro de contas e login pelo Firebase (banco de dados do google)!

Dentro do App podemos criar tarefas, colocar elas como concluidas e deletar! Podemos criar uma conta no banco de dados e associar as tarefas a um usuário.
Se vc quiser testar o aplicativo, basta baixar o [APK](https://github.com/Bigodrigo/testeFBAndroid/blob/main/Apk%20Donwload/application-2e09893b-2ae8-42d6-ae89-1491379693c9.apk).
Hoje ele funciona somente no Android :upside_down_face: e é necessário confirmar a instalação.

<!--  Neste momento estou adicionando os componentes no Storybook... Isso pode facilitar a visualização, talvez possa utilizar o Snack (Expo GO) ou gravar um vídeo.
~~No futuro seria interessante terminar o código para gerar um .apk e testar se o git permite deixar o arquivo...~~  -->

11/04 - Sofrendo bastante com a mudança do SDK! Neste momento estou tentando enviar para o EAS a configuração de uma build! Importante comentar que existe um guia com os passos! Talvez seja necessário seguir ele, pq as configs são diferentes dos SDKs anteriores!
Tbm acho relevante comentar q duranto a build, o expo doctor reclamou dos packages  @expo/config-plugins, uma solução é substituir o "overrides"!
OUtra questão é o expo update, tem q criar o config?!
Consegui fazer o apk finalizado!

12/04 - O Firebase não lida tão bem com Barras(/), o banco interpreta como um caminho, então abre pastas dentro de pastas, adicionei um script para substituir!
O que falta:
- [x] ~~Resolver o Fetch sem botão!~~
- [x] Arrumar o Ícone!
- [x] Adicionar as informações restritas como FB no gitignore?
- [ ] * Melhorar as informações sobre cada função e variável!
        * Rever algumas páginas como o Routes, precisa ou n está sendo usado!
        * ~~Login, recuperar a mensagem funciona? E os Erros?!~~

O que poderia ser melhorado?
* O tratamento dos erros, quando o usuário não existe não fica tão claro....
* Percebi que dependendo do celular o teclado fica em cima do input!