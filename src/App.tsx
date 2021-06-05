import React, { useEffect, useState } from 'react';
import { createMuiTheme, LinearProgress, makeStyles, ThemeProvider } from '@material-ui/core';

import { Team } from './interfaces';
import { Home } from './views';
import { JobService } from './services/job.service';

const useStyles = makeStyles({
	root: {
		paddingTop: '20px',
		background: 'linear-gradient(to right, #ff7854 34%, #ff0067 109%)',
	},
});

const theme = createMuiTheme({
	typography: {
		fontFamily: `'century-gothic', sans-serif`,
	},
	overrides: {
		MuiTypography: {
			colorTextSecondary: {
				color: 'white',
			},
		},
	},
});

const App = () => {
	const classes = useStyles();
	const [jobsByTeam, setJobsByTeam] = useState<Team[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const jobs = await JobService.getJobsByTeam();
			if (jobs.length) {
				setJobsByTeam(jobs);
			}
		};
		fetchData();
	}, []);

	return jobsByTeam.length ? (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>{jobsByTeam.length && <Home teams={jobsByTeam} />}</div>
		</ThemeProvider>
	) : (
		<LinearProgress />
	);
};

export default App;
