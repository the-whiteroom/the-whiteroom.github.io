export async function load({ params }) {
	const post = await import(`../posts/${params.url}.md`);
	const { title, tags, related } = post.metadata;
	const content = post.default;

	return {
		content,
		tags,
		related,
		title,
	};
}