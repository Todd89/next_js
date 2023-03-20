import MainContainer from "../components/MainContainer";

const Index = () => {
	return (
		<MainContainer keywords={'next.js'}>
			<div>
				<h1 >Main page</h1>
				<style jsx>
					{`
						.navbar {
							background: orange;
							padding: 15px;
						}
						.link {
							font-size: 11px;
						}
					`}
				</style>
			</div>
		</MainContainer>

	)
}

export default Index;