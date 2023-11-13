// parseint() - wandelt einen String in eine Ganzzahl um, isNaN true wenn es ne zahl ist
var AdminTS = /** @class */ (function () {
    function AdminTS() {
        var _this = this;
        var btn = document.getElementById("coolbutton");
        btn.addEventListener("click", function (e) { return _this.getTrainingName(4); });
    }
    AdminTS.prototype.getTrainingName = function (n) {
        var eins = prompt("Gib die erste Zahl ein");
        if (isNaN(parseInt(eins))) {
            alert("Ungültige Eingabe!");
            throw new Error("Ungültige Eingabe!");
        }
        var zwei = prompt("Gib die zweite Zahl ein");
        if (isNaN(parseInt(zwei))) {
            alert("Ungültige Eingabe!");
            throw new Error("Ungültige Eingabe!");
        }
        var summe = parseInt(eins) + parseInt(zwei);
        alert("Die Summe ist: " + summe);
    };
    return AdminTS;
}());
new AdminTS();
var Name = /** @class */ (function () {
    function Name() {
        var _this = this;
        var btn = document.getElementById("gaybutton");
        btn.addEventListener("click", function (e) { return _this.names(4); });
    }
    Name.prototype.names = function (n) {
        var name = prompt("Wie heist du?");
        if (!isNaN(Number(name))) {
            alert("Ungültige Eingabe!");
            throw new Error("Ungültige Eingabe!");
        }
        alert("Hi " + name + "!");
    };
    return Name;
}());
new Name();
