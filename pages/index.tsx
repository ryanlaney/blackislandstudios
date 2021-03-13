import * as React from "react";

import {
    Box,
    Container,
    Divider,
    Grid,
    Typography,
} from "@material-ui/core";
import {
    Code,
    Link,
    Web,
    PhoneIphone,
} from "@material-ui/icons";

import Carousel from "@src/components/Carousel";
import Footer from "@src/container/Footer";
import Header from "@src/container/Header";

const shuffle = (arr: any[]): any[] => {
    const shuffledArr = arr;
    for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
};

const Index: React.FC = () => (
    <>
        <Header />
        <Grid container spacing={8}>
            <Grid item xs={12}>
                <Carousel
                    photos={shuffle([
                        {
                            imageUrl: "/img/photos/Can03.png",
                        },
                        {
                            imageUrl: "/img/photos/Can04.png",
                        },
                        {
                            imageUrl: "/img/photos/Can05.png",
                        },
                        {
                            imageUrl: "/img/photos/Can06.png",
                        },
                        {
                            imageUrl: "/img/photos/Can07.png",
                        },
                        {
                            imageUrl: "/img/photos/Can08.png",
                        },
                        {
                            imageUrl: "/img/photos/Can09.png",
                        },
                    ])}
                />
            </Grid>
            <Grid container id="about" item spacing={8} style={{ background: "#f9f9f9", margin: "unset" }} xs={12}>
                <Grid container item spacing={2} xs={12}>
                    <Grid item style={{ textAlign: "center" }} xs={12}>
                        <Typography variant="h3">
                            About Black Island Studios
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth="xs">
                            <Divider />
                        </Container>
                    </Grid>
                </Grid>
                <Grid item style={{ textAlign: "center" }} xs={12}>
                    <Box p={2}>
                        <Container maxWidth="lg">
                            <Typography>
                                Founded in 2019, Black Island Studios is a family owned and operated software
                                development studio based in South Florida working with companies around the world.
                                We help businesses of all sizes, and across many industries, fulfill their specific
                                software needs. New to custom software? We are always happy to discuss every aspect
                                of what we can do to make your business run as smoothly and effectively as possible
                                while saving you time and money.
                            </Typography>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
            <Grid container item spacing={8} style={{ background: "#f9f9f9", margin: "unset" }} xs={12}>
                <Grid container item spacing={2} xs={12}>
                    <Grid item style={{ textAlign: "center" }} xs={12}>
                        <Typography variant="h3">
                            Our Story
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth="xs">
                            <Divider />
                        </Container>
                    </Grid>
                </Grid>
                <Grid item style={{ textAlign: "center" }} xs={12}>
                    <Box p={2}>
                        <Container maxWidth="lg">
                            <Typography>
                                What does a Canadian Island have to do with South Florida?
                                Well, back in the 1960s, our great uncle began leasing a three-acre island
                                from the Canadian government and built a log cabin upon it for him and his
                                family to enjoy during the summer. Since the family was based in Connecticut,
                                it was only a nine-hour drive and 10-minute boat ride but felt a world away.
                                Now, upwards of 25 family members (of the human and canine variety) venture
                                across the border every summer to go camping and enjoy the peace, solitude,
                                and beauty of Black Island.
                            </Typography>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
            <Grid container id="services" item spacing={8} style={{ background: "white", margin: "unset" }} xs={12}>
                <Grid container item spacing={2} xs={12}>
                    <Grid item style={{ textAlign: "center" }} xs={12}>
                        <Typography variant="h3">
                            Our Services
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth="xs">
                            <Divider />
                        </Container>
                    </Grid>
                </Grid>
                <Grid item style={{ textAlign: "center" }} xs={12}>
                    <Box p={2}>
                        <Container maxWidth="lg">
                            <Grid container spacing={8}>
                                <Grid container item md={6} spacing={4} xs={12}>
                                    <Grid item xs={12}>
                                        <Code />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h6">Automation</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Save your business time and money by extending the capabilities of Google Drive,
                                            Microsoft Office, and other everyday applications. We can eliminate tedious
                                            tasks involved with spreadheets, documents, emails, and more so you can
                                            focus on more important business matters.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item md={6} spacing={4} xs={12}>
                                    <Grid item xs={12}>
                                        <Link />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h6">Integration</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Seamlessly connect your customer response management, spreadsheets,
                                            and databases in your workflow. We will help you get the most out
                                            of the tools and services you already use.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item md={6} spacing={4} xs={12}>
                                    <Grid item xs={12}>
                                        <Web />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h6">Web Applications</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            For those businesses who want precise control over their user interface,
                                            functionality, and data storage, our web developers will build software
                                            catered exactly to your needs.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item md={6} spacing={4} xs={12}>
                                    <Grid item xs={12}>
                                        <PhoneIphone />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h6">Mobile Applications</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            We specialize in cross-platform apps built with React Native,
                                            as well as more robust, platform-specific apps which utilize
                                            the full capabilities of iOS or Android.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
        <Footer />
    </>
);

export default Index;
