import "introcs";

let temperature: number = 79;

print("The temperature is " + temperature + ".");

// TODO:
// IF temperature is greater than 80
//   THEN print "It is hot."

if (temperature > 80){
    print("It is hot!");
} else {
    if (temperature < 32) {
        print("It is FREEZING!");
    } else {
        print ("It is pleasant!");
    }
}

print("Carpe diem :)");