import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { url } from '../Url';

function ReactBootstrapTable(props) {
	const booking = props.data;

	const updateBooking = (event) => {
		window.location.href = 'updateBooking/' + event.target.value;
	};
	const deleteBooking = (event) => {
		var x = window.confirm('Are you sure you want to delete?');

		if (x === true) {
			Axios.delete(url + 'booking/' + event.target.value, {
				headers: {
					authorization: localStorage.getItem('accessToken'),
				},
			})
				.then(function (response) {
					alert(response.data.message);
					window.location.reload(false);
				})
				.catch(function (error) {
					alert(error.data.message);
				});
		}
	};

	function rankFormatter(cell, row, rowIndex, formatExtraData) {
		return (
			<div>
				{console.log(row.booking_id)}

				<button
					class="btn btn-primary"
					name="update"
					value={row.booking_id}
					onClick={updateBooking}
				>
					Update
				</button>
				{'  '}
				<button
					class="btn btn-danger"
					name="delete"
					value={row.booking_id}
					onClick={deleteBooking}
				>
					Delete
				</button>
			</div>
		);
	}

	const columns = [
		{
			dataField: 'booking_id',
			text: 'Booking_id',
			sort: true,
		},
		{
			dataField: 'date',
			text: 'Date',
		},
		{
			dataField: 'tourist',
			text: 'Tourist Type',
		},
		{
			dataField: 'zipline_type',
			text: 'Zipline Type',
		},
		{
			dataField: 'total_people',
			text: 'Total People',
		},
		{
			dataField: 'total_amount',
			text: 'Total Amount',
		},
		{
			dataField: 'action',
			text: 'Action',
			formatter: rankFormatter,
		},
	];

	return (
		<div>
			<BootstrapTable
				keyField="id"
				striped
				hover
				condensed
				data={booking}
				columns={columns}
				pagination={paginationFactory()}
				noDataIndication="You have not booking yet"
			/>
		</div>
	);
}

export default ReactBootstrapTable;
