<template>
  <div class="vue-docs-container">
    <h1>404</h1>

    <blockquote>{{ getMsg() }}</blockquote>

    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
const msgs = [
  `这里什么都没有。`,
  `你是怎么来到这里的？`,
  `这是 404 哦。`,
  `你可能已经断开连接。`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
