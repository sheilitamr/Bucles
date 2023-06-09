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

vocalsUpperCase('Dorian');
