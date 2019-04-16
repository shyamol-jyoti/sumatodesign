<template>
	<div>
		<h3 class="mb-3">Inputs</h3>
		<hr>

		<div class="bg-white p-4 rounded shadow-sm">
			<form @submit.prevent="submitForm">
				<base-input
					:has-error="true"
					label="Name"
					v-model="name"
					id="name"
					placeholder="Please enter your name..."
					@keydown="delete errors['name']"
				>
					<div slot="invalid-feedback">Please provide a name.</div>
				</base-input>

				<base-input-password
					:has-error="errors['password'] ? true : false"
					label="Password"
					v-model="password"
					id="password"
					placeholder="More than 8 characters..."
					@keydown="delete errors['password']"
				>
					<div slot="invalid-feedback">Please enter a password.</div>
				</base-input-password>

				<base-button ref="registerButton" class="btn btn-primary" type="submit">Register Now</base-button>
			</form>
		</div>
	</div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseInputPassword from "@/components/BaseInputPassword.vue";

export default {
	data() {
		return {
			name: "",
			password: "",
			errors: {}
		};
	},
	components: {
		BaseButton,
		BaseInput,
		BaseInputPassword
	},

	methods: {
		submitForm() {
			this.$refs.registerButton.startLoading();

			this.errors = {
				name: ["Name is required"],
				password: ["Password is required"]
			};
		}
	}
};
</script>

<style lang="scss" scoped>
</style>