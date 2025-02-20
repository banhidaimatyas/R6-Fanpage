const operators = [
    {
        name: "Aruni:",
        image: "../Images/operator_images/aruni_1.png",
        health: 3,
        speed: 1,
    },

    
    {
        name: "Rook:",
        image: "../Images/operator_images/rook_1.png",
        health: 3,
        speed: 1,
    },

    {
        name: "Vigil:",
        image: "../Images/operator_images/vigil_1.png",
        health: 1,
        speed: 3,
    },
    
    {
        name: "IQ:",
        image: "../Images/operator_images/ip_1.png",
        health: 1,
        speed: 3,
    },

    {
        name: "Tachanka:",
        image: "../Images/operator_images/tachanka_1.png",
        health: 3,
        speed: 1,
    },

    {
        name: "Wamai:",
        image: "../Images/operator_images/wamai_1.png",
        health: 2,
        speed: 2,
    },


    {
        name: "Maestro:",
        image: "../Images/operator_images/maestro_1.png",
        health: 3,
        speed: 1,
    },

    {
        name: "Thunderbird:",
        image: "../Images/operator_images/thunderbird_1.png",
        health: 2,
        speed: 2,
    },


    {
        name: "Zero:",
        image: "../Images/operator_images/zero_1.png",
        health: 1,
        speed: 2,
    },
];

let active = operators[0];
render(operators[0]);

function SelectedItem(index){
    active = operators[index];
    render();
}

function render(){
    document.getElementById("operator-img").setAttribute("src", active.image);
    document.getElementById("operator-name").innerText = active.name;
}



