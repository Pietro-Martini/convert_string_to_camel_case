const capitalizeWord = word => word[0].toUpperCase() + word.slice(1);

const toCamelCase = str => str.split(/[\-_]+/).map((word, i) => {
  let wordAfterInitialWord = i > 0;

  return ( wordAfterInitialWord ) ? capitalizeWord(word) : word;
}).join('');
