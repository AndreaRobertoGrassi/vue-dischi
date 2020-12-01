var app=new Vue({
  el:'#app',
  data:{
    img:'../spotify.png',  //logo
    albums:[],   //array che contiene tutti i dischi
    generi:['Tutti i generi'], //array che contiene i generi musicali
    attiva:false,
    indiceAttivo:0,
    tendina:'none'
  },

  mounted:function () {
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

    // funzione per il dropdown
    dropdown:function () {
      if (this.tendina=='none') {
        this.tendina='block';
      }else {
        this.tendina='none';
      }
    },

    //funzione per scegliere il genere
    scegliGenere:function (i) {
      this.albums=[];
      this.indiceAttivo=i;
      axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((risposta) => {
        risposta.data.response.forEach((item) => {
          if (item.genre==this.generi[i]) {
            this.albums.push(item);
          }else if(this.generi[i]=='Tutti i generi'){
            this.albums.push(item);
          }
        });
      });
    }
  }
})
