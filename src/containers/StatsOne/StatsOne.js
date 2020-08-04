import React, { useState, useEffect, useRef }  from 'react';
import { connect } from 'react-redux'

import Chart from "react-apexcharts";
import classes from './StatsOne.module.css';

const StatsOne = (props) => {

	const { covidData, error } = props;
	const isInitialMount = useRef(true);

	const [chartState, setChartState] = useState({
		series: [
			{
				name: "Deaths",
				data: [],
			},
			{
				name: "Recovered",
				data: [],
			},
			{
				name: "Confirmed",
				data: [],
			},
		],
		options: {
			chart: {
				height: 350,
				type: "line",
				zoom: {
					enabled: false,
				},
			},
			colors: ["#d71b3b", "#1b6535", "#a2d5c6"],
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: [6, 7, 8],
				curve: "straight",
				dashArray: [7, 8, 9],
			},
			title: {
				text: "Current Cases",
				align: "left",
				style: {
					color: "#777",
					fontSize: "20px",
					fontFamily: "Segoe UI",
				},
			},
			legend: {
				tooltipHoverFormatter: function (val, opts) {
					return (
						val +
						" - " +
						opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
						""
					);
				},
				fontFamily: "'Open Sans Condensed', sans-serif",
				fontWeight: 700,
			},
			markers: {
				size: 0,
				hover: {
					sizeOffset: 6,
				},
			},
			xaxis: {
				categories: [],
			},
			tooltip: {
				y: [
					{
						title: {
							formatter: function (val) {
								return val;
							},
						},
					},
					{
						title: {
							formatter: function (val) {
								return val;
							},
						},
					},
					{
						title: {
							formatter: function (val) {
								return val;
							},
						},
					},
				],
			},
			grid: {
				borderColor: "#f1f1f1",
			},
		},
	})

	useEffect(() => {
		if (isInitialMount.current && !covidData) {
			isInitialMount.current = false;
		} 
		if (covidData) {
			let deaths = [];
			covidData.forEach((data) => {
				deaths.push(data.Deaths);
			});
			let recovered = [];
			covidData.forEach((data) => {
				recovered.push(data.Recovered);
			});
			let confirmed = [];
			covidData.forEach((data) => {
				confirmed.push(data.Confirmed);
			});
			let dates = [];
			covidData.forEach((data) => {
				const date = Array.from(data.Date).splice(5,5)
				const switchedDate = `${date[3]}${date[4]}${date[2]}${date[0]}${date[1]}`;
				dates.push(switchedDate)
			});
			setChartState( prevState => ({
				...prevState,
				series: [
					{
						name: "Deaths",
						data: deaths,
					},
					{
						name: "Recovered",
						data: recovered,
					},
					{
						name: "Confirmed",
						data: confirmed,
					},
				],
				options: {
					...prevState.options,
					xaxis: {
						...prevState.options.xaxis,
						categories: dates
					}
				}
			}));
		} else {
			return
		}
	}, [covidData, error])

	return (
		<div className={classes.line}>
			<div id="chart" className={classes.chart}>
				<Chart
					options={chartState.options}
					series={chartState.series}
					type="line"
					height={350}
				/>
			</div>
		</div>
	);

}


const mapStateToProps = state => {
	return {
		covidData: state.covidData,
		error: state.error
	};
}


export default connect(mapStateToProps)(StatsOne)