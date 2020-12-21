<template>

<div id="Fuentef" class="crear_user">
    <div id="d-flex flex-row bd-highlight">
    <h2>Registra tus datos</h2>
    <img src="../assets/pngegg.png" height="400" width="400">
   </div>
<div class="container_crear_user">

<form v-on:submit.prevent="submitForm">
		<div class="form-group">
			<label for="nombre">Nombre</label>
			<input type="text" class="form-control" id="name" v-model="form.nombre">
            
		</div>
        <br>
		<div class="form-group">
			<label for="apellido">Apellido</label>
			<input type="text" class="form-control" id="apellido" v-model="form.apellido">
		</div>
        <br>
		<div class="form-group">
			<label for="username">Nickname</label>
			<input type="text" class="form-control" id="username" v-model="form.username">
		</div>
        <br>
		<div class="form-group">
			<label for="email">Email</label>
			<input type="text" class="form-control" id="email" placeholder="name@example.com" v-model="form.email">
		</div>
        <br>
        <div class="form-group">
			<label for="year">Año Nacimiento</label>
			<input type="text" class="form-control" id="year"  v-model="form.year">
		</div>
        <br>
		<div class="form-group">
			<label for="password">Contraseña</label>
			<input type="text" class="form-control" id="password" v-model="form.password">
		</div>
        <br>
		<div class="form-group">
			<label for="balance">Saldo</label>
			<input type="text" class="form-control" id="balance" v-model="form.balance">
		</div>
        <br>
        <br>
        <div class="form-group">
                    <button class="btn btn-primary">Crear cuenta</button>
        </div>
   
</form>

</div>
</div>
</template>
<script>
import axios from 'axios';

export default {
name: 'PostFormAxios',
    data(){
        return{
            form: {
                nombre: '',
                apellido: '',
                username: '',
                email: '',
                year:'',
                password: '',
                balance: '',                
            }
        }
    },
    methods:{
        submitForm(){
            console.log(this.form)
            axios.post('http://127.0.0.1:8000/createuser/', this.form)
                 .then((res) => {
                    console.log(res.data)
                    alert("Usuario creado correctamente")
		    this.$router.push({name: "UserAuth"})
                 })
                 .catch((error) => {
                     if (error.response.status == "404")
                        alert("ERROR 404: Usuario ya registrado.");
                    if (error.response.status == "403")
                        alert("ERROR 403: Datos incompletos.");
                 }).finally(() => {
                     //Perform action in always
                 });
        }
    }
}
</script>

<style>
.crear_user{
margin: 0;
padding: 0%;
height: 100%;
width: 100%;
display: flex;
overflow: hidden;
}
.crear_user h2{
color: crimson;
width: 50%;
font-size: 50px;
float : left;
margin-left: 10%;
display : flex;

}
.crear_user form{
width: 40%;
float : center;

}
.auth_user input{
height: 60px;
width: 100%;
box-sizing: border-box;
padding: 10px 20px;
margin: 5px 0;
border: 1px solid #283747;
}
.container_crear_user{
    margin-top: 40px;
    width: 25%;
    height: 60%;
        
}

</style>