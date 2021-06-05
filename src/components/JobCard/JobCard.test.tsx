import React from 'react';
import { render } from '@testing-library/react';
import JobCard, { JobCardProps } from './JobCard';
import { jobMocks } from '../../mocks/job.mocks';

const jobMock = jobMocks[0];

describe('<JobCard />', () => {
	it('it should render job text', () => {
		const { getByTestId } = render(<JobCard {...{ ...jobMock }} />);
		expect(getByTestId('job-text')).toHaveTextContent(jobMock.text);
	});

	it('should render categories', () => {
		const { getByTestId } = render(<JobCard {...{ ...jobMock }} />);
		expect(getByTestId('job-categories')).toHaveTextContent(
			`${jobMock.categories.location} - ${jobMock.categories.department}`
		);
	});

	it('it should redirect to hosted url', () => {
		const { getByTestId } = render(<JobCard {...{ ...jobMock }} />);
		expect(getByTestId('apply-button')).toHaveAttribute('href', jobMock.hostedUrl);
	});

	it('it should redirect to apply url', () => {
		const { getByTestId } = render(<JobCard {...{ ...jobMock }} />);
		expect(getByTestId('hosted-link')).toHaveAttribute('href', jobMock.applyUrl);
	});
});
