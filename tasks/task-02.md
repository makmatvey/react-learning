# Задача 02 — День 2: деструктуризация и spread

**Время:** ~45–60 мин (после 10–15 мин теории в чате).  
**Файл:** `tasks/task-02.mjs`

## Цель

Закрепить **деструктуризацию** (объект, вложенность, массив, значения по умолчанию, `...rest`) и **spread** при сборке объектов — без React.

## Условие

В `task-02-data.mjs` лежат заказы `orders`. Реализуй функции в `task-02.mjs`:

1. **`getCity(order)`** — через деструктуризацию верни `customer.city` (без `order.customer.city` в return).
2. **`orderLabel(order)`** — достань `id` и `status`, верни строку `` `#${id} [${status}]` ``.
3. **`customerLine(order)`** — вложенная деструктуризация: `customer: { firstName, lastName }`, строка `` `${firstName} ${lastName}` ``.
4. **`firstItemTitle(order)`** — из `items` верни `title` **первого** товара; если `items` пустой — `null`.
5. **`totalItemsQty(order)`** — `reduce` по `items`: сумма полей `qty`.
6. **`mergeCustomerDefaults(partial)`** — в параметре деструктурируй `{ firstName = 'Гость', lastName = '', ...extra }`, верни `{ firstName, lastName, country: 'BY', ...extra }` (spread `extra` в конце).
7. **`swapFirstTwoItemTitles(order)`** — если меньше 2 позиций: верни `items[0].title` или `''`. Иначе **деструктуризация массива** заголовков: `const [a, b, ...rest] = items.map(...)`, верни `` `${b} | ${a}${rest.length ? ' | ' + rest.join(' | ') : ''}` ``.

Запуск:

```bash
node tasks/task-02.mjs
```

Ожидание: `Все проверки пройдены ✅`

## Критерии готовности

- [ ] В `getCity` / `customerLine` / `orderLabel` нет цепочки `order.customer....` в return (только в деструктуризации).
- [ ] `mergeCustomerDefaults` использует **значение по умолчанию** для `firstName`.
- [ ] `swapFirstTwoItemTitles` использует **деструктуризацию массива**.
- [ ] `node tasks/task-02.mjs` без ошибок.
- [ ] Коммит: `task-02: destructuring drills`

## Если застрял

**«застрял»** — 3 наводящих вопроса. **«покажи решение»** — полный разбор.
