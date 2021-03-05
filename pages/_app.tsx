import * as React from "react";

import type { AppProps } from "next/app";
import Head from "next/head";

import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    overrides: {
        MuiMenu: {
            paper: {
                background: "rgba(0, 0, 0, 0)",
                top: "50px !important",
            },
        },
    },
    typography: {
        fontFamily: "'Lato',Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontSize: 12,
    },
    spacing: 4,
});

const App: React.FC<AppProps> = (props: AppProps) => {
    const { Component, pageProps } = props;

    React.useEffect(() => {
    // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Black Island Audio</title>
                <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;
