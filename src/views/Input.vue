<template>
	<div>
		<h3 class="mb-3">Inputs</h3>
		<hr>

		<div class="bg-white p-4 mt-5 rounded shadow-sm">
			<form @submit.prevent="submitForm">
				<base-input
					:has-error="errors['name'] ? true : false"
					label="Name"
					help-text="Please enter your complete name"
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
					help-text="Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."
					v-model="password"
					id="password"
					placeholder="More than 8 characters..."
					@keydown="delete errors['password']"
				>
					<div slot="invalid-feedback">Please enter a password.</div>
				</base-input-password>

				<base-textarea
					v-model="content"
					label="Content"
					help-text="Write a content with full of resources..."
					:has-error="errors['content'] ? true : false"
					@keydown="delete errors['content']"
					stats
				>
					<div slot="invalid-feedback">Please enter your content.</div>
				</base-textarea>

				<base-input
					v-numeric-float
					:has-error="errors['number'] ? true : false"
					label="Number"
					v-model.number="number"
					id="number"
					placeholder="Please enter a numeric value..."
					@keydown="delete errors['number']"
				>
					<div slot="invalid-feedback">Please enter a numeric value.</div>
				</base-input>

				<base-input
					v-numeric-only
					:has-error="errors['phone'] ? true : false"
					label="Phone Number"
					v-model.number="phone"
					id="phone"
					placeholder="Please enter a valid 10 digit phone"
					@keydown="delete errors['phone']"
				>
					<div slot="invalid-feedback">Please enter a phone number.</div>
				</base-input>

				<!-- <base-input-phonenumber
					label="Phone Number"
					v-model="phone"
					:has-error="errors['phone'] ? true : false"
					@keydown="delete errors['phone']"
				>
					<div slot="invalid-feedback">Please enter a phone no.</div>
				</base-input-phonenumber>-->

				<base-button ref="registerButton" class="btn btn-primary" type="submit">Register Now</base-button>
			</form>
		</div>
	</div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseInputPassword from "@/components/BaseInputPassword.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";
import BaseInputPhonenumber from "@/components/BaseInputPhonenumber.vue";

export default {
	data() {
		return {
			name: "",
			password: "",
			content: "",
			phone: "",
			number: 0,
			errors: {}
		};
	},
	components: {
		BaseButton,
		BaseInput,
		BaseInputPassword,
		BaseTextarea
	},

	methods: {
		submitForm() {
			setTimeout(() => {
				this.$refs.registerButton.startLoading();
				this.errors = {
					name: ["Name is required"],
					password: ["Password is required"],
					content: ["Content is required"],
					phone: ["Phone is required"]
				};
			}, 0);
		}
	}
};
</script>

<style lang="scss" scoped>
</style>