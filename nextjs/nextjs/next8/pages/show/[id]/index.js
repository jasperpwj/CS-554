import Layout from '../../../components/MyLayout';
import { useRouter } from 'next/router';
import axios from 'axios';

const Show = (props) => {
	return (
		<Layout>
			<h1>{props.show.name}</h1>
			<p>{props.show.summary.replace(/(<([^>]+)>)/gi, '')}</p>
			<img src={props.show.image.medium} />
			<style jsx>{`
				h1 {
					color: #1e8678;
				}

				p::first-letter {
					font-size: 200%;
				}
			`}</style>
		</Layout>
	);
};
Show.getInitialProps = async function(context) {
	const { id } = context.query;
	console.log(`id: ${id}`);
	const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
	const show = await res.data;

	console.log(`Fetched show: ${show.name}`);

	return { show };
};

export default Show;
