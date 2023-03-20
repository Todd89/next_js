import React from 'react';
import Head from "next/head";

import A from './A';

export default function MainContainer({children, keywords}) {
  return (
	<>
		<Head>
			<meta keywords={`users` + keywords}></meta>
			<title>Main page</title>
		</Head>
		<div className="navbar">
			<A href={'/'} text={'Main'}/>
			<A href={'/users'} text={'Users'}/>
		</div>
		<div>{children}</div>
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
	</>
  )
}
