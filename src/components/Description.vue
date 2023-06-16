<template>
   
   

    <section id="seccion-descripcion">
      <div class="foto-texto">
        <img class="foto" src="../assets/description-1-app.png" alt="fotos" />
        <div class="texto1">
          <h2>
            Organice Your Time<br />
            And Start Getting<br />Results
          </h2>
          <p>
            Sync is the firts mobile app on the market to harness the<br />power
            of social connections to help you stop procrastinating<br />andstarrt
            getting things done.Give it a try and see the<br />
            change right away.<br /><br />. Ananyse and evaluete your current
            status and poductiviti<br /><br />.Begin monitoring yor day to day
            routine with Sync app<br /><br />.See the improved results in no
            more than a couple of weeks
          </p>
          <div class="boton1"><button class="lightbox">LIGHTBOX</button></div>
        </div>
      </div>
    </section>

    <section id="segunda-seccion">
      <div class="boton2">
        <button class="boton_reloj"><img src="../assets/reloj.png" />Schedule</button>
        <button class="boton_menu"><img src="../assets/lista.png">Tracking</button>
        <button class="boton_calendario"><img src="../assets/calendario.png">Organize</button>
        <p id="parrafo1">Schedule to keep track of their completion.Sync <br>provides multiple scheduling options uncluding alarms and <br>reminders.</p>
        <p id="parrafo2"><img src="../assets/letra-v.png">You can always add new tasks or tasks or change the settings of <br>existing ones in your calendar view or the app control <br> panel</p>
        <p id="parrafo3"><img src="../assets/letra-v.png">It,s easy to stay focused on your most important daily <br>activities that will get you closer to meeting your goals</p>
        <p id="parrafo4"><img src="../assets/letra-v.png">Use reminders to free up your long term memory <br>which reduce stress and make you more productive</p>
        <button class="boton3">TERMS</button>  <button class="boton4">PRIVACY</button>
      </div>
      <div class="foto-texto1"><img src="../assets/description-2-app.png"></div>
    </section>


    </template>


<style scoped>
.foto {
    width: 30em;

}

.foto-texto {
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
}

.lightbox {
    background-color: rgb(253, 97, 97);
    color: ghostwhite;
    border-radius: 20px;
    padding: 10px 13px;
    border: 0;
    font-weight: bold;
    flex-wrap: wrap;
   
}

.boton1 {
  display: flex;
  justify-content: center;
}
.calendario {
    margin-bottom: 30px;
}
.boton_reloj {
    color: white;
    background-color: blueviolet;
    padding: 10px 13px;
    border: 0;
    font-weight: bold;
    flex-wrap: wrap;
}  

#primera-seccion {
    margin: 50px    ; 
}

#segunda-seccion {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.boton_menu {
    padding: 10px 13px;
    border: 0;
    font-weight: bold;
    flex-wrap: wrap;
    color: rgb(0, 0, 0);
    background-color: rgb(218, 221, 223);
}

.boton_calendario {
    padding: 10px 13px;
    border: 0;
    font-weight: bold;
    flex-wrap: wrap;
    color: rgb(0, 0, 0);
    background-color: rgb(218, 221, 223);
}
#parrafo1 {
    text-align: left;
}
#parrafo2 {
    text-align: left;
}

#parrafo3 {
    text-align: left;
}

#parrafo4 {
    text-align: left;
}

.boton3 {
    background-color: rgb(253, 97, 97);
    color: ghostwhite;
    border-radius: 20px;
    padding: 10px 13px;
    border: 0;
    font-weight: bold;
    flex-wrap: wrap;
    
    
}

.boton4 {
    border-radius: 20px;
    padding: 10px 13px;
    border: 1;
    font-weight: bold;
    flex-wrap: wrap;
    
}
.foto-texto1 img {
    width: 30em;
}
</style>