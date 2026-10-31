
class Etudiant{
    constructor (nom,age){
        this.nom=nom;
        this.age=age;
    }
}

let et1 = new Etudiant("wejden",26)
console.log (et1);
let et2= new Etudiant("noch",29)
console.log (et2);
info()
{
    return `Etudiant nom: ${this.nom} age: ${this.age}`;
}
let et1 = new Etudiant("wejden",26)
console.log (et1.info());
let et2= new Etudiant("noch",29)
console.log (et2.info());