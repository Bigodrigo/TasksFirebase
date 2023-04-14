export function randomKey() {
    //Essa key é importante para gerar ids únicos, facilitando as funções de map dentro do JS, tbm garantem uma id no BD!
    let randomKey = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i< 30; i++) {
        randomKey += characters.charAt(Math.floor(Math.random() * characters.length));
    };
    return randomKey;
};