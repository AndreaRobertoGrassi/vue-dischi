var app=new Vue({
  el:'#app',
  data:{
    img:'spotify.png',  //logo
    albums:[]   //array che contiene tutti i dischi
  },
  mounted:function () {
    //cihamo l'api
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((risposta) => {
      this.albums=risposta.data.response;
    });
  }
})
