<template>
  <router-link
    class="nav-link"
    :class="{ 'nav-link-active': activeClass }"
    :to="`${link.path === '/' ? '' : link.path}/${link.children[0].path}`"
    @click="clickLinks({ children: link.children })"
  >{{ link.meta && link.meta.title || link.name }}</router-link>
</template>
<script>
import { inject } from 'vue'
export default {
  name: 'NavLink',
  props: {
    link: Object,
    activeClass: Boolean
  },
  setup () {
    const updateSidebarLinks = inject('updateSidebarLinks')
    const clickLinks = ({ children }) => {
      updateSidebarLinks(children)
    }

    return { clickLinks }
  }
}
</script>