export function removeBarra(value) {
    //Importante para ajustar o envio da mensagem para o BD!
    const a = value.toString();
    const b = a.replaceAll('/','¨')
    return b
}

export function recuperaBarra(value) {
    //Importante para ajustar o recebimento da mensagem para o BD!
    const a = value.toString();
    const b = a.replaceAll('¨','/')
    return b
}