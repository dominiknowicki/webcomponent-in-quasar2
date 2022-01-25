<template>
  <q-page class="flex flex-center">
    <wc-webcomponent message="Hello from webcomponent!"></wc-webcomponent>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>
