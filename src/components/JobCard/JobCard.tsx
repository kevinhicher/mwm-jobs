import React from 'react';
import { Button, Card, CardContent, Grid, Link, makeStyles, Typography } from '@material-ui/core';

export interface JobCardProps {
	text: string;
	categories: {
		department: string;
		location: string;
		commitment: string;
	};
	hostedUrl: string;
	applyUrl: string;
	createdAt: number;
}

const useStyles = makeStyles({
	link: {
		width: '100%',
	},
	applyButton: {
		background: 'linear-gradient(to right, #ff7854 34%, #ff0067 109%)',
	},
});

const JobCard = ({
	text,
	categories: { location, department, commitment },
	hostedUrl,
	applyUrl,
	createdAt,
}: JobCardProps) => {
	const classes = useStyles();

	return (
		<Card className={classes.link}>
			<CardContent>
				<Grid container spacing={3} justify="space-between">
					<Grid item>
						<Link href={applyUrl} target="_blank" rel="noopener" data-testid="hosted-link">
							<Typography variant="h6" data-testid="job-text">
								{text}
							</Typography>
							<Typography data-testid="job-categories">
								{commitment} - {location} - {department}
							</Typography>
							<Typography variant="caption">Created {new Date(createdAt).toDateString()}</Typography>
						</Link>
					</Grid>
					<Grid item>
						<Button
							className={classes.applyButton}
							variant="contained"
							color="primary"
							size="small"
							href={hostedUrl}
							fullWidth
							data-testid="apply-button"
							target="_blank"
							rel="noopener"
						>
							APPLY
						</Button>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default JobCard;
