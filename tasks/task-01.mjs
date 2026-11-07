import { users } from './task-01-data.mjs';

// --- Твой код: реализуй функции ниже ---

export function pickActive(users) {
  // TODO: filter → новый массив
}

export function formatNames(users) {
  // TODO: map → строки "Имя Фамилия"
}

export function totalAge(users) {
  // TODO: reduce → число
}

export function summarizeActive(users) {
  // TODO: активные → имена → одна строка через join
}

export function withDefaults(partial) {
  // TODO: деструктуризация firstName, lastName, ...rest + spread + isActive: true
}

// --- Проверки (не меняй логику, можно дописать console.log) ---

function runChecks() {
  const source = users;
  const snapshot = JSON.stringify(source);

  const active = pickActive(source);
  if (JSON.stringify(source) !== snapshot) {
    throw new Error('Исходный users изменился — нужна копия, не мутация');
  }
  if (active.length !== 3) {
    throw new Error(`pickActive: ожидалось 3, получено ${active.length}`);
  }

  const names = formatNames(active);
  if (names[0] !== 'Аня Иванова' || names.length !== 3) {
    throw new Error('formatNames: проверь шаблон строки и map');
  }

  if (totalAge(source) !== 100) {
    throw new Error('totalAge: ожидалась сумма 100');
  }

  const summary = summarizeActive(source);
  if (typeof summary !== 'string' || !summary.includes('Аня')) {
    throw new Error('summarizeActive: ожидается одна строка с именами активных');
  }

  const created = withDefaults({ firstName: 'Макс', lastName: 'Орлов', age: 25 });
  if (!created.isActive || created.firstName !== 'Макс' || created.age !== 25) {
    throw new Error('withDefaults: проверь spread и isActive');
  }

  console.log('Все проверки пройдены ✅');
}

runChecks();
