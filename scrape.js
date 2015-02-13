// run in chrome dev tools on http://www.dinodictionary.com/azdict_index.asp

copy(
  [].slice.call(document.querySelectorAll('#list' /* lots of the same ids, don't ask */))
    .map(function (x) { return x.textContent.toLowerCase().trim() })
    .join('\n')
  )
