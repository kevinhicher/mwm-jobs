import { Container, Divider, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { JobList } from '../../components';
import { Team } from '../../interfaces';

export interface HomeProps {
	teams: Team[];
}

const useStyles = makeStyles({
	teamTitle: {
		textTransform: 'uppercase',
	},
	divider: {
		background: 'white',
		marginBottom: '20px',
	},
});

const Home = ({ teams }: HomeProps) => {
	const classes = useStyles();

	return (
		<Container maxWidth="md">
			<Typography variant="h4" align="center" color="textSecondary">
				Jobs
			</Typography>
			{teams.map(({ title, postings }, index) => {
				return postings.length ? (
					<div key={`${title}-${index}`} data-testid="job-list">
						<Typography
							variant="h5"
							className={classes.teamTitle}
							color="textSecondary"
							data-testid="team-title"
						>
							{title}
						</Typography>
						<JobList jobs={postings} />
						<Divider className={classes.divider} />
					</div>
				) : null;
			})}
		</Container>
	);
};

export default Home;
