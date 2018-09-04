let add = (alongname, blongname) => alongname + blongname;
let m = new Map();
m.set("hello", 42);
console.log(add(m.get("hello"), 10));