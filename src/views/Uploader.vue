<template>
	<div>
		<h3 class="mb-3">Uploader</h3>
		<hr>

		<p>
			Please use
			<strong>Vue 2 Dropzone</strong> &amp;
			<strong>Vue FilePond</strong> uploader plugin for any image/file uploading purpose. Documentation available at
			<a
				href="https://rowanwins.github.io/vue-dropzone/docs/dist/#/installation"
				target="_blank"
			>https://rowanwins.github.io/vue-dropzone/docs/dist/#/installation</a> and
			<a
				href="https://github.com/pqina/vue-filepond"
				target="_blank"
			>https://github.com/pqina/vue-filepond</a> respectively.
		</p>

		<!-- @vdropzone-success="afterSuccess" -->
		<!-- @vdropzone-removed-file="removeFile" -->
		<h6 class="mt-5">Example 1 - Vue 2 Dropzone</h6>
		<vue-dropzone id="upload" :options="config"></vue-dropzone>

		<h6 class="mt-4 mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<h6 class="mt-5 mb-3">Example 2 - Vue FilePond</h6>
		<div class="p-4 rounded shadow-sm bg-white">Coming sooon..</div>
	</div>
</template>

<script>
const code = `<vue-dropzone id="upload" :options="config" @vdropzone-success="afterSuccess" @vdropzone-removed-file="removeFile"></vue-dropzone>`;

const jsCode = `import vueDropzone from "vue2-dropzone";
import "../assets/css/vue2Dropzone.css";

export default {
	data() {
		return {
			images: [],

			// Dropzone Config
			config: {
				// endpoint for uploading
				url: "http://tbassam.test/api/feeds/upload",
				maxFilesize: 5, // MB
				maxFiles: 5,
				// chunking: true,
				// chunkSize: 400, // Bytes
				thumbnailWidth: 150, // px
				thumbnailHeight: 150,
				addRemoveLinks: true,
				previewTemplate: this.dropzoneTemplate()
			}
		};
	},

	components: {
		vueDropzone
	},

	methods: {
		// Dropzone Custom Template
		dropzoneTemplate() {
			return \`<div class="dz-preview dz-file-preview">
					<div class="dz-image">
					<img data-dz-thumbnail />
					</div>
					<div class="dz-details">
						<div class="dz-size"><span data-dz-size></span></div>
						<div class="dz-filename"><span data-dz-name></span></div>
					</div>
					<div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
					<div class="dz-error-message"><span data-dz-errormessage></span></div>
					<div class="dz-success-mark"><svg class="text-success bg-white rounded-circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/></svg></div>
					<div class="dz-error-mark"><svg class="fill-current text-danger bg-white rounded-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"/></svg></div>
				</div>
			\`;
		},

		afterSuccess(file, response) {
			// response data from server
			this.images.push(response.data);
		},

		removeFile(file, error, xhr) {
			let fileName = JSON.parse(file.xhr.response).data;
			this.images.find((event_image, index) => {
				if (event_image === fileName) {
					this.images.splice(index, 1);
				}
			});
		}
	}
};`;

import vueDropzone from "vue2-dropzone";
import "../assets/css/vue2Dropzone.css";

export default {
	data() {
		return {
			code: code,
			jsCode: jsCode,

			// Dropzone Config
			config: {
				url: "http://tbassam.test/api/feeds/upload",
				// url: "http://teaboard.sumato.tech/api/images/upload",
				maxFilesize: 5, // MB
				maxFiles: 5,
				// chunking: true,
				// chunkSize: 400, // Bytes
				thumbnailWidth: 150, // px
				thumbnailHeight: 150,
				addRemoveLinks: true,
				previewTemplate: this.dropzoneTemplate()
			}
		};
	},

	components: {
		vueDropzone
	},

	methods: {
		// Dropzone Custom Template
		dropzoneTemplate() {
			return `<div class="dz-preview dz-file-preview">
					<div class="dz-image">
					<img data-dz-thumbnail />
					</div>
					<div class="dz-details">
						<div class="dz-size"><span data-dz-size></span></div>
						<div class="dz-filename"><span data-dz-name></span></div>
					</div>
					<div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
					<div class="dz-error-message"><span data-dz-errormessage></span></div>
					<div class="dz-success-mark"><svg class="text-success bg-white rounded-circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/></svg></div>
					<div class="dz-error-mark"><svg class="fill-current text-danger bg-white rounded-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"/></svg></div>
				</div>
			`;
		},

		afterSuccess(file, response) {
			this.event.event_images.push(response.data);
		},

		removeFile(file, error, xhr) {
			let fileName = JSON.parse(file.xhr.response).data;
			this.event.event_images.find((event_image, index) => {
				if (event_image === fileName) {
					this.event.event_images.splice(index, 1);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
</style>