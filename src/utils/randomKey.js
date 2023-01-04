export function randomKey() {
    let randomKey = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i< 30; i++) {
        randomKey += characters.charAt(Math.floor(Math.random() * characters.length));
    };
    return randomKey;
};