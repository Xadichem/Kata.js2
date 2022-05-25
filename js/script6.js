// Завершите решение, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).

function solution(str, ending) {
  // TODO: complete
  var start = str.length - ending.length;
  return start >= 0 && str.indexOf(ending, start) == start;
}
