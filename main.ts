// parseint() - wandelt einen String in eine Ganzzahl um, isNaN true wenn es ne zahl ist

class AdminTS {
    constructor() {
        let btn = document.getElementById("coolbutton");
        btn.addEventListener("click", (e:Event) => this.getTrainingName(4));
    }
    getTrainingName(n:number){
        let eins = prompt("Gib die erste Zahl ein");


        if (isNaN(parseInt(eins))) {
            alert("Ungültige Eingabe!");
            throw new Error("Ungültige Eingabe!");
        }
        let zwei = prompt("Gib die zweite Zahl ein");

        if (isNaN(parseInt(zwei))) {
            alert("Ungültige Eingabe!");
            throw new Error("Ungültige Eingabe!");
        }

        let summe = parseInt(eins) + parseInt(zwei);


        alert("Die Summe ist: " + summe);
    }
}

new AdminTS();

class Name {
    constructor() {
        let btn = document.getElementById("gaybutton");
        btn.addEventListener("click", (e:Event) => this.names(4));
    }
    names(n:number){
        const name = prompt("Wie heist du?")

        if (!isNaN(Number(name))) {
            alert("Ungültige Eingabe!")
            throw new Error("Ungültige Eingabe!")
        }
        alert("Hi " + name + "!")
    }
}

new Name();