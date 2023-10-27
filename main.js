document.querySelector("#btn_change").onclick = function() {

    const options = {
     method: "GET"
    };
    
    fetch("https://www.datos.gov.co/resource/3r8k-vvxe.json", options)
      .then(response => response.json())
      .then(data => {
        var cards = document.getElementById('cards');
    
      // Iterar sobre los elementos del JSON y construir las filas de la tabla
        data.forEach(function(item) {
            var card = document.createElement('div');
            card.classList.add('card')
            card.innerHTML = ``
            
            
            cards.appendChild(card);
        });
    });
}
    
    console.log("Finalizo");