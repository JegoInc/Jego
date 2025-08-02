import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import YouTube from './components/YouTube.vue'
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
  }
} 