import { JobCardProps } from "../components/JobCard";
import { JobListProps } from "../components/JobList";
import { HomeProps } from "../views/Home";

export const jobMocks: JobCardProps[] = [
  {
    text: 'Job 1',
    categories: {
      location: 'Paris',
      department: 'UX/UI',
      commitment: 'CDI',
    },
    applyUrl: 'www.applyUX.com',
    hostedUrl: 'www.hostUX.com',
    createdAt: 1234,
  },
  {
    text: 'Job 2',
    categories: {
      location: 'Nantes',
      department: 'HR',
      commitment: 'CDD',
    },
    applyUrl: 'www.applyHR.com',
    hostedUrl: 'www.hostHR.com',
    createdAt: 4567,
  }
];

export const listMock: JobListProps = {
	jobs: jobMocks,
};

export const jobsByTeamMock: HomeProps = {
  teams: [
    {
      title: 'Team 1',
      postings: listMock.jobs,
    },
    {
      title: 'Team 2',
      postings: listMock.jobs,
    },
    {
      title: 'Team 2',
      postings: []
    }
  ]
}