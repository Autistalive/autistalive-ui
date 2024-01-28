<script setup lang="ts">
defineOptions({
  inheritAttrs: false
});

type Props = {
  modelValue?: string | null;
  iconSide?: "left" | "right" | null;
  placeholderStr?: string | null;
  type?: string | null;
  errors?: string[] | string;
};

const props = defineProps<Props>();
defineEmits(["update:modelValue"]);

const renderedErrors = computed(() =>
  Array.isArray(props.errors)
    ? props.errors
    : props.errors
      ? [props.errors]
      : []
);

const slots = useSlots();
const iconPos = props.iconSide == "left"
const type = props.type ?? "text";

const iconClass = { 'right-[85%]': iconPos, 'left-[85%]': !iconPos }
const paddingClass = {
  'pl-12': iconPos && !!slots.default,
  'pr-12': !iconPos && !!slots.default,
}

</script>

<template>
  <div class="relative">
    <input :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="border-2 rounded-lg border-indigo-700 bg-gray-50 placeholder:text-gray-500" :class=paddingClass
      :placeholder="props.placeholderStr != null ? props.placeholderStr : ''" v-bind="$attrs" :type=type />

    <div class="absolute top-1/2 -translate-y-1/2 text-indigo-700" :class=iconClass>
      <slot></slot>
    </div>

    <!-- Validation Errors -->
    <ul v-if="renderedErrors?.length > 0" class="mt-3 text-sm text-red-600">
      <li v-for="error in renderedErrors" :key="error">{{ error }}</li>
    </ul>
  </div>
</template>
