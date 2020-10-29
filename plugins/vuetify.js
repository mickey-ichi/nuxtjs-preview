import Vue from 'vue'
import Vuetify from 'vuetify'
import VuetifyLib from 'vuetify/lib'
import Colors from '@/constants/Colors'

const options = {
  theme: {
    dark: true,
    themes: Colors,
    options: { customProperties: true }
  }
}

Vue.use(new Vuetify(options))

export default new VuetifyLib(options)
