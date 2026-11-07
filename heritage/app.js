class Etudiant {
    constructor(nom,age){
        this.nom=nom;
        this.age=age;
    }
    info() {
        return `Etudiant nom:${this.nom} age:${this.age}`;  
    }
    


class stagiaire extends Etudiant {
    constructor(nom,age,stage){
        super(nom,age);
        this.stage=stage;}
        info() {
            return `Stagaire nom:${this.nom} age:${this.age} stage:${this.stage}`;  
    }
}
let stg1 =new stagiaire("rami",23,"dev mobile");
console.log(stg1.info());
let stg2 =new stagiaire("mohamed",21,"dev web");
console.log(stg2.info());

