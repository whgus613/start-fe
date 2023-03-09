// 변수 선언

// number
var count = 5;

console.log(count);

// string
var count = "5";

var nick = "AJ";
var nick = "AJ";

// boolean
var isMan = true;

// function
var log = function (str) {
  console.log(str);
};

log(nick);

// object

var image = {};
//var image1 = { alt: "test" };

image.width = 100;
image.height = 100;

console.log(image);
console.log(image.width);
console.log(image["width"]);

// array
var image = ["1.jpg", "2.jpg"];
console.log(image, image.length);

image[0] = "3.jpg";
image[3] = "4.jpg";
console.log(image);

// null - 초기화 할 때 사용
var nice = "";
var title = -1;
var abc = null;
var isMan = true; //true, false, null

// undefined
var a;
console.log(a);

// array
var arr = [1, 2, 3, 3, 4];
for (var i = 0; i < arr.length - 1; i++) {
  console.log(arr[i]);
}
