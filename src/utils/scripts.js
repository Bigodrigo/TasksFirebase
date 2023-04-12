export function removeBarra(value) {
    const a = value.toString();
    const b = a.replaceAll('/','¨')
    return b
}

export function recuperaBarra(value) {
    const a = value.toString();
    const b = a.replaceAll('¨','/')
    return b
}