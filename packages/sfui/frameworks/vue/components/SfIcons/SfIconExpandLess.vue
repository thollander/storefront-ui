<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="expand-less"
    ><path
      d="M17 15a.998.998 0 0 1-1.41 0l-3.885-3.875L7.82 15a.998.998 0 0 1-1.41-1.412l4.588-4.587a1 1 0 0 1 1.414 0L17 13.589A.998.998 0 0 1 17 15Z"
  /></SfIconBase>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { SfIconBase, SfIconSize } from '@storefront-ui/vue';

defineProps({
  size: {
    type: String as PropType<`${SfIconSize}`>,
    default: SfIconSize.base,
  },
});
</script>
