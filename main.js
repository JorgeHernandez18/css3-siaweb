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
          card.innerHTML = `
          <figure class="card__figure">
          <img class="card__figure--img" src="img.jpg" alt="computador">
      </figure>
      <div class="card__text text-white">
          <p class="card__text--razonSocial">Razon social</p>
          <h2 class="">${item.razon_social}</h2>
          <div class="card__personal flex justify-between my-2">
              <p class="card__personal--p">${item.personal} Personal</p>
              <i class="card__personal--i">NIT: ${item.nit}</i>
          </div>
          <p class="card__text--municipio">Municipio comercial</p>
          <p class="">${item.municipio_comercial}</p>
          <div class="card__footer flex justify-between my-2">
              <div class="card__size">
                  <p class="card__size--p">Tamaño</p>
                  <p class="">${item.tamano}</p>
              </div>
              <div class="card__code">
                  <p class="">Codigo: ${item.codigo.split("**")[0]}</p>
                  <p class="">${item.codigo.split("**")[1]}</p>
              </div>
          </div>
      </div>
          `
          
          
          cards.appendChild(card);
      });
  });
}
  
  console.log("Finalizo");