<template>
	<div class="form-group">
		<label :for="label" class="mb-1">{{ label }}</label>
		<input
			:type="type"
			class="form-control"
			v-bind="$attrs"
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"
			:disabled="disabled"
			:class="hasError ? 'is-invalid' : ''"
			@keydown="$emit('keydown', $event)"
		>

		<div v-if="hasError == true" class="invalid-feedback">
			<slot name="invalid-feedback"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "BaseInput",

	inheritAttrs: false,

	props: {
		label: {
			type: String
		},
		type: {
			type: String,
			default: "text"
		},
		value: {
			type: String
		},
		disabled: {
			type: Boolean,
			default: false
		},
		hasError: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="scss" scoped>
</style>