import React from 'react';
import { render } from '@testing-library/react';
import JobList, { JobListProps } from './JobList';
import { listMock } from '../../mocks/job.mocks';

describe('<JobList />', () => {
	it('should render the items', () => {
		const { getAllByRole } = render(<JobList {...{ ...listMock }} />);
		const listItems = getAllByRole('listitem');
		expect(listItems).toHaveLength(2);
	});
});
