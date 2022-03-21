function escapeJS(code) {
  // определяем правила экранирования JavaScript
  let escapeMap = {
    "'": "\\'",
    '"': '\\"',
    '\\': '\\\\',
    '\n': '\\n',
    '\r': '\\r',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029',
  }
  // создаем регулярное выражение, чтобы найти все специальные символы, а затем экранировать их
  return code.replace(
    new RegExp(`[${Object.keys(escapeMap).join('')}]`, 'g'),
    (character) => escapeMap[character]
  )
}
