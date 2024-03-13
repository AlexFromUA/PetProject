async function fetchGraphQL(text: string, variables: any) {
//	const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

	// Fetch data from GitHub's GraphQL API:
	const response = await fetch('https://localhost:7075/graphql', {
		method: 'POST',
		headers: [["Content-Type", "application/json"]],
//			Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
//			'Content-Type': 'application/json',
//		},
		body: JSON.stringify({
			query: text,
			variables,
		}),
	});

	return await response.json();
}

export default fetchGraphQL;