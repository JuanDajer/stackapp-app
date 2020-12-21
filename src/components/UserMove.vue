<template>
  <div id="UserMove">
    <div class="continer_user_move">
      <h2>Recarga </h2>

      <form v-on:submit.prevent="processRecarga">
        <input type="tetx" v-model="value" placeholder="Valor" />
        <br />
        <button type="submit">Hacer recarga</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserMove",
  data: function () {
    return {
      username: "",
      value: "",
    };
  },

  methods: {
    processRecarga: function () {
      var self = this;
      let move_in = {
        username: this.username,
        value: this.value,
      };
      axios
        .put("http://127.0.0.1:8000/user/movem/", move_in, { headers: {} })
        .then((result) => {
          alert("Recarga correcta. Nuevo saldo: " + result.data.actual_saldo);
        })
        .catch((error) => {
                    if (error.response.status == "422")
                        alert("ERROR 422: Por favor ingrese un valor válido");
                    else 
                        alert("Error en la transacción");                     
                })
    },
  },

  created: function () {
    this.username = localStorage.getItem("current_username");
  },
};
</script>

<style>
#UserMove {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.continer_user_move {
  border: 3px solid #283747;
  border-radius: 10px;

  width: 25%;
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#UserMove h2 {
  color: #473628;
  font-size: 50px;
}

#UserMove form {
  width: 50%;
}

#UserMove input {
  height: 40px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #000000;
}

#UserMove button {
  width: 100%;
  height: 40px;

  color: #e5e7e9;
  background: #6b3a01;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}

#UserMove button:hover {
  color: #000000;
  background: rgb(243, 138, 19);
  border: 1px solid #40472834;
}
</style>
