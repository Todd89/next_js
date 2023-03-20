import {useRouter} from "next/router";

import MainContainer from "../../components/MainContainer";

// import styles from '../../styles/user.module.scss'

export default function ({user}) {
	const {query} = useRouter();

	return (
		<MainContainer>
			<div className='user'>
				<h1>
					User with ID {query.id}
				</h1>
				<div>Name {user.name}</div>
			</div>
		</MainContainer>
	)
}

export async function getServerSideProps({query}) {
	const userId = query.id;
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
	const user = await response.json();
	

	return {
	  props: {user}, // will be passed to the page component as props
	}
}