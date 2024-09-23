//first  question
var str1="           This is string1"
var str2="This is string2           "  
let a=str1.trimStart()
let b=str2.trimEnd()
let c=a.concat(" and ",b);
console.log(c.toUpperCase());


//second question
var str3="This is the second question" 
let x=str3.slice(5,-8)
let y=x.charAt(12)
console.log(x);
console.log(y);
console.log(x.toLowerCase());

//third question
var str4="a"
var str5="string"
let p=str4.concat(" ",str5)
let q=p.toUpperCase()
console.log(q);
let r=q.slice(-2,-1)
console.log(r);

//fourth question
str6="This is string one"
str7="This is string two"
let i=str6.slice(0,3)
console.log(i);
let j=str7.slice(-3)
console.log(j);
let k=i.concat(j)
console.log(k.toUpperCase());

//fifth question
str8="         this is string with spaces               "
console.log(str8);
let m=str8.trim()
console.log(m);
let n=m.charAt(0)
console.log(n.toUpperCase());
let o=m.slice(-1)
console.log(o.toUpperCase());
let s=m.slice(5,15)
console.log(s.concat(" ",str6));


//sixth question
str9="hello there , how are you"
let t=str9.indexOf("are")
console.log(t);












