<template>
  <div>
    <h1 style="margin-bottom: 0px;"> Toyi Debug (check console) </h1>
  </div>
</template>

<script setup lang="ts">

const backend = useBackend()
console.log(backend['titi']())

</script>
