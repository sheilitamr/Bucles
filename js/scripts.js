const countDown = number => {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
};
/* countDown(10); */

const sumArrays = array => {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  console.log(suma);
};

/* sumArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); */

const multiplicationTable = number => {
  for (let i = 0; i <= 10; i++) {
    console.log(`${number} X ${i} = ${number * i}`);
  }
};
/* multiplicationTable(4); */

const multiplicationTableInverse = number => {
  for (let i = 10; i >= 0; i--) {
    console.log(`${number} X ${i} = ${number * i}`);
  }
};
/* multiplicationTableInverse(4); */

const year = (year, age) => {
  const birthday = year - age;
  console.log(`Naciste en el año ${birthday}`);
  console.log(`En el año ${birthday + 1} cumpliste 1 año`);
  for (let i = 2; i <= age; i++) {
    console.log(`En el año ${birthday + i} cumpliste ${i} años`);
  }
};

/* year(2023, 29); */

const even = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
/* even(2, 12); */

const repeatedNumbers = () => {
  const array1 = [];
  const array2 = [];

  for (let i = 1; i <= 5; i++) {
    const randomNumber1 = Math.floor(Math.random() * 11);
    const randomNumber2 = Math.floor(Math.random() * 11);
    array1.push(randomNumber1);
    array2.push(randomNumber2);
    if (randomNumber1 === randomNumber2) {
      console.log(`Se han repetido los números ${randomNumber1}`);
    }
  }
  console.log(`Los números en el array 1 son: ${array1}`);
  console.log(`Los números en el array 2 son: ${array2}`);
};

/* repeatedNumbers(); */

const primeNumberNotPrimeNumber = number => {
  if (number % 2 === 0) {
    console.log(`El número ${number} no es primo`);
    return;
  }
  let divisores = 0;
  for (let i = 3; i <= number; i += 2) {
    if (number % i === 0) {
      divisores++;
    }
  }
  divisores > 1
    ? console.log(`El número ${number} no es primo`)
    : console.log(`El número ${number} es primo`);
};
/* primeNumberNotPrimeNumber(13); */

const squareCube = array => {
  for (let i = 0; i < array.length; i++) {
    console.log(
      `Número: ${array[i]} - Cuadrado: ${Math.pow(
        array[i],
        2
      )} - Cubo: ${Math.pow(array[i], 3)}`
    );
  }
};
/* squareCube([2, 3, 4, 6, 7, 8, 9, 7, 5]); */

const vocalsUpperCase = word => {
  let newWord = '';
  for (const letter of word) {
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      newWord += letter.toUpperCase();
    } else {
      newWord += letter;
    }
  }
  console.log(newWord);
};

/* vocalsUpperCase('Dorian'); */

const repeatedVowels = phrase => {
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  };

  for (const letter of phrase) {
    if (letter === 'a') {
      vowels.a++;
    } else if (letter === 'e') {
      vowels.e++;
    } else if (letter === 'i') {
      vowels.i++;
    } else if (letter === 'o') {
      vowels.o++;
    } else if (letter === 'u') {
      vowels.u++;
    }
  }
  console.log(
    `a:${vowels.a}`,
    `e:${vowels.e}, i:${vowels.i}, o:${vowels.o}, u:${vowels.u}`
  );
};

/* repeatedVowels('sheila acaricia a nala'); */

const interleaveLetters = (word1, word2) => {
  let newWord = '';
  let shortestWord;
  if (word1.length > word2.length) {
    shortestWord = word2;
  } else shortestWord = word1;
  for (let i = 0; i < shortestWord.length; i++) {
    newWord += word1[i] + word2[i];
  }
  console.log(newWord);
};
/* interleaveLetters('hola', 'adios'); */

const reverseWord = word => {
  let newWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  console.log(newWord);
};

/* reverseWord('Mariposa'); */

const arrayOddEven = numbers => {
  const even = [];
  const odd = [];
  const randomNumber = Math.floor(Math.random() * 11);

  for (const number of numbers) {
    const multiply = randomNumber * number;
    if (multiply % 2 === 0) {
      even.push(multiply);
    } else odd.push(multiply);
  }
  console.log(`Los números son ${numbers}`);
  console.log(`Los números pares son ${even}`);
  console.log(`Los números impares son ${odd}`);
};

/* arrayOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); */

const firstLetterLastLeter = words => {
  const letters = [];
  for (let i = 0; i < words.length; i++) {
    letters.push(words[i].charAt(0).toUpperCase());
    letters.push(words[i].charAt(words[i].length - 1).toUpperCase());
  }

  console.log(letters);
};
firstLetterLastLeter(['hola', 'adios', 'gato', 'perro', 'casa']);
