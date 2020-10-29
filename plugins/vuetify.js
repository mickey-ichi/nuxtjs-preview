import Vuetify from 'vuetify'
import Colors from '@/constants/Colors'

const options = {
  theme: {
    dark: true,
    themes: Colors,
    options: { customProperties: true }
  }
}

export default new Vuetify(options)
