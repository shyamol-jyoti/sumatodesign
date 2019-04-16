<template>
	<div :class="{'d-inline-block w-auto mr-4': stacked == false, 'd-flex w-100' : stacked == true}">
		<label class="d-inline-flex align-items-center mb-0" :for="id">
			<!-- Input element for the radio button -->
			<input
				:id="id"
				type="radio"
				class="check-custom"
				:name="name"
				:value="value"
				:checked="modelValue == value ? true : false"
				@change="$emit('change', value)"
			>
			<!-- Customization element for the radio button -->
			<span class="check-toggle" :class="sizeClass"></span>

			<span class="ml-3">
				<slot></slot>
			</span>
		</label>
	</div>
</template>

<script>
// https://hackernoon.com/hacking-custom-checkboxes-and-radios-5d48230440d
export default {
	name: "BaseRadio",
	model: {
		prop: "modelValue",
		event: "change"
	},

	props: {
		modelValue: {
			type: String,
			default: ""
		},
		value: {
			type: [String, Object, Array],
			default: ""
		},
		name: {
			type: String,
			default: ""
		},
		id: {
			type: [String, Number],
			default: ""
		},
		stacked: {
			type: Boolean,
			default: true
		},
		size: {
			type: String,
			default: "medium"
		}
	},

	computed: {
		sizeClass() {
			return {
				medium: this.size == "medium",
				large: this.size == "large"
			};
		}
	}
};
</script>

<style lang="scss" scoped>
/* Styles for hiding the native radio button */
input[type="radio"].check-custom {
	position: absolute;
	left: -10000px;
	top: auto;
	width: 1px;
	height: 1px;
	overflow: hidden;
}

/* Styles for the basic appearance of the custom radio button */
input[type="radio"].check-custom ~ .check-toggle {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	border: 2px solid #969696;
	border-radius: 50%;
	cursor: pointer;
	box-sizing: border-box;
}

/* Styles for the hover state appearance of the custom radio button */
input[type="radio"].check-custom:hover ~ .check-toggle {
	border: 2px solid #4a4a4a;
}

/* Styles for the focus state appearance of the custom radio button */
input[type="radio"].check-custom:focus ~ .check-toggle {
	border-color: #b0d5ff;
	box-shadow: 0 0 0 2px rgba(23, 133, 255, 0.25);
}

/* Styles for the checked state appearance of the custom radio button */
input[type="radio"].check-custom:checked ~ .check-toggle {
	border: 2px solid #1785ff;
}

/* Styles for the checked state appearance of the custom radio button */
input[type="radio"].check-custom:checked ~ .check-toggle::after {
	content: "";
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 50%;
	height: 50%;
	margin: auto;
	position: absolute;
	border-radius: 50%;
	background: #1785ff;
}

/* Size */
.check-toggle.medium {
	width: 1.25rem;
	height: 1.25rem;
}

.check-toggle.large {
	width: 1.5rem;
	height: 1.5rem;
}
</style>