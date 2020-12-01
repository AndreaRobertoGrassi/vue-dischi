var app=new Vue({
  el:'#app',
  data:{
    img:'../spotify.png',  //logo
    albums:[],   //array che contiene tutti i dischi
    generi:['---'] //array che contiene i generi musicali
  },
  
  mounted:function () {
    //cihamo l'api
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((risposta) => {
      this.albums=risposta.data.response;
      this.albums.forEach((item, i) => {
        if (!this.generi.includes(item.genre)) {
          this.generi.push(item.genre);
        }
      });
    });
  },

  methods:{
    //funzione per scegliere il genere
    scegliGenere:function (i) {
      this.albums=[];
      axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((risposta) => {
        risposta.data.response.forEach((item) => {
          if (item.genre==this.generi[i]) {
            this.albums.push(item);
          }else if(this.generi[i]=='---'){
            this.albums.push(item);
          }
        });
      });
    }
  }
})
