export interface Job {
	text: string;
	categories: {
		location: string;
		department: string;
		commitment: string;
	};
	createdAt: number;
	applyUrl: string;
	hostedUrl: string;
}
