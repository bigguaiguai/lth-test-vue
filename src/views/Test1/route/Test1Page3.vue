<template>
  <FoldLeft>
    <template v-slot:left>
      left123
    </template>
    <template v-slot:main>
      main456
    </template>
  </FoldLeft>
</template>

<script>
export default {
  name: 'Test1Page3',
  components: {
    FoldLeft: () => import('@/components/common/FoldLeft.vue'),
  }
}
</script>