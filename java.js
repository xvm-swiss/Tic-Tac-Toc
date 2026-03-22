
let = gamer_one = "X" // Wir starten mit X

function my_btn(on_click) {
     // Prüfen, ob der Button schon belegt ist (enthält er schon ein Bild?)
    if (on_click.innerHTML.includes("X-1.png")) {
        return;  // Wenn ja: Funktion sofort beenden (nichts tun)
    }  
     // Das Bild setzen, je nachdem wer dran ist
    if (gamer_one === "X") {
        
        on_click.innerHTML = '<img id= "img_xo" src="./assets/pic/X-1.png" width="100%">';
        gamer_one = "O";  // Danach ist O dran
    } else {
        on_click.innerHTML = '<img id= "img_xo" src="./assets/pic/O-1.png" width="100%">';
        gamer_one = "X";  // Danach ist X dran
    }
    
    checkWinner();
    // Hier könnte man prüfen, ob 3 in einer Reihe sind.
    // Für den Anfang: Erscheint eine Meldung, wenn alle Felder voll sind?

}

function checkWinner() {
    // 1. Alle Buttons in eine Liste (Array) laden
    const buttons = document.querySelectorAll("#spielfeld button");

    // 2. Alle 8 Gewinn-Kombinationen definieren (die IDs der Buttons)
    const siegLinien = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Waagerecht
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Senkrecht
        [0, 4, 8], [2, 4, 6]             // Diagonal
    ];

    // 3. Jede Kombination prüfen
    for (let linie of siegLinien) {
        const [a, b, c] = linie; // Wir nehmen z.B. 0, 1 und 2
        
        // Prüfen: Sind alle drei Buttons gleich belegt (und nicht leer)?
        if (buttons[a].innerHTML.includes("X-1.png") && 
            buttons[b].innerHTML.includes("X-1.png") && 
            buttons[c].innerHTML.includes("X-1.png")) {
            alert("Player X has won!");
            location.reload(); // Spiel neu starten
        } 
        
        if (buttons[a].innerHTML.includes("O-1.png") && 
            buttons[b].innerHTML.includes("O-1.png") && 
            buttons[c].innerHTML.includes("O-1.png")) {
            alert("Player O has won!");
            location.reload(); // Spiel neu starten
        }
    }
}







// 3 Klich = 3 Bilder. 1 = ?, 2 = X , 3 = O
// function my_btn(on_click) {
//     if (on_click.innerHTML.includes("leer.png")) {
//         on_click.innerHTML = '<img id= "img_xo" src="./assets/pic/X-1.png" width="100%">'
//     }   else if (on_click.innerHTML.includes("X-1.png")){
//         on_click.innerHTML = '<img id= "img_xo" src="./assets/pic/O-1.png" width="100%">'
//     }   else {
//         on_click.innerHTML =  '<img id= "img_xo" src="./assets/pic/leer.png" width="100%">';
//     }
// }


// Jedes Bild wird zählt

// let clicks = 0;

// function my_btn(){
//     clicks++;
//     let = btn = document.getElementById("my_btn");

//     if (clicks === 1){
//         btn.innerHTML = '<img id= "img_xo" src="./assets/pic/X-1.png" width="100%">';
//     } else if ( clicks === 2){
//         btn.innerHTML = '<img  id= "img_xo" src="./assets/pic/O-1.png" width="100%">';
//         clicks = 0;
//     }

// }