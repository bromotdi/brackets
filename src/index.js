module.exports = check = (str, bracketsConfig) => {
    const bracket = new Map(bracketsConfig); // Создаем коллекцию из пар скобок для удобного поиска
    const array = [];
    for (const i of str) {
        (bracket.get(array.at(-1)) === i) ? array.pop(): array.push(i);
        // Если пара последнего символа в стеке тот же что и в строке на данный момент
        // удаляем его или добавляем в конец стека
    }
    return array.length === 0; // В конце проверяем пустой ли у нас стек
}
