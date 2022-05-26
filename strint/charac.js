class Postac {
constructor(name, HP, ATK, SPD, STN, DEF, USG) {
character.name = klasa
character.HP = HP
character.ATK = ATK
character.SPD = SPD
character.STN = STN
character.DEF = DEF
character.USG = USG


}

isAlive(){
    return character.HP > 0
}
}

class Rycerz extends Postac {
    constructor(name, HP, ATK, SPD, STN, DEF, USG) {
        super(name="Rycerz", HP=25,ATK=3,SPD=1,STN=7,DEF=8,USG=1,)
}}

class Jeźdzca extends Postac {
    constructor(name, HP, ATK, SPD, STN, DEF, USG) {
        super(name="Jeźdzca", HP=20,ATK=6,SPD=9,STN=6,DEF=6,USG=1,)
}}

class Łucznik extends Postac {
    constructor(name, HP, ATK, SPD, STN, DEF, USG) {
        super(name="Łucznik", HP=10,ATK=6,SPD=7,STN=1,DEF=3,USG=3,)
}}

class Zabójca extends Postac {
    constructor(name, HP, ATK, SPD, STN, DEF, USG) {
        super(name="Zabójca", HP=18,ATK=8,SPD=8,STN=2,DEF=1,USG=2,)
}}
