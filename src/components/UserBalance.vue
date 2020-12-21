<template>
<div id="UserBalance">
<h2>{{nombre}} {{apellido}}</h2>
<h2>Tu saldo es: <span> {{balance}} COP </span> </h2>
</div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'UserBalance',
    data: function (){
        return {
            username: "",
            nombre : "",
            apellido: "",
            balance: 0
        }
    },
    
    created: function(){
        
        let self = localStorage.getItem('current_username')
        if(self === null){
            this.username = 'Default';
        }
        else{
            this.username = self;
            console.log(self)
            axios.get("https://stackapp-api.herokuapp.com/user/balance/" + this.username)
                .then((result) => {
                    this.balance = result.data.balance
		    this.nombre = result.data.nombre
                    this.apellido = result.data.apellido
                })
                .catch((error) => {
                alert("ERROR Servidor");
            });
        }
        
    }
}
</script>
<style>
#UserBalance{
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
#UserBalance h2{
font-size: 50px;
color:  #24313f;
}
#UserBalance span{
color: crimson;
font-weight: bold;
}
</style>