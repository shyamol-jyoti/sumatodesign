<template>
	<div>
		<h3 class="mb-3">Table</h3>
		<hr>

		<h6 class="mt-5 mb-3">Example 1 - Simple Table</h6>
		<div class="table-responsive mb-5 table-custom-styled rounded">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">Role</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Phone</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h6 class="mt-5 mb-3">Example 2 - Table with Heading 1</h6>
		<div class="table-responsive mb-5 table-custom-styled rounded">
			<div class="px-4 py-2 d-md-flex justify-content-md-between align-items-md-center">
				<h5 class="mb-md-0">
					Contacts
					<small class="text-muted ml-2">Some sub-headings here..</small>
				</h5>
				<button type="button" class="btn mb-0 btn-success text-white d-inline-flex align-items-center">
					<eva-icon name="plus" animation="pulse" fill="#fff" class="mr-1"></eva-icon>Add
				</button>
			</div>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">Role</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Phone</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h6 class="mt-5 mb-3">Example 3 - Table with Heading 2</h6>
		<div class="d-md-flex justify-content-md-between align-items-md-center mb-3">
			<h5 class="mb-md-0">
				Contacts
				<small class="text-muted ml-2">Some sub-headings here..</small>
			</h5>
			<button type="button" class="btn mb-0 btn-success text-white d-inline-flex align-items-center">
				<eva-icon name="plus" animation="pulse" fill="#fff" class="mr-1"></eva-icon>Add
			</button>
		</div>
		<div class="mb-5 table-responsive table-custom-styled rounded table-td-align-middle">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">Role</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Phone</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style>
.table-custom-styled {
	background: white;
	/* overflow: hidden; */
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.table-custom-styled .table {
	margin-bottom: 0;
}

.table-custom-styled.table-td-align-middle td {
	vertical-align: middle;
}

.table-custom-styled thead th {
	border-top: 0;
	border-bottom: 0;
	background-color: rgba(52, 67, 75, 0.03);
}
.table-custom-styled thead tr th:first-child,
.table-custom-styled tbody tr th:first-child,
.table-custom-styled tbody tr td:first-child {
	padding-left: 1.5rem;
}
.table-custom-styled thead tr th:last-child,
.table-custom-styled tbody tr td:last-child {
	padding-right: 1.5rem;
}
.table-custom-styled thead tr th,
.table-custom-styled tbody tr td {
	padding-left: 1.25rem;
	padding-right: 1.25rem;
}
.table-custom-styled th,
.table-custom-styled td {
	border-top: 1px solid #f1f5f8;
}
.table-custom-styled .table > thead > tr > th,
.table-custom-styled .table > tfoot > tr > th {
	font-size: 0.75rem;
	font-weight: 700;
	position: relative;
	text-transform: uppercase;
	letter-spacing: 0.04rem;
	color: #3d4852;
}
</style>