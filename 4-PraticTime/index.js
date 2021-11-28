let person = {
    name: "Halil",
    age: 24,
    country: "Turkey"
}

function logData() {
    console.log(person.name + " is " +
        person.age + " years old and lives in " +
        person.country)
}

logData()

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

largeCountries.forEach(element => {
    console.log("-" + element)
});

console.log("-------------------------")

let largeCountries2 = ["Tuvalu","India","USA","Indonesia","Monaco"]
largeCountries2.shift()
largeCountries2.unshift("China")
largeCountries2.pop()
largeCountries2.push("Pakistan")


largeCountries2.forEach(element => {
    console.log("-" + element)
});

