import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props =>
			sheet.collectStyles(<App {...props} />)
		);
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<link rel="manifest" href="/static/manifest.json" />
					<meta
						name="description"
						content="Deep Cast - We Simplify Operations"
					/>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="application-name" content="hacker-next" />
					<meta name="apple-mobile-web-app-title" content="hacker-next" />
					<meta name="theme-color" content="#f60" />
					<meta name="msapplication-navbutton-color" content="#f60" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="black-translucent"
					/>
					<meta name="msapplication-starturl" content="/" />

					<link
						rel="icon"
						type="image/png"
						sizes="512x512"
						href="/static/icons/icon-512x512.png"
					/>
					<link
						rel="apple-touch-icon"
						type="image/png"
						sizes="512x512"
						href="/static/icons/icon-512x512.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href="/static/icons/icon-192x192.png"
					/>
					<link
						rel="apple-touch-icon"
						type="image/png"
						sizes="192x192"
						href="/static/icons/icon-192x192.png"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
					/>

					<link rel="stylesheet" href="/static/assets/demo/demo.css" />
					<link rel="stylesheet" href="/static/assets/css/nucleo-icons.css" />

					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
