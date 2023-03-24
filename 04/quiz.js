// 01
const year = 2022;
const month = 11;
const day = 3;

if (day < 10 && day > 0) {
  days = '0' + day;
} else {
  days = day;
}
const dateString = year + '-' + month + '-' + days;

console.log(dateString);

// 02
const dateString = '2022-12-12';
const dateArray = dateString.split('-').map(Number);

console.log(dateArray);

// 03
const text = '나는 XX를 좋아해';
const item = 'JS';

const replacedText = text.replace('XX', item);

console.log(replacedText);

// 04
const text = '안녕하세요. 나는 사람입니다.';
const searchText = '사람';

const isInclude = text.includes(searchText);

console.log(isInclude);

// 05
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];

function sumArray(array) {
  return array.reduce((acc, cur) => acc + cur, 0);
}

const sum1 = sumArray(point1);
const sum2 = sumArray(point2);

console.log(sum1 + sum2);

// 06
const a = 1.2;
const b = 3.4;

const sum = Math.floor(a) + Math.floor(b);

console.log(sum);

// 07
const min = 1;
const max = 10;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);

// 08
const target = 10;
const num = 3;

const isMultiple = target % num === 0;

console.log(isMultiple);

// 09
const nick = 'kakao';
const upperCaseNick = nick.toUpperCase();

console.log(upperCaseNick);

// 10
const items = [1, 'a', true, ['a'], { n: 1 }];
const primitives = items.filter(
  (item) => typeof item !== 'object' && typeof item !== 'function'
);

console.log(primitives);

// 11
const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const pageSize = 3;
let result = '';

for (let i = 0; i < items.length; i += pageSize) {
  const pageItems = items.slice(i, i + pageSize);

  result += pageItems.join(',') + (pageItems.length === pageSize ? '---' : '');
}

console.log(result);

// 12
const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const pageSize = 3;
const result = [];

for (let i = 0; i < items.length; i += pageSize) {
  const pageItems = items.slice(i, i + pageSize);
  result.push(pageItems);
}

console.log(result);

// 13
const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const pageSize = 3;

const getStartIndexByPage = function (page) {
  return (page - 1) * pageSize;
};

console.log(getStartIndexByPage(1));
console.log(getStartIndexByPage(2));
console.log(getStartIndexByPage(3));

// 14
const phoneNumber = '010-1234-1234';
const pattern = /^01[016789]-\d{3,4}-\d{4}$/;
const isValidPhoneNumber = pattern.test(phoneNumber);

console.log(isValidPhoneNumber);

// 15
const user = { nick: 'nio', age: 20, location: '제주' };

user.age = 21;
user.name = '부산';
delete user.location;
console.log(user);

// 16
const text = '{a:1, b:2}';
const obj = text
  .slice(1, -1)
  .split(',')
  .reduce((acc, cur) => {
    const [key, value] = cur.split(':');
    acc[key.trim()] = Number(value.trim());
    return acc;
  }, {});

console.log(obj);

// 17
const user = { nick: 'nio', age: 20, location: '제주' };

const jsonString = JSON.stringify(user);
console.log(jsonString);

// 18
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = items.filter((item) => item % 2 === 0);
console.log(evenNumbers);

// 19
const list = [
  {
    id: 1,
    title: 'JS',
    isPublic: true,
  },
  {
    id: 2,
    title: '기본',
    isPublic: true,
  },
  {
    id: 3,
    title: 'ecma',
    isPublic: true,
  },
  {
    id: 4,
    title: 'dom',
    isPublic: false,
  },
];

const publicTitles = list
  .filter((item) => item.isPublic)
  .map((item) => item.title);

console.log(publicTitles);

// 20
const dday = '2022-02-02';
const date = new Date(dday);
date.setDate(date.getDate() + 1);
const nextDay = date.toISOString().slice(0, 10);
console.log(nextDay);
