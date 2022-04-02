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
          El rey del Sur - register
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
          <br>
          <v-btn
            text
            color="info"
            class="ma-0 subtitle-1 mt-3 text-none"
          >
            Olvide mi contraseña
          </v-btn>
        </div>
        <v-form
          :id="FORM_REGISTER"
          :ref="FORM_REGISTER"
          v-model="validForm"
          lazy-validation
          @submit.prevent="registerUser"
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
          <!-- <v-text-field
            v-model.trim="form.email"
            class="v-text-field--label-always-active"
            type="email"
            :disabled="processingForm"
            label="Correo Electronico"
            outlined
            :rules="rules.email"
          /> -->

          <div class="text-center">
            <v-btn
              :disabled="!validForm || processingForm"
              type="submit"
              :form="FORM_REGISTER"
              color="teal"
              class="white--text"
              :loading="processingForm"
              @click.prevent="registerUser"
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

import { mapActions } from 'vuex'
const FORM_REGISTER = 'FORM_REGISTER'

export default {
  components: {},
  data () {
    return {
      FORM_REGISTER,
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          (v) => !!v || 'Email es requerido'
          // (v) => EMAIL_VALID_REGEX.test(v) || this.$t('message.email_is_invalid')
        ]
        // password: [(v) => !!v || 'Password es requerido']
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
    registerUser () {
      const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://localhost:8080/finish_sign_up',
        // url: 'localhost/register',
        // This must be true.
        handleCodeInApp: true
        // iOS: {
        //   bundleId: 'com.example.ios'
        // },
        // android: {
        //   packageName: 'com.example.android',
        //   installApp: true,
        //   minimumVersion: '12'
        // },
        // dynamicLinkDomain: 'localhost/products'
      }
      console.log(this.form)
      this.sendSignInLinkToEmail({ email: this.form.email, actionCodeSettings })
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
