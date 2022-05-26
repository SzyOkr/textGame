class Item {
    constructor(name, HP, ATK, SPD, STN, DEF, USG) {
    Item.cos = "hello"
    this.name = Item    
    this.HP = HP
    this.ATK = ATK
    this.SPD = SPD
    this.STN = STN
    this.DEF = DEF
    this.USG = USG
    }
    
    }
    class miecz extends Item {
        constructor(name, type) {
            // super(HP=, ATK=, SPD=, STN=, DEF=, USG=,name)
            this.type = type;

            switch(this.type){
                case "święty":
                    this.name = "Święty Miecz"
                    this.HP = 5;
                    this.ATK = 3;
                    this.SPD = 1;
                    this.STN = 0;
                    this.DEF = 0;
                    this.USG = 1;
                    break;

                case "smoka mroku":
                    this.name = "Miecz Smoka Mroku"
                    this.HP = 2;
                    this.ATK = 5;
                    this.SPD = 0;
                    this.STN = 2;
                    this.DEF = 1;
                    this.USG = 0;
                    break;

                case "Potężnego Diabła":
                    this.name = "Miecz Potężnego Diabła"
                    this.HP = 4;
                    this.ATK = 1;
                    this.SPD = 1;
                    this.STN = 5;
                    this.DEF = 4;
                    this.USG = 0;
                    break;

                case "Bezduszny":
                    this.name = "Bezduszny Miecz"
                    this.HP = 0;
                    this.ATK = 7;
                    this.SPD = 2;
                    this.STN = 1;
                    this.DEF = 0;
                    this.USG = 0;
                    break;

                case "Runiczny":
                    this.name = "Runiczny Miecz"
                    this.HP = 2;
                    this.ATK = 1;
                    this.SPD = 1;
                    this.STN = 8;
                    this.DEF = 3;
                    this.USG = 2;
                    break;
                
                default:
                    throw new Error("podano zły typ miecza")
            }

           
        }
    }
    class lanca extends Item {
        constructor(name, type) {
            // super(HP=, ATK=, SPD=, STN=, DEF=, USG=,name)
            this.type = type;

            switch(this.type){
                case "święty":
                    this.name = "Święta Lanca"
                    this.HP = 4;
                    this.ATK = 2;
                    this.SPD = 2;
                    this.STN = 0;
                    this.DEF = 0;
                    this.USG = 1;
                    break;

                case "smoka mroku":
                    this.name = "Lanca Smoka Mroku"
                    this.HP = 1;
                    this.ATK = 5;
                    this.SPD = 1;
                    this.STN = 2;
                    this.DEF = 1;
                    this.USG = 0;
                    break;

                case "Potężnego Diabła":
                    this.name = "Lanca Potężnego Diabła"
                    this.HP = 1;
                    this.ATK = 3;
                    this.SPD = 8;
                    this.STN = 2;
                    this.DEF = 2;
                    this.USG = 1;
                    break;

                case "Bezduszny":
                    this.name = "Bezduszna Lanca"
                    this.HP = 1;
                    this.ATK = 5;
                    this.SPD = 4;
                    this.STN = 0;
                    this.DEF = 1;
                    this.USG = 1;
                    break;

                case "Runiczny":
                    this.name = "Runiczna Lanca"
                    this.HP = 3;
                    this.ATK = 0;
                    this.SPD = 2;
                    this.STN = 4;
                    this.DEF = 6;
                    this.USG = 2;
                    break;
                
                default:
                    throw new Error("podano zły typ miecza")
            }

           
        }
    }
    class luk extends Item {
        constructor(name, type) {
            // super(HP=, ATK=, SPD=, STN=, DEF=, USG=,name)
            this.type = type;

            switch(this.type){
                case "święty":
                    this.name = "Święty Łuk"
                    this.HP = 1;
                    this.ATK = 7;
                    this.SPD = 3;
                    this.STN = 1;
                    this.DEF = 0;
                    this.USG = 1;
                    break;

                case "smoka mroku":
                    this.name = "Łuk Smoka Mroku"
                    this.HP = 2;
                    this.ATK = 5;
                    this.SPD = 2;
                    this.STN = 2;
                    this.DEF = 1;
                    this.USG = 0;
                    break;

                case "Potężnego Diabła":
                    this.name = "Łuk Potężnego Diabła"
                    this.HP = 4;
                    this.ATK = 1;
                    this.SPD = 1;
                    this.STN = 5;
                    this.DEF = 4;
                    this.USG = 0;
                    break;

                case "Bezduszny":
                    this.name = "Bezduszny Łuk"
                    this.HP = 0;
                    this.ATK = 7;
                    this.SPD = 2;
                    this.STN = 1;
                    this.DEF = 0;
                    this.USG = 0;
                    break;

                case "Runiczny":
                    this.name = "Runiczny Łuk"
                    this.HP = 2;
                    this.ATK = 1;
                    this.SPD = 1;
                    this.STN = 8;
                    this.DEF = 3;
                    this.USG = 2;
                    break;
                
                default:
                    throw new Error("podano zły typ miecza")
            }

           
        }
    }
    class sztylet extends Item {
        constructor(name, type) {
            // super(HP=, ATK=, SPD=, STN=, DEF=, USG=,name)
            this.type = type;

            switch(this.type){
                case "święty":
                    this.name = "Święty Sztylet"
                    this.HP = 2;
                    this.ATK = 1;
                    this.SPD = 5;
                    this.STN = 3;
                    this.DEF = 1;
                    this.USG = 1;
                    break;

                case "smoka mroku":
                    this.name = "Miecz Smoka Mroku"
                    this.HP = 1;
                    this.ATK = 5;
                    this.SPD = 2;
                    this.STN = 0;
                    this.DEF = 1;
                    this.USG = 0;
                    break;

                case "Potężnego Diabła":
                    this.name = "Sztylet Potężnego Diabła"
                    this.HP = 4;
                    this.ATK = 2;
                    this.SPD = 0;
                    this.STN = 3;
                    this.DEF = 1;
                    this.USG = 0;
                    break;

                case "Bezduszny":
                    this.name = "Bezduszny Sztylet"
                    this.HP = 0;
                    this.ATK = 9;
                    this.SPD = 2;
                    this.STN = 0;
                    this.DEF = 0;
                    this.USG = 0;
                    break;

                case "Runiczny":
                    this.name = "Runiczny Sztylet"
                    this.HP = 3;
                    this.ATK = 0;
                    this.SPD = 3;
                    this.STN = 5;
                    this.DEF = 2;
                    this.USG = 3;
                    break;
                
                default:
                    throw new Error("podano zły typ miecza")
            }

           
        }
    }

    let holy = new miecz(type="święty")
    holy.type

    let bezduch = new miecz(type="bezduch")
    bezduch.type

    let tarcza = new Item()
    tarcza.type
