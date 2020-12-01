var app=new Vue({
  el:'#app',
  data:{
    img:'spotify.png',
    albums:[]
  },
  mounted:function () {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((risposta) => {
      this.albums=risposta.data.response;
    });
  }
})
