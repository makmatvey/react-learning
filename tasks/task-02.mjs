import { orders } from "./task-02-data.mjs";

// --- Реализуй функции ---

export function getCity(order) {
  const {
    customer: { city },
  } = order;

  return city;
}

export function orderLabel(order) {
  // TODO: id, status
  const { id, status } = order;

  return `#${id} [${status}]`;
}

export function customerLine(order) {
  const {
    customer: { firstName, lastName },
  } = order;

  return `${firstName} ${lastName}`;
}

export function firstItemTitle(order) {
  const { items } = order;

  if (items.length === 0) {
    return null;
  }

  const first = items[0];
  const { title } = first;

  return title === undefined ? null : title;
}

export function totalItemsQty(order) {
  const { items } = order;

  return items.reduce((sum, item) => sum + item.qty, 0);
}

export function mergeCustomerDefaults(partial) {
  // TODO: firstName = 'Гость', lastName = '', ...extra

  const { firstName = "Гость", lastName = "", ...extra } = partial;

  return { firstName, lastName, country: "BY", ...extra };
}

export function swapFirstTwoItemTitles(order) {
  // TODO: array destructure двух первых title

  const { items } = order;

  if (items.length < 2) {
    return items[0]?.title ?? "";
  }
  const titles = items.map(({ title }) => title);

  const [b, a, ...rest] = titles;

  return `${a} | ${b}`;
}

function runChecks() {
  const o1 = orders[0];

  const city = getCity(o1);
  if (city === undefined) {
    throw new Error(
      "getCity: реализуй функцию — ожидается строка (деструктуризация customer.city)",
    );
  }
  if (typeof city !== "string") {
    throw new Error(
      "getCity: ожидается строка (деструктуризация customer.city)",
    );
  }

  const label = orderLabel(o1);
  if (label === undefined) {
    throw new Error(
      "orderLabel: реализуй функцию — ожидается строка `#id [status]`",
    );
  }
  if (label !== "#101 [paid]")
    throw new Error("orderLabel: ожидается #101 [paid]");

  const line = customerLine(o1);
  if (line === undefined) {
    throw new Error(
      "customerLine: реализуй функцию — ожидается строка «Имя Фамилия»",
    );
  }
  if (line !== "Аня Иванова")
    throw new Error("customerLine: проверь вложенную деструктуризацию");

  const emptyTitle = firstItemTitle(orders[2]);
  if (emptyTitle === undefined) {
    throw new Error(
      "firstItemTitle: реализуй функцию — ожидается title или null для пустого items",
    );
  }
  if (emptyTitle !== null)
    throw new Error("firstItemTitle: для пустого items — null");

  const firstTitle = firstItemTitle(o1);
  if (firstTitle === undefined) {
    throw new Error(
      "firstItemTitle: реализуй функцию — ожидается title первого товара",
    );
  }
  if (firstTitle !== "Книга")
    throw new Error("firstItemTitle: ожидается Книга");

  const qty = totalItemsQty(o1);
  if (qty === undefined) {
    throw new Error(
      "totalItemsQty: реализуй функцию — ожидается число (сумма qty)",
    );
  }
  if (qty !== 3) throw new Error("totalItemsQty: ожидается 3 (1+2)");

  const merged = mergeCustomerDefaults({ city: "Минск" });
  if (merged === undefined) {
    throw new Error(
      "mergeCustomerDefaults: реализуй функцию — ожидается объект с firstName, country, spread extra",
    );
  }
  if (
    merged.firstName !== "Гость" ||
    merged.country !== "BY" ||
    merged.city !== "Минск"
  ) {
    throw new Error(
      "mergeCustomerDefaults: дефолт firstName, country BY, spread extra",
    );
  }

  const swapped = swapFirstTwoItemTitles(o1);
  if (swapped === undefined) {
    throw new Error(
      "swapFirstTwoItemTitles: реализуй функцию — ожидается строка из title через деструктуризацию массива",
    );
  }
  if (swapped !== "Кружка | Книга")
    throw new Error("swapFirstTwoItemTitles: ожидается Кружка | Книга");

  const single = swapFirstTwoItemTitles(orders[1]);
  if (single === undefined) {
    throw new Error(
      "swapFirstTwoItemTitles: реализуй функцию — ожидается строка",
    );
  }
  if (single !== "Наушники")
    throw new Error("swapFirstTwoItemTitles: одна позиция — один title");

  console.log("Все проверки пройдены ✅");
}

try {
  runChecks();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
