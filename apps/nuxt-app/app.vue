<template>
  <div>
    <NuxtRouteAnnouncer :data-cy="`DYNAMIC-DATA-CY`" aria-label="ARIA-LABEL" :data-test="`DYNAMIC-DATA-TEST`" />
    <NuxtWelcome data-cy="STATIC-DATA-CY" aria-label="ARIA-LABEL" data-test="STATIC-DATA-TEST" />
  </div>
</template>
