Реализация концепции символов в JavaScript/Node.js (пока поддерживается только Node.js).
API.

TSymbol(<sym_name>);
Функция TSymbol возвращает объект ассоциированный с указаным именем <sym_name>.
Гарантируется, что объекты с одинаковым именем будут идентичны.

TSymbol.gensym()
Генерация уникального символа для текущего приложения.

TSymbol.globalGensym()
Генерация глобального уникального символа.

