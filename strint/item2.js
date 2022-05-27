class Panc {
    constructor(name, HP, ATK, SPD, STN, DEF, USG) {
    Panc.cos = "hello"
    this.name = Panc   
    this.HP = HP
    this.ATK = ATK
    this.SPD = SPD
    this.STN = STN
    this.DEF = DEF
    this.USG = USG
    }
    
    }
    class Zbroja extends Panc{
        
        constructor(name, type) {
            super()
            // super(HP=, ATK=, SPD=, STN=, DEF=, USG=,name)
            this.type = type;

            switch(this.type){
                case "zbr księżycowa KN":
                    this.name = "Księżycowa Zbroja"
                    this.HP = 5;
                    this.ATK = 0;
                    this.SPD = 0;
                    this.STN = 0;
                    this.DEF = 2;
                    this.USG = 1;
                    break;

                case "zbr smoka mroku KN":
                    this.name = "Zbroja Smoka Mroku"
                    this.HP = 2;
                    this.ATK = 0;
                    this.SPD = 0;
                    this.STN = 1;
                    this.DEF = 3;
                    this.USG = 0;
                    break;

                case "zbr piekielna KN":
                    this.name = "Piekielna Zbroja"
                    this.HP = 4;
                    this.ATK = 0;
                    this.SPD = 0;
                    this.STN = 5;
                    this.DEF = 4;
                    this.USG = 0;
                    break;

                case "zbr czarnego ognia KN":
                    this.name = "Zbroja z Czarnego Ognia"
                    this.HP = 2;
                    this.ATK = 0;
                    this.SPD = 2;
                    this.STN = 3;
                    this.DEF = 8;
                    this.USG = 0;
                    break;

                case "zbr runiczna KN":
                    this.name = "RUniczna Zbroja"
                    this.HP = 3;
                    this.ATK = 0;
                    this.SPD = 1;
                    this.STN = 0;
                    this.DEF = 4;
                    this.USG = 2;
                    break;
                
                default:
                    throw new Error("podano zły typ zbroi")
            }

           
        }
    }
    class Zbroja_Jezdzca extends Panc{
        constructor(type) {
            super()
            // super(HP=, ATK=, SPD=, STN=, DEF=, USG=,name)
            this.type = type;

            switch(this.type){
                case "zbr księżycowa RDR":
                    this.name = "Księżycowa Zbroja Jeźdzcy"
                    this.HP = 4;
                    this.ATK = 0;
                    this.SPD = 0;
                    this.STN = 0;
                    this.DEF = 1;
                    this.USG = 1;
                    break;

                case "zbr smoka mroku RDR":
                    this.name = "Zbroja Jeźdzcy Smoka Mroku"
                    this.HP = 2;
                    this.ATK = 0;
                    this.SPD = 2;
                    this.STN = 3;
                    this.DEF = 2;
                    this.USG = 0;
                    break;

                case "zbr piekielna RDR":
                    this.name = "Piekielna Zbroja Jeźdzcy"
                    this.HP = 4;
                    this.ATK = 0;
                    this.SPD = 2;
                    this.STN = 4;
                    this.DEF = 2;
                    this.USG = 0;
                    break;

                case "zbr czarnego ognia RDR":
                    this.name = "Zbroja Jeźdzcy z Czarnego Ognia"
                    this.HP = 2;
                    this.ATK = 2;
                    this.SPD = 2;
                    this.STN = 3;
                    this.DEF = 8;
                    this.USG = 0;
                    break;

                case "zbr runiczna RDR":
                    this.name = "Runiczna Zbroja Jeźdzcy"
                    this.HP = 3;
                    this.ATK = 1;
                    this.SPD = 1;
                    this.STN = 0;
                    this.DEF = 7;
                    this.USG = 2;
                    break;
                
                default:
                    throw new Error("podano zły typ miecza")
            }

           
        }
    }
    class Stroj_Strzelca extends Panc{
        constructor(type) {
            super()
            // super(HP=, ATK=, SPD=, STN=, DEF=, USG=,name)
            this.type = type;

            switch(this.type){
                case "zbr księżycowa ARCH":
                    this.name = "Księżycowy Strój strzelca"
                    this.HP = 5;
                    this.ATK = 1;
                    this.SPD = 1;
                    this.STN = 0;
                    this.DEF = 2;
                    this.USG = 1;
                    break;

                case "zbr smoka mroku ARCH":
                    this.name = "Strój Strzelca Smoka Mroku"
                    this.HP = 2;
                    this.ATK = 0;
                    this.SPD = 1;
                    this.STN = 0;
                    this.DEF = 4;
                    this.USG = 0;
                    break;

                case "zbr piekielna ARCH":
                    this.name = "Piekielny Strój Strzelca"
                    this.HP = 4;
                    this.ATK = 0;
                    this.SPD = 0;
                    this.STN = 1;
                    this.DEF = 5;
                    this.USG = 0;
                    break;

                case "zbr czarnego ognia ARCH":
                    this.name = "Strój Strzelca z Czarnego Ognia"
                    this.HP = 2;
                    this.ATK = 0;
                    this.SPD = 2;
                    this.STN = 3;
                    this.DEF = 8;
                    this.USG = 0;
                    break;

                case "zbr runiczna ARCH":
                    this.name = "Runiczny Strój strzelca"
                    this.HP = 3;
                    this.ATK = 0;
                    this.SPD = 2;
                    this.STN = 0;
                    this.DEF = 3;
                    this.USG = 2;
                    break;
                
                default:
                    throw new Error("podano zły typ miecza")
            }
           
        }
    }
    class Stroj_Zabojcy extends Panc{
        constructor(type) {
            super()
            // super(HP=, ATK=, SPD=, STN=, DEF=, USG=,name)
            this.type = type;

            switch(this.type){
                case "zbr księżycowa ASSN":
                    this.name = "Księżycowy Strój Zabójcy"
                    this.HP = 2;
                    this.ATK = 0;
                    this.SPD = 1;
                    this.STN = 0;
                    this.DEF = 2;
                    this.USG = 1;
                    break;

                case "zbr smoka mroku ASSN":
                    this.name = "Strój Zabójcy Smoka Mroku"
                    this.HP = 2;
                    this.ATK = 0;
                    this.SPD = 2;
                    this.STN = 1;
                    this.DEF = 3;
                    this.USG = 0;
                    break;

                case "zbr piekielna ASSN":
                    this.name = "Piekielny Strój Zabójcy"
                    this.HP = 4;
                    this.ATK = 0;
                    this.SPD = 1;
                    this.STN = 1;
                    this.DEF = 4;
                    this.USG = 1;
                    break;

                case "zbr czarnego ognia ASSN":
                    this.name = "Strój Zabójcy z Czarnego Ognia"
                    this.HP = 2;
                    this.ATK = 1;
                    this.SPD = 3;
                    this.STN = 2;
                    this.DEF = 5;
                    this.USG = 0;
                    break;

                case "zbr runiczna ASSN":
                    this.name = "Runiczny Strój Zabójcy"
                    this.HP = 3;
                    this.ATK = 0;
                    this.SPD = 1;
                    this.STN = 0;
                    this.DEF = 4;
                    this.USG = 2;
                    break;
                
                default:
                    throw new Error("podano zły typ miecza")
            }
           
        }
    }

    //let holy = new miecz(type="święty")
    //holy.type

    //let bezduch = new miecz(type="bezduch")
    //bezduch.type

    //let tarcza = new Item()
    //tarcza.type
