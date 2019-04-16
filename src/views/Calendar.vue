<template>
	<div>
		<h3 class="mb-3">Calendar</h3>
		<hr>

		<div class>
			<div class="form-group w-25 d-inline-block mr-2">
				<label for="name">Name</label>
				<input type="text" id="name" class="form-control">
			</div>

			<base-button class="btn btn-primary">Register Now</base-button>
		</div>
	</div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
	data() {
		return {};
	},
	components: {
		BaseButton
	}
};
</script>

<style lang="scss" scoped>
</style>