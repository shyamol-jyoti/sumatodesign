<template>
	<div>
		<h3>Radio</h3>
		<hr>

		<h6>Basic Example - Stacked Radio</h6>
		<base-radio
			class="mb-2 clearfix"
			v-model="genderType"
			v-for="gender in genders"
			:key="gender"
			:id="gender"
			name="gender"
			:model-value="gender"
			:value="gender"
		>{{ gender }}</base-radio>

		<div class="alert alert-light shadow-sm my-3">
			<pre class="mb-0">{{ genderType }}</pre>
		</div>

		<h6 class="mt-4 mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<h6 class="mt-5">Basic Example - Inline Radio</h6>
		<base-radio
			class="mb-2 clearfix"
			v-model="colorType"
			v-for="color in colors"
			:key="color"
			:id="color"
			name="color"
			:model-value="color"
			:value="color"
			:stacked="false"
		>{{ color }}</base-radio>

		<div class="alert alert-light shadow-sm my-3">
			<pre class="mb-0">{{ colorType }}</pre>
		</div>

		<h6 class="mt-4 mb-3">How to use</h6>
		<prism-editor language="html" :code="code2" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<h6 class="mt-5">Example with Custom label</h6>
		<base-radio
			class="mb-3 clearfix border px-3 py-2 rounded-lg"
			v-model="paymentModeSelected"
			v-for="payment in paymentModes"
			:key="payment"
			:id="payment"
			name="paymentMode"
			:model-value="payment"
			:value="payment"
		>
			<div class="d-flex">
				<div>
					<p class="text-black mb-0">{{ payment }}</p>
					<p class="text-muted small mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
				</div>
			</div>
		</base-radio>

		<div class="alert alert-light shadow-sm my-3">
			<pre class="mb-0">{{ paymentModeSelected }}</pre>
		</div>

		<h6 class="mt-4 mb-3">How to use</h6>
		<prism-editor language="html" :code="code3" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<h6 class="mt-5 mb-3">Example without components</h6>
		<label class="border px-3 py-2 bg-white rounded-pill mr-3 cursor-pointer">
			<input name="type" type="radio" value="workshop" class="mr-2" checked>Workshop
		</label>
		<label class="border px-3 py-2 bg-white rounded-lg mr-3 cursor-pointer">
			<input name="type" type="radio" value="meetup" class="mr-2">Meetup
		</label>
		<label class="border px-3 py-2 bg-white rounded-lg cursor-pointer">
			<input name="type" type="radio" value="conference" class="mr-2">Conference
		</label>
		<prism-editor language="html" :code="code4" :line-numbers="true" class="rounded-lg mb-4 mt-3"></prism-editor>
	</div>
</template>

<script>
const code = `<base-radio
	class="mb-2 clearfix"
	v-model="genderType"
	v-for="gender in genders"
	:key="gender"
	:id="gender"
	name="gender"
	:model-value="gender"
	:value="gender"
>{{ gender }}</base-radio>`;

const code2 = `<base-radio
	class="mb-2 clearfix"
	v-model="colorType"
	v-for="color in colors"
	:key="color"
	:id="color"
	name="color"
	:model-value="color"
	:value="color"
	:stacked="false"
>{{ color }}</base-radio>`;

const code3 = `<base-radio
	class="mb-3 clearfix border px-3 py-2 rounded-lg"
	v-model="paymentModeSelected"
	v-for="payment in paymentModes"
	:key="payment"
	:id="payment"
	name="paymentMode"
	:model-value="payment"
	:value="payment"
>
	<div class="d-flex">
		<div>
			<p class="text-black mb-0">{{ payment }}</p>
			<p class="text-muted small mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
		</div>
	</div>
</base-radio>`;

const jsCode = `import BaseRadio from "@/components/BaseRadio.vue";

export default {
	data() {
		return {
			genderType: "Male",
			genders: ["Male", "Female", "Others"],

			colorType: "Red",
			colors: ["Red", "Green", "Yellow"],

			paymentModes: [
				"Online",
				"Internet Banking",
				"CreditCard",
				"Debit Card"
			],
			paymentModeSelected: "Online"
		};
	},
	components: {
		BaseRadio
	}
};`;

const code4 = `<label class="border px-3 py-2 bg-white rounded-pill mr-3 cursor-pointer">
	<input name="type" type="radio" value="workshop">Workshop
</label>
<label class="border px-3 py-2 bg-white rounded-lg mr-3 cursor-pointer">
	<input name="type" type="radio" value="meetup" class="mr-2">Meetup
</label>
<label class="border px-3 py-2 bg-white rounded-lg cursor-pointer">
	<input name="type" type="radio" value="conference" class="mr-2">Conference
</label>`;

import BaseRadio from "@/components/BaseRadio.vue";

export default {
	data() {
		return {
			code: code,
			code2: code2,
			code3: code3,
			code4: code4,
			jsCode: jsCode,

			genderType: "Male",
			genders: ["Male", "Female", "Others"],

			colorType: "Red",
			colors: ["Red", "Green", "Yellow"],

			paymentModes: [
				"Online",
				"Internet Banking",
				"CreditCard",
				"Debit Card"
			],
			paymentModeSelected: "Online"
		};
	},
	components: {
		BaseRadio
	}
};
</script>

<style lang="scss" scoped>
</style>