import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';

import ApexChart from "react-apexcharts";
import classes from './StatsTwo.module.css';

function importAll(r) {
	let images = {};
	r.keys().forEach((item, index) => {
		images[item.replace("./", "")] = r(item);
	});
	return images;
}

const images = importAll(
	require.context("../../assets/media2", false, /\.(png|jpe?g|svg)$/)
);


const StatsTwo = (props) => {
	const { covidData, countryCode } = props;
	const isInitialMount = useRef(true);

	const [chartState, setChartState] = useState({
		series: [ 0, 0, 0],
		options: {
			chart: {
				width: 200,
				type: "pie",
			},
			dataLabels: {
				enabled: false,
			},
			fill: {
				colors: ["#d71b3b", "#1b6535", "#a2d5c6"],
			},
			tooltip: {
				fillSeriesColor: false,
				marker: {
					show: false,
				},
			},
			title: {
				align: "center",
			},
			legend: {
				fontFamily: "'Open Sans Condensed', sans-serif",
				fontWeight: 700,
				position: "bottom",
				labels: {
					colors: ["#d71b3b", "#1b6535", "#a2d5c6"],
				},
				markers: {
					fillColors: ["#d71b3b", "#1b6535", "#a2d5c6"],
				},
			},
			labels: ["Deaths", "Recovered", "Confirmed"],
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 300,
						},
						legend: {
							position: "bottom",
						},
					},
				},
			],
		},
	});

	useEffect(() => {
		if (isInitialMount.current && !covidData) {
			isInitialMount.current = false;
		} 
		if (covidData) {
			const cvdData = covidData[9];
			const newCovidData = [
				cvdData.Deaths,
				cvdData.Recovered,
				cvdData.Confirmed,
			];
			setChartState(prevState => ({
				...prevState,
				series: newCovidData,
			}));
		} else {
			return 
		}
	}, [covidData])

	return  (
			<div className={classes.chartCover}>
			<div className={classes.info}>
				<h4> OVERVIEW </h4>
				<img alt="flag" src={images[`${countryCode}.png`]} />
			</div>
			<div className={classes.overview}>
				<div>
					<small>Deaths</small>
					<h2> {chartState.series[0]} </h2>
				</div>
				<div>
					<small>Recovered</small>
					<h2> {chartState.series[1]} </h2>
				</div>
				<div>
					<small>Confirmed</small>
					<h2> {chartState.series[2]} </h2>
				</div>
			</div>
			<div id="chart" className={classes.chart}>
				<ApexChart
					options={chartState.options}
					series={chartState.series}
					type="pie"
					width={300}
				/>
			</div>
		</div>
	)
}


const mapStateToProps = (state) => {
	return {
		covidData: state.covidData,
		countryCode: state.countryCode
	};
}


export default connect(mapStateToProps)(StatsTwo)
