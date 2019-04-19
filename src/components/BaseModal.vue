<template>
	<portal to="modal-destination">
		<transition name="modal">
			<div class="modal-mask" @click="close" v-show="show">
				<div class="modal-container my-5 p-4" @click.stop>
					<h5 class="font-weight-bold">
						<slot name="title"></slot>
					</h5>
					<slot name="body"></slot>
				</div>
			</div>
		</transition>
	</portal>
</template>

<script>
export default {
	name: "BaseModal",

	props: {
		show: {
			type: Boolean,
			default: false
		}
	},

	methods: {
		close() {
			this.$emit("close");
		}
	},

	mounted() {
		document.addEventListener("keydown", e => {
			if (this.show && e.keyCode == 27) {
				this.close();
			}
		});
	}
};
</script>

<style lang="scss">
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	transition: opacity 0.3s ease;
}

.modal-container {
	max-width: 380px;
	margin-left: auto;
	margin-right: auto;
	// padding: 20px 30px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
	font-family: inherit;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

@media screen and (min-width: 720px) {
	.modal-container {
		max-width: 480px;
	}
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>