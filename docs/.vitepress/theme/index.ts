import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import YouTube from './components/YouTube.vue'
import Columns from './components/Columns.vue'
import Column from './components/Column.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 可以在这里添加自定义插槽
    })
  },
  enhanceApp({ app }) {
    app.component('YouTube', YouTube)
    app.component('Columns', Columns)
    app.component('Column', Column)
  }
} 