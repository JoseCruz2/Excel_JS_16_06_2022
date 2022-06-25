addEventListener("DOMContentLoaded", (e)=>{
    let url = "https://script.google.com/macros/s/AKfycbxeTJOer5SIlei6JzyqSI5w8Vp-af_b2IyY7eyX2tc50ACQd_o/exec";
    // data.append("hoja", "datosFormulario")
    // data.append("Cedula", "1095582025");
    // data.append("Nombres", "Jose Fernando");
    // data.append("Apellidos", "Cruz Carrillo");
    // data.append("Edad", 14);
    // data.append("Gmail", "josefernandocruzcarrillo22@gmail.com");
    // data.append("Imagenes", `=IMAGE("https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg")`);

    addEventListener("submit", async(e)=>{
      e.preventDefault();
      let data = new FormData(e.target);
      data.append("hoja", "datosFormulario")
      data.set("Imagenes", `=IMAGE("${data.get('Imagenes')}")`);
      let config = {
        method:"POST",
        body: data 
      };
      let peticion = await fetch(url, config);
      let json = await peticion.json();
      document.body.insertAdjacentText("beforeend", JSON.stringify(json))
      document.querySelector('form').reset();
})

})













 








//https://script.google.com/macros/s/AKfycbxeTJOer5SIlei6JzyqSI5w8Vp-af_b2IyY7eyX2tc50ACQd_o/exec
