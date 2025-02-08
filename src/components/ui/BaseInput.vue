<template>
    <div>
        <label :for="identity" class="fw-semibold">
            {{ label }} <span style="color: #cb3a31">*</span>
            <slot></slot>
        </label>
        <input :class="[{ 'd-none': isImage }, 'form-control']" :type="type" :id="identity" :placeholder="placeholder"
            :value="modelValue" :readonly="readonly === '1'" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script setup>
defineProps({
    type: { type: String, required: true },
    label: { type: String, required: true },
    identity: { type: String, required: true },
    placeholder: { type: String, required: false },
    modelValue: { type: String, required: true },
    readonly: { type: String, required: true, default: "0" },
    isImage: { type: Boolean, required: true, default: false } // ✅ Tambahkan prop isImage dengan default false
});

defineEmits(["update:modelValue"]);
</script>
