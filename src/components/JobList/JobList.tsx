import { List, ListItem } from '@material-ui/core';
import React from 'react';
import { Job } from '../../interfaces';
import JobCard from '../JobCard';

export interface JobListProps {
	jobs: Job[];
}

const JobList = ({ jobs }: JobListProps) => {
	return (
		<List>
			{jobs.map(({ text, categories, createdAt, applyUrl, hostedUrl }) => {
				return (
					<ListItem key={createdAt} disableGutters>
						<JobCard {...{ text, categories, hostedUrl, applyUrl, createdAt }} />
					</ListItem>
				);
			})}
		</List>
	);
};

export default JobList;
