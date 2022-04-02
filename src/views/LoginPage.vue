<template>
  <v-container
    class="d-flex justify-center"
    fill-height
  >
    <v-card
      width="500"
      class="mb-2"
    >
      <v-card-text>
        <div class="d-flex justify-center align-end pb-6 pt-3">
          El rey del Sur
        </div>
        <div class="text-center">
          <v-btn
            type="submit"
            color="teal"
            class="white--text"
            :loading="processingForm"
            @click.prevent="registerAuthGoogleProvider"
          >
            Iniciar Sesión con google
          </v-btn>
        </div>

        <v-divider class="my-4" />
        <v-form
          :id="FORM_LOGIN"
          :ref="FORM_LOGIN"
          v-model="validForm"
          lazy-validation
          @submit.prevent="userLogin"
        >
          <v-text-field
            v-model.trim="form.email"
            class="v-text-field--label-always-active"
            type="email"
            :disabled="processingForm"
            label="Correo Electronico"
            outlined
            :rules="rules.email"
          />
          <v-text-field
            v-model.trim="form.password"
            class="v-text-field--label-always-active"
            :disabled="processingForm"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            label="Contraseña"
            outlined
            :rules="rules.password"
            :error="!!errors.password"
            :error-messages="errors.password"
            @keyup="errors.password = null"
            @click:append="showPassword = !showPassword"
          />
          <div class="text-center">
            <v-btn
              :disabled="!validForm || processingForm"
              type="submit"
              :form="FORM_LOGIN"
              color="teal"
              class="white--text"
              :loading="processingForm"
              @click.prevent="userLogin"
            >
              Iniciar Sesión
            </v-btn>
            <br>
            <v-btn
              text
              color="info"
              class="ma-0 subtitle-1 mt-3 text-none"
            >
              Olvide mi contraseña
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import { mapActions } from 'vuex'

const FORM_LOGIN = 'FORM_LOGIN'

export default {
  components: {},
  data () {
    return {
      FORM_LOGIN,
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          (v) => !!v || 'Email es requerido'
          // (v) => EMAIL_VALID_REGEX.test(v) || this.$t('message.email_is_invalid')
        ],
        password: [(v) => !!v || 'Password es requerido']
      },
      errors: {
        password: null
      },
      validForm: true,
      showPassword: false,
      processingForm: false
    }
  },
  methods: {
    ...mapActions({
      registerAuthGoogleProvider: 'auth/registerAuthGoogleProvider',
      sendSignInLinkToEmail: 'auth/sendSignInLinkToEmail'
    }),
    async userLogin () {
      if (!this.$refs[FORM_LOGIN].validate()) return

      // this.processingForm = true
      // const data = JSON.parse(JSON.stringify(this.form))
      // console.log(data)

      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
          // ...
        })
        .catch((error) => {
          console.log(error)
          // var errorCode = error.code
          // var errorMessage = error.message
          // ..
        })
    }
  }
}
</script>

<style lang="scss">
.v-text-field {
  &--label-always-active {
    .v-label {
      background: white;
      border-left: 3px solid white;
      border-right: 3px solid white;
      transform: translateY(-24px) scale(0.75);
    }
  }
}
</style>
