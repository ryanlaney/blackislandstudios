import * as React from "react";

// import Image from "next/image";

import {
    Box,
    Container,
    Divider,
    Grid,
    Link,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
} from "@material-ui/core";

import ProductImageLink from "@src/components/ProductImageLink";
import Footer from "@src/container/Footer";
import Header from "@src/container/Header";

const KeyboardKeyboard: React.FC = () => (
    <>
        <Header />
        <ProductImageLink
            href="/products/keyboard-keyboard"
            imageUrl="/keyboard-keyboard/mockup.png"
        />
        <Box p={8}>
            <Grid container spacing={8}>
                <Grid container item sm={6} spacing={2} xs={12}>
                    <Grid item xs={12}>
                        <Typography variant="h4">Keyboard Keyboard</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Compatible with OS X 10.11 and up</Typography>
                    </Grid>
                </Grid>
                <Grid item sm={6} style={{ marginTop: "auto", marginBottom: "auto" }} xs={12}>
                    <Link
                        href="https://itunes.apple.com/us/app/keyboard-keyboard/id1128271725?ls=1&amp;mt=12"
                    >
                        <img
                            alt="Download on the Mac App Store"
                            height={40}
                            src="/mac-app-store.svg"
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
                                            With Keyboard Keyboard, you can play keyboard with your keyboard! Map almost any key on your keyboard to a musical command: play a note, play multiple notes, play a chord, transpose the keyboard, activate the sustain pedal, and more.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">
                                            Use your Mac's built-in IAC Driver to record MIDI into a DAW (such as Logic or Garage Band) or play a softsynth with your computer's keyboard. You can also connect an external MIDI device and manipulate it with Keyboard Keyboard.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">
                                            You can play and record up to four channels of MIDI simultaneously. Set a different General MIDI sound for each voice in the app, or use the instruments built into a DAW or softsynth. Each voice has its own velocity, transposition, and pan control.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">
                                            The user interface includes ten MIDI continuous controller sliders, a pitch bend slider, and a pressure (aftertouch) slider.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">
                                            MIDI data that can be sent to other software or devices includes:
                                        </Typography>
                                        <ul>
                                            <li>Note On / Note Off</li>
                                            <li>Continuous Controller</li>
                                            <li>Pitch Bend</li>
                                            <li>Aftertouch</li>
                                        </ul>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">
                                            Program change information is not recorded.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">
                                            To map a key on the computer keyboard to a note on the piano, click the key on the interface, then click the note on the piano or play a note with an external controller. To map a key to multiple notes, click the notes on the piano with the Command key pressed. To map a key to a chord, continuous controller, transposition value, or velocity modifier, right-click the key and select the desired assignment.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">
                                            Built-in presets include: Piano and Guitar, Piano and Bass, Guitar and Bass, Piano, Guitar, Drums, and Random.
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
            href="/products/keyboard-keyboard"
            imageUrl="/keyboard-keyboard/screenshots/screenshot-4.png"
            style={{
                height: "700px",
            }}
        />
        <Box p={8}>
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            Recording MIDI into a DAW
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ol>
                            <li>Set Keyboard Keyboard’s MIDI destination to your Mac’s IAC Driver</li>
                            <li>Start recording in your DAW</li>
                            <li>Click back on the Keyboard Keyboard window and start playing some notes. You can use the “Always On Top” and “Show MIDI View” functions in the View menu to make it easier to see both the DAW and Keyboard Keyboard at the same time.</li>
                        </ol>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid container item spacing={2} xs={12}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            Multi-Track Recording in Logic
                        </Typography>
                    </Grid>
                    <Grid container item spacing={1} xs={12}>
                        <Grid item xs={12}>
                            1) In the File Menu, click on Project Settings, then select Recording. Make sure “Auto demix by channel if multitrack recording” is checked.
                        </Grid>
                        <Grid item style={{ textAlign: "center" }} xs={12}>
                            <img
                                alt="Keyboard Keyboard"
                                src="/keyboard-keyboard/screenshots/screenshot-1.png"
                                style={{
                                    maxWidth: "80%",
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} xs={12}>
                        <Grid item xs={12}>
                            2) Back in the Tracks window, assign each track to the appropriate MIDI channel.
                        </Grid>
                        <Grid item style={{ textAlign: "center" }} xs={12}>
                            <img
                                alt="Keyboard Keyboard"
                                src="/keyboard-keyboard/screenshots/screenshot-2.png"
                                style={{
                                    maxWidth: "80%",
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} xs={12}>
                        <Grid item xs={12}>
                            3) Follow the steps above for Recording MIDI into a DAW
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            Sending MIDI to an External Device
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ol>
                            <li>Plug in your external device</li>
                            <li>Set Keyboard Keyboard’s MIDI destination to the external device</li>
                            <li>In Preferences, select what messages you want to send to your device. Keep in mind that continuous controller, pitch bend, and pressure data is sent on all channels, so you might want to un-check those boxes. Also keep in mind that some devices need a Note On with velocity = 0 (not a Note Off) to turn off an LED.</li>
                        </ol>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid container item xs={12}>
                    <Container maxWidth="md">
                        <Paper>
                            <Box p={4}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography variant="h5">
                                            FAQ
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <List>
                                            <ListItem>
                                                <ListItemText
                                                    primary="Q: Why can’t I press certain combinations of buttons?"
                                                    secondary="A: That’s a limitation of the Mac operating system... certain combinations of buttons, like Q, A, and W, can’t be pressed simultaneously, because in most settings, if you’re pressing all these buttons together, you’re doing something wrong. In general, you’re only allowed to press up to 6 letter or number buttons at the same time, but you can add more with modifier keys like command, alt, control, and shift."
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText
                                                    primary="Q: The IAC driver isn’t appearing in the list of available MIDI devices."
                                                    secondary="In order to use the IAC driver, it must be online with at least one port. You can configure the IAC driver with MIDI Studio in the Audio MIDI Setup app."
                                                />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    <Grid item style={{ textAlign: "center" }} xs={12}>
                                        <img
                                            alt="Keyboard Keyboard"
                                            src="/keyboard-keyboard/screenshots/screenshot-3.png"
                                            style={{
                                                maxWidth: "100%",
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Container>
                </Grid>
            </Grid>
        </Box>
        <Footer />
    </>
);

export default KeyboardKeyboard;
