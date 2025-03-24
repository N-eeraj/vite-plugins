<script setup lang="ts">
  console.log("hi log")
     console.warn("warning!!")   ;
console.error(`ERROR`);
console.info('i_n_f_o')
const obj = {rowA: 1, rowB: 2}   ; console.table(obj);
</script>

<template>
  <div>
    <NuxtRouteAnnouncer :data-cy="`DYNAMIC-DATA-CY`" aria-label="ARIA-LABEL" :data-test="`DYNAMIC-DATA-TEST`" />
    <NuxtWelcome data-cy="STATIC-DATA-CY" aria-label="ARIA-LABEL" data-test="STATIC-DATA-TEST" />
  </div>
</template>
