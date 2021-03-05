import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import {
    AppBar,
    Button,
    Grid,
    Hidden,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@material-ui/core";

interface IState {
    anchorEl: any | null;
}

class Header extends React.Component<{}, IState> {
    public readonly state: IState = {
        anchorEl: null,
    }

    private readonly showMenu = (e: React.MouseEvent): void => {
        this.setState({
            anchorEl: e.currentTarget,
        });
    }

    private readonly closeMenu = (): void => {
        this.setState({
            anchorEl: null,
        });
    }

    render() {
        const { anchorEl } = this.state;

        return (
            <AppBar style={{ background: "rgba(0, 0, 0, 0.85)" }}>
                <Toolbar>
                    <Link href="/">
                        <a style={{ textDecoration: "unset" }}>
                            <Grid container>
                                <Grid item>
                                    <Image
                                        alt="Black Island Studios"
                                        height="56"
                                        src="/logo-white.png"
                                        width="56"
                                    />
                                </Grid>
                                <Grid item style={{ marginTop: "auto", marginBottom: "auto" }}>
                                    <Hidden smDown>
                                        <Typography style={{ color: "white" }} variant="h4">
                                            Black Island Audio
                                        </Typography>
                                    </Hidden>
                                </Grid>
                            </Grid>
                        </a>
                    </Link>
                    <div style={{ flexGrow: 1 }} />
                    <Button onClick={this.showMenu}>
                        <Typography style={{ color: "white" }}>Products</Typography>
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        MenuListProps={{
                            style: {
                                background: "rgba(0, 0, 0, 0.7)",
                                color: "white",
                            },
                        }}
                        onClose={this.closeMenu}
                        open={!!anchorEl}
                    >
                        <MenuItem>
                            <Link href="/products/syntien">
                                <a style={{ textDecoration: "unset", color: "unset" }}>
                                    <Grid container spacing={2}>
                                        <Grid item style={{ width: "36px" }}>
                                            <Image alt="Syntien" height="20" src="/syntien/logo.png" width="20" />
                                        </Grid>
                                        <Grid item style={{ width: "calc(100% - 36px)" }}>
                                            <Typography>Syntien</Typography>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/products/keyboard-keyboard">
                                <a style={{ textDecoration: "unset", color: "unset" }}>
                                    <Grid container spacing={2}>
                                        <Grid item style={{ width: "36px" }}>
                                            <Image alt="Keyboard Keyboard" height="20" src="/keyboard-keyboard/logo.png" width="20" />
                                        </Grid>
                                        <Grid item style={{ width: "calc(100% - 36px)" }}>
                                            <Typography>Keyboard Keyboard</Typography>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Link>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
