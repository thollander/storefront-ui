<template>
  <SfButton type="button" @click="open = true"> Open Drawer </SfButton>

  <transition
    enter-active-class="transition duration-500 ease-in-out"
    leave-active-class="transition duration-500 ease-in-out"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <SfDrawer
      ref="drawerRef"
      v-model="open"
      :placement="placement"
      :class="[
        'bg-neutral-50',
        'border',
        'border-gray-300',
        { 'max-w-[370px]': placement === SfDrawerPlacement.left || placement === SfDrawerPlacement.right },
      ]"
    >
      <header class="flex items-center justify-between px-10 py-6 bg-primary-700">
        <div class="flex items-center text-white"><SfIconFavorite class="mr-2" /> Your favorite items</div>
        <SfButton square variant="tertiary" class="text-white" @click="open = false">
          <SfIconClose />
        </SfButton>
      </header>
      <div class="p-5 px-10">
        <p class="mb-2">
          Focus is trapped inside this Drawer and <strong>tab</strong> button cycle through
          <a href="#" class="underline text-primary-700"> Focusable Element </a> and another
          <a href="#" class="underline text-primary-700"> Focusable Element </a>
        </p>
        <strong>You can close Drawer by clicking outside or focus and use ESC button</strong>
      </div>
    </SfDrawer>
  </transition>
</template>

<script lang="ts" setup>
import { SfDrawer, SfDrawerPlacement, SfButton, SfIconFavorite, SfIconClose, useTrapFocus } from '@storefront-ui/vue';
import { ref } from 'vue';

const placement = ref<`${SfDrawerPlacement}`>('left');
const open = ref(false);
const drawerRef = ref();

useTrapFocus(drawerRef, { activeState: open });
</script>
