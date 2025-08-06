const x=new Function("a","b","return [a+b,a-b,a*b,a/b,a%b]");
console.log(x(2,4));            