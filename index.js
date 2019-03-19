let hacker1 = "Theresa"
console.log("The driver's name is "+ hacker1)

let hacker2 = "Alina"
console.log("The navigator's name is "+ hacker2)

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length === hackergit2.length) {
  console.log(`wow,you both got equally long names, ${hacker1.length} characters!!`) 
}
else {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
}

let capitalsHacker1 = hacker1.toUpperCase();

let splitHacker1 = capitalsHacker1.split("")

console.log(splitHacker1.join(' '))

let splithacker2 = 
hacker2.split("");

console.log(hacker2.split("").reverse().join(''))

let lexicographicalOrder =(hacker1.localeCompare(hacker2))

if (lexicographicalOrder > 0) { console.log("Yo, the navigator goes first definitely")
}
else if (lexicographicalOrder === 0) 
{ console.log("What?! You both got the same name?")
}
else {
  console.log("Yo, the navigator goes first definitely")
}



