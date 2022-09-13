import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { getMonth, getYear } from 'date-fns'
import range from 'lodash/range'
import 'react-datepicker/dist/react-datepicker.css'

const Calendar = () => {
  	const [startDate, setStartDate] = useState(new Date());
  	const years = range(1990, getYear(new Date()) + 1, 1);
  	const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
	return (
		<main className='px-4 lg:px-14 py-8 w-full'>
			<DatePicker renderCustomHeader={({date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled, }) => (
			<div className='flex flex-wrap justify-center items-center p-4 text-lg'>
				<button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
					{"<"}
				</button>
				<select value={getYear(date)}onChange={({ target: { value } }) => changeYear(value)}>
					{years.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
					))}
				</select>

				<select
					value={months[getMonth(date)]}
					onChange={({ target: { value } }) =>
					changeMonth(months.indexOf(value))
					}
				>
					{months.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
					))}
				</select>

				<button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
					{">"}
				</button>
			</div>
			)}
			selected={startDate}
			onChange={(date) => setStartDate(date)}
			/>
		</main>
	);
};

export default Calendar;