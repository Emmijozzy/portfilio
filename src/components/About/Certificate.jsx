import React from 'react';

export default function Education() {
	return (
		<div className="about__innerboard-right certificate">
			<table>
				<tr className="heading__row">
					<th>Name</th>
					<th>Authority</th>
					<th>year</th>
				</tr>
				<tbody className="table__body">
					<tr>
						<td>HTML5</td>
						<td>University of Michigan</td>
						<td>2021</td>
					</tr>
					<tr>
						<td>CSS3</td>
						<td>University of Michigan</td>
						<td>2021</td>
					</tr>
					<tr>
						<td>Responsive Design</td>
						<td>University of Michigan</td>
						<td>2021</td>
					</tr>
					<tr>
						<td>JavaScript Algorithms & Data Structure</td>
						<td>Freecodecamp</td>
						<td>2022</td>
					</tr>
					<tr>
						<td>Back End Development and API</td>
						<td>Freecodecamp</td>
						<td>2022</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}