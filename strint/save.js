function save() {
    //things we want to save
    var save = {
        player1: player,
        inventory1: inventory,
        boss1: boss,
    }
    //localstorage save
    localStorage.setItem("save", JSON.stringify(save));
}
    

    function load() {
        //variable from save file
        var savegame = JSON.parse(localStorage.getItem("save"));
        //check if it exists
        if (savegame != null && savegame != undefined){
            inventory = savegame.inventory1;
            player = savegame.player1;
        }
    }