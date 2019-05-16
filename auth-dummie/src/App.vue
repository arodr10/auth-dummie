<template>
  <v-app>
    <v-layout justify-center align-center>
      <v-flex xs12 sm8 md6 lg5 xl4>
        <v-card class="elevation-6">
          <v-toolbar color="primary" dark card>
            <v-toolbar-title>
              Ingresa tus Credenciales
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
          </v-card-text>
          <v-card-text>
            <v-layout justify-end>
              <v-btn color="primary" @click="ingresar">Ingresar</v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import { auth_dummie } from './script/auth-firebase.js'

export default {
  name: 'App',
  data () {
    return {
      formulario: {
        email: '',
        password: ''
      }
    }
  },
  methods : {
    async ingresar() {
    }
  }
}
</script>