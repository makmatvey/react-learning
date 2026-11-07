import { users } from "./task-01-data.mjs";

// --- Твой код: реализуй функции ниже ---

export function pickActive(users) {
  return users.filter((user) => user.isActive);
}

export function formatNames(users) {
  return users.map((user) => user.firstName + " " + user.lastName);
}

export function totalAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0);
}

export function summarizeActive(users) {
  return formatNames(pickActive(users)).join(", ");
}

export function withDefaults(partial) {
  // TODO: деструктуризация firstName, lastName, ...rest + spread + isActive: true
  const { firstName, lastName, ...rest } = partial;

  return { ...rest, firstName, lastName, isActive: true };
}

// --- Проверки (не меняй логику, можно дописать console.log) ---

function runChecks() {
  const source = users;
  const snapshot = JSON.stringify(source);

  const active = pickActive(source);
  if (active === undefined) {
    throw new Error(
      "pickActive: реализуй функцию — ожидается массив активных пользователей",
    );
  }
  if (!Array.isArray(active)) {
    throw new Error("pickActive: ожидается массив");
  }
  if (JSON.stringify(source) !== snapshot) {
    throw new Error("Исходный users изменился — нужна копия, не мутация");
  }
  if (active.length !== 3) {
    throw new Error(`pickActive: ожидалось 3, получено ${active.length}`);
  }

  const names = formatNames(active);
  if (names === undefined) {
    throw new Error(
      "formatNames: реализуй функцию — ожидается массив строк имён",
    );
  }
  if (!Array.isArray(names)) {
    throw new Error("formatNames: ожидается массив строк");
  }
  if (names.length === 0 || names[0] !== "Аня Иванова" || names.length !== 3) {
    throw new Error("formatNames: проверь шаблон строки и map");
  }

  const ageSum = totalAge(source);
  if (ageSum === undefined) {
    throw new Error("totalAge: реализуй функцию — ожидается число");
  }
  if (typeof ageSum !== "number") {
    throw new Error("totalAge: ожидается число");
  }
  if (ageSum !== 100) {
    throw new Error("totalAge: ожидалась сумма 100");
  }

  const summary = summarizeActive(source);
  if (summary === undefined) {
    throw new Error(
      "summarizeActive: реализуй функцию — ожидается одна строка",
    );
  }
  if (typeof summary !== "string" || !summary.includes("Аня")) {
    throw new Error(
      "summarizeActive: ожидается одна строка с именами активных",
    );
  }

  const created = withDefaults({
    firstName: "Макс",
    lastName: "Орлов",
    age: 25,
  });
  if (created === undefined) {
    throw new Error(
      "withDefaults: реализуй функцию — ожидается объект пользователя",
    );
  }
  if (typeof created !== "object" || created === null) {
    throw new Error("withDefaults: ожидается объект");
  }
  if (!created.isActive || created.firstName !== "Макс" || created.age !== 25) {
    throw new Error("withDefaults: проверь spread и isActive");
  }

  console.log("Все проверки пройдены ✅");
}

try {
  runChecks();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
