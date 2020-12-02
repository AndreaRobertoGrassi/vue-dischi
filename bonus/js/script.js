var app=new Vue({
  el:'#app',
  data:{
    img:'../spotify.png',  //logo
    albums:[],   //array di appoggio per non richiamare l'api piu volte
    albumsFiltrato:[], // array che contiene i dischi in base al filtraggio
    generi:['Tutti i generi'], //array che contiene i generi musicali
    indiceAttivo:0,  //indice per selezionare il genere
    tendina:'none'   //controlla il display per il genre musicale
  },

  mounted:function () {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((risposta) => {
      this.albums=risposta.data.response;
      this.albumsFiltrato=this.albums;
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
      this.albumsFiltrato=[];
      this.indiceAttivo=i;
      this.albums.forEach((item) => {
        if (item.genre==this.generi[i]) {
          this.albumsFiltrato.push(item);
        }else if(this.generi[i]=='Tutti i generi'){
          this.albumsFiltrato.push(item);
        }
      });
    }
  }
})
