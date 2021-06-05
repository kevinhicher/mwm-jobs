import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import { jobsByTeamMock } from '../../mocks/job.mocks';

describe('<Home />', () => {
	it('should render jobs grouped by team', () => {
		const { getAllByTestId } = render(<Home {...{ ...jobsByTeamMock }} />);
		const jobLists = getAllByTestId('job-list');
		expect(jobLists.length).toBe(2);
		jobLists.forEach((jobList, index) => {
			expect(jobList.childNodes[0]).toHaveTextContent(jobsByTeamMock.teams[index].title);
		});
	});
});
