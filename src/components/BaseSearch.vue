<template>
	<div>
		<input
			v-bind="$attrs"
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"
			class="search-input form-control rounded shadow-sm"
			:class="searchClass"
		>
	</div>
</template>

<script>
export default {
	name: "BaseSearch",
	inheritAttrs: false,

	data() {
		return {
			search: ""
		};
	},

	props: {
		value: {
			type: String
		},
		searchClass: {
			type: String
		}
		// placeholder: {
		// 	type: String,
		// 	default: "Search..."
		// }
	},

	methods: {
		// searchQuery() {
		// 	this.$emit("input", this.search);
		// }
	}
};
</script>

<style scoped>
.search-input {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='24' height='24'%3E%3Cpath fill='%23dae1e7' d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	padding-left: 42px;
	background-position: 8px 6px;
}
.search-input.form-control-lg {
	background-position: 10px 12px;
}
</style>