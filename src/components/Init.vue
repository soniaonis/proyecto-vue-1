<script setup>

</script>
<template>
  <section>
      
  <div class="Titulo_principal">
     <h1>Mobile App Landing Page</h1>
     <p>
       Stat focusing on your goals and get more things done with Sync
       mobile application.It`<br />the firts app to harness the power of
       social connections to help you stay focused and get<br />organiced
     </p>
   </div>
   <div class="red-boton">
    <button class="red1">
      <img class="manzana" src="src/assets/manzana.png" />DOWNLOAD
    </button>
    <button class="red2">
      <img class="play" src="src/assets/google-play.png" alt="triangulo play" />DOWNLOAD
    </button>
  </div>

  
    <div class="movil">
        <img class="movil1" src="../assets/header-iphone.png" alt="#" />
      </div>

  </section>
  <section id="primera-seccion">
      <div class="container">
        <div>
          <img src="../assets/ikonomorao.png" alt="#" />
          <div class="morao">Identify Goals</div>
        </div>
        <div>
          <img src="../assets/ikonoverde.png" alt="#" />
          <div class="morao">Situation Analysis</div>
        </div>
        <div>
          <img src="../assets/ikonorejo.png" alt="#" />
          <div class="morao">Tasks Settings</div>
        </div>
        <div>
          <img src="../assets/ikonoamarillo.png" alt="#" />
          <div class="morao4">Social Interaction</div>
        </div>
        <div>
          <img src="../assets/ikono-azul.png" alt="#" />
          <div class="morao5">Get Things Done</div>
        </div>
      </div>
    </section>

</template>

<style scoped>
h1 {
    font-size: 50px;
    text-align: center;
}

p{
    font-size: 15px;
    text-align: center;
}

.red1 {
    background-color: rgb(253, 97, 97);
    color: ghostwhite;
    border-radius: 20px;
    padding: 10px 13px;
    border: 0;
    font-weight: bold;
    flex-wrap: wrap;
    
   
   
    
}


   
.red2 {
    background-color: rgb(253, 97, 97);
    color: ghostwhite;
    border-radius: 20px;
    padding: 10px 13px;
    border: 0;
    font-weight: bold;
    flex-wrap: wrap;
   
} 


.red-boton {
  display: flex;
  justify-content: center;
  gap: 40px;}

  


.movil {
    display: flex;
    justify-content: center;
}
.movil1 {
   width: 40em;
   animation-duration: 5s;
  animation-name: slidein;
  animation-iteration-count: 3;
  animation-direction: alternate;
}
.container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}
 
.morao4 , .morao5 {
    margin-top: 8px;
}



</style>