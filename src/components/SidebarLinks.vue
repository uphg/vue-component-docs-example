<template>
  <div class="sidebar-links">
    <div
      class="sidebar-item"
      v-for="(link, index) in sidebarLinks"
      :key="'route' + index"
    >
      <SidebarLink
        :active-class="index === sidebarIndex"
        :path="link.path"
        :meta="link.meta"
      />
    </div>
  </div>
</template>
<script>
import { inject, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SidebarLink from './SidebarLink.vue'

export default {
  components: { SidebarLink },
  setup () {
    const route = useRoute()
    const children = route.matched[0].children

    const sidebarIndex = inject('sidebarIndex')
    const updateSidebarIndex = inject('updateSidebarIndex')
    const sidebarLinks = inject('sidebarLinks')
    const updateSidebarLinks = inject('updateSidebarLinks')

    onMounted(() => {
      updateSidebarLinks(children.filter(item => !item.hidden))
      updateSidebarIndex(route)
    })

    return { sidebarIndex, sidebarLinks }
  }
}
</script>
<style lang="scss">
.sidebar-links {
  padding: 18px 24px;
}
.sidebar-item {
  padding: 4px 0;
}
</style>