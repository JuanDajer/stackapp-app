<template>
  <div id="app">
    <div class="header">
      <div class="wrapper">
        <h1>StackAPP</h1>
        <nav>
          <button v-on:click="init">Inicio</button>
          <button v-show="is_auth" v-on:click="getBalance">Saldo</button>
          <button v-show="is_auth" v-on:click="makeMove">Realizar recarga</button>
          <button v-show="is_auth == false" v-on:click="updateAuth">
            Iniciar Sesion
          </button>
          <button v-on:click="CloseSesion" v-if="is_auth">Cerrar Sesion</button>
        </nav>
      </div>
    </div>

    <div class="main-component">
      <router-view v-on:log-in="logIn"></router-view>
    </div>

    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
  </div>
</template>

<script>
import vueRouter from "vue-router";

export default {
  name: "App",
  components: {},
  data: function () {
    return {
      is_auth: localStorage.getItem("isAuth") || false,
    };
  },
  methods: {
    updateAuth: function () {
      var self = this;
      self.is_auth = localStorage.getItem("isAuth") || false;
      if (self.is_auth == false) self.$router.push({ name: "UserAuth" });
      else {
        let username = localStorage.getItem("current_username");
        self.$router.push({ name: "user", params: { username: username } });
      }
    },

    logIn: function (username) {
      localStorage.setItem("current_username", username);
      localStorage.setItem("isAuth", true);
      this.updateAuth();
    },

    init: function () {
      if (this.$route.name != "user") {
        let username = localStorage.getItem("current_username");
        this.$router.push({ name: "user", params: { username } });
      }
    },
    getBalance: function () {
      if (this.$route.name != "user_balance") {
        let username = localStorage.getItem("current_username");
        this.$router.push({ name: "user_balance", params: { username } });
      }
    },
    UserCreate: function () {
      if (this.$route.name != "UserCreate") {
        this.$router.push({ name: "UserCreate" });
      }
    },

    CloseSesion: function () {
      localStorage.removeItem("current_username");
      localStorage.removeItem("isAuth");
      this.updateAuth();
    },
    makeMove: function () {
      if (this.$route.name != "UserMove") {
        let username = localStorage.getItem("current_username");
        this.$router.push({ name: "UserMove" });
      }
    },
  },

  created: function () {
    this.$router.push({ name: "root" });
    this.updateAuth();
  },
};
</script>

<style>
.body {
  margin: 0 0 0 0;
}
.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #000000f6;
  color: white;
  overflow: hidden;
}
.header h1 {
  font-size: 45px;
  float: left;
  line-height: 40px;
}
.header nav {
  float: right;
  font-size: 20px;
  line-height: 60px;
  padding: 0px 30px;
}

.header nav button {
  border-radius: 25px;
  height: fit-content;
  display: inline-flex;
  background-color: rgba(107, 52, 7, 0.767);
  align-items: flex-start;

  color: white;
  font-family: sans-serif;
  font-weight: bold;
  padding: 14px 20px;
  margin: 0 8px;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  transition: all 350ms ease;
}
.header nav button::before {
  content: " ";
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  border-radius: 20px;
}
.header nav button:hover {
  background: linear-gradient(to bottom, #75f0d7, #eaeee2);
  box-shadow: 0px 3px 20px 0px rgb(248, 151, 24);
  color: rgb(7, 7, 7);
  transform: scale(1.2);
}
.header a {
  text-align: right;
  margin-left: 10px;
  color: rgb(242, 240, 245);
  font-size: 15px;
}
.main-component {
  height: 80vh;
  margin: 20px;
  padding: 0%;
  background: linear-gradient(to bottom, #0f014b86, #4b40e980);
  justify-content: space-between;
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #000000;
  color: #e5e7e9;
}
.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  width: 90%;
  margin: auto;
  overflow: hidden;
}
</style>
