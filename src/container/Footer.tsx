import * as React from "react";

// import Image from "next/image";

import {
    Box,
    Container,
    Grid,
    Link,
    Typography,
} from "@material-ui/core";

const Footer: React.FC = () => (
    <Box>
        <Grid container>
            <Box p={4} style={{ background: "#f9f9f9", width: "100%" }}>
                <Container maxWidth="lg">
                    <Grid container item xs={12}>
                        <Grid component={Link} container href="/" item md={6} spacing={2} xs={12}>
                            <Grid item>
                                <img
                                    alt="Black Island Studio"
                                    height={112}
                                    src="/img/logos/logo-horizontal.png"
                                    width={248}
                                />
                            </Grid>
                        </Grid>
                        <Grid container item md={6} spacing={4} style={{ alignItems: "center", alignContent: "center" }} xs={12}>
                            <Grid container item xs={12}>
                                <Grid item xs={12}>
                                    <Typography>23 Vixen Rd</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>Trumbull, CT 06611</Typography>
                                </Grid>
                            </Grid>
                            <Grid container item spacing={1} xs={12}>
                                <Grid item xs={12}>
                                    <Typography style={{ fontWeight: "bold" }}>‪info@blackisland.io</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* @ts-expect-error: no overload matches this call */}
            <Box component={Grid} item p={2} style={{ textAlign: "center", background: "#f1f1f1" }} xs={12}>
                <p>
                    © Copyright
                    {" "}
                    {new Date().getFullYear()}
                    {" "}
                    <b><a href="https://blackisland.io" style={{ textDecoration: "unset", color: "#444444" }}>Black Island Studios.</a></b>
                    {" "}
                    All Rights Reserved.
                </p>
            </Box>
        </Grid>
    </Box>
);

export default Footer;
