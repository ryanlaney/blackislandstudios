import * as React from "react";

// import Image from "next/image";

import {
    Box,
    Container,
    Divider,
    Grid,
    Link,
    Paper,
    Typography,
} from "@material-ui/core";

import ProductImageLink from "@src/components/ProductImageLink";
import Footer from "@src/container/Footer";
import Header from "@src/container/Header";

const Syntien: React.FC = () => (
    <>
        <Header />
        <ProductImageLink
            href="/products/syntien"
            imageUrl="/syntien/mockup.png"
        />
        <Box p={8}>
            <Grid container spacing={8}>
                <Grid container item sm={6} spacing={2} xs={12}>
                    <Grid item xs={12}>
                        <Typography variant="h4">Syntien</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Customizable OSC Control Surface</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Compatible with iOS 11 and up</Typography>
                    </Grid>
                </Grid>
                <Grid item sm={6} style={{ marginTop: "auto", marginBottom: "auto" }} xs={12}>
                    <Link
                        href="https://apps.apple.com/us/app/syntien/id1203153534"
                    >
                        <img
                            alt="Download on the App Store"
                            height={40}
                            src="/app-store.svg"
                            width={156}
                        />
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Container maxWidth="md">
                        <Paper elevation={1}>
                            <Box p={4}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">
                                            Syntien is a customizable OSC (Open Sound Control) control surface for iOS. It can recognize a variety of different input sources, including touch, movement, and sound.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">
                                            It comes with the usual variety of buttons, labels, sliders, and knobs, but adds much more to your toolkit with a unique set of controls.
                                        </Typography>
                                        <ul>
                                            <li>Use an adjustable, resizable Keyboard control to send MIDI note and velocity data. Sending pitch information via OSC has never been easier!</li>
                                            <li>The Touch Pad control takes full advantage of the many touch gestures on iOS. Track five touches independently on on iPhone, and even more on iPad. Transmit data including position, force (if your device has 3D Touch), speed, and number of touches. Recognize Pinch gestures, Rotation gestures, Swipe gestures, and Long Press gestures, with unique visual feedback for each.</li>
                                            <li>The Gesture control tracks shake gestures and orientation changes.</li>
                                            <li>The Scope control uses data from your device's accelerometer, gyroscope, and magnetometer to transmit your device's acceleration, rotation, or nearby magnetic field strength. Tie the device rotation to a smooth, continuous sound, or trigger interesting gestures with changes in acceleration.</li>
                                            <li>Use the Sound Level Meter to track audio input levels, and use the Spectrogram control to detect pitch.</li>
                                        </ul>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">
                                            Create your own interfaces and modify the behavior of controls in-app, on any iOS device, without the need for a separate desktop editor! You can use one of the built-in presets, duplicate one for a solid starting point, or build your own from scratch. Place and resize controls exactly how you want them using intuitive drag-and-drop gestures.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">
                                            Modify your interfaces mid-performance with OSC messages from your computer! Add controls, remove controls, or adjust their behavior with the click of a button. Incoming OSC messages are displayed on the screen and color-coded, so you'll know exactly what messages Syntien is receiving and whether or not they're being interpreted.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Container>
                </Grid>
            </Grid>
        </Box>
        <ProductImageLink
            href="/products/syntien"
            imageUrl="/syntien/mockup-2.png"
            style={{
                height: "700px",
            }}
        />
        <Box p={8}>
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid container item spacing={1} xs={12}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            Tutorial 1: Getting Started with Syntien and Max/MSP
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            In this tutorial, I’ll go through the basics of getting Syntien to talk to Max/MSP, and then I’ll do a quick example of using two Syntien sliders to control the frequency and amplitude of a cycle~ object in Max.
                        </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} xs={12}>
                        <video controls height="480">
                            <source src="https://black-island-audio.s3.amazonaws.com/Syntien-Max-Tutorial.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid container item spacing={1} xs={12}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            Tutorial 2: Getting Started with Syntien and Supercollider
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            In this tutorial, I’ll go through the basics of getting Syntien to talk to Supercollider, and then I’ll do a quick example of using a Syntien keyboard to instantiate and release Synths in Supercollider.
                        </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} xs={12}>
                        <video controls height="480">
                            <source src="https://black-island-audio.s3.amazonaws.com/Syntien-Supercollider-Tutorial.mov" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid container item spacing={1} xs={12}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            Tutorial 3: Getting Started with Syntien and Processing
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            In this tutorial, I’ll go through the basics of getting Syntien to talk to Processing, and then I’ll do a quick example of using audio input and pitch detection to control visual effects.
                        </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} xs={12}>
                        <video controls height="480">
                            <source src="https://black-island-audio.s3.amazonaws.com/Syntien-Processing-Tutorial.mov" type="video/mov" />
                            Your browser does not support the video tag.
                        </video>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <Footer />
    </>
);

export default Syntien;
