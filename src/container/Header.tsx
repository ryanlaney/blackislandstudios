import * as React from "react";

// import Image from "next/image";
// import Link from "next/link";

import {
    AppBar,
    Container,
    Grid,
    Hidden,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Tabs,
    Tab,
    Toolbar,
    Typography,
} from "@material-ui/core";
import {
    Menu as MenuIcon,
} from "@material-ui/icons";

import styled from "styled-components";

const StyledTabs = styled(Tabs)`
    & .MuiTab-wrapper {
        color: white;
    }
`;

interface IState {
    selectedTab: "About" | "Contact" | "Home" | "Services";
    anchorEl: any | null;
    headerVariant: "absolute" | "fixed";
}

const links = [
    {
        title: "Home",
        href: "/#",
    },
    {
        title: "About",
        href: "/#about",
    },
    {
        title: "Services",
        href: "/#services",
    },
    // {
    //     title: "Contact",
    //     href: "/contact",
    // },
];

class Header extends React.Component<{}, IState> {
    public readonly state: IState = {
        selectedTab: "Home",
        anchorEl: null,
        headerVariant: "absolute",
    }

    private readonly previousScrollY: number | null = null;

    public readonly componentDidMount = (): void => {
        this.handleScroll();
        window.addEventListener("scroll", this.handleScroll);
    }

    public readonly componentWillUnmount = (): void => {
        window.removeEventListener("scroll", this.handleScroll);
    }

    private readonly handleTabSelect = (_: React.ChangeEvent<{}>, value: any): void => {
        this.setState({
            selectedTab: value as IState["selectedTab"],
        });
    }

    private readonly handleScroll = () => {
        if (window.scrollY > 130 && (!this.previousScrollY || this.previousScrollY <= 130)) {
            this.setState({
                headerVariant: "fixed",
            });
        } else if (window.scrollY <= 130 && (!this.previousScrollY || this.previousScrollY > 130)) {
            this.setState({
                headerVariant: "absolute",
            });
        }
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
        const { selectedTab, anchorEl, headerVariant } = this.state;

        return (
            <AppBar position={headerVariant} style={{ background: headerVariant === "absolute" ? "rgba(0, 0, 0, 0.4)" : "black" }}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Link href="/">
                            <a style={{ textDecoration: "unset" }}>
                                <Grid container>
                                    <Grid item>
                                        <img
                                            alt="Black Island Studios"
                                            height="56"
                                            src="/img/logos/logo-horizontal-white.png"
                                            width="124"
                                        />
                                    </Grid>
                                </Grid>
                            </a>
                        </Link>
                        <div style={{ flexGrow: 1 }} />
                        <Hidden smDown>
                            <StyledTabs onChange={this.handleTabSelect} TabIndicatorProps={{ style: { backgroundColor: "white" } }} value={selectedTab}>
                                {links.map((link) => (
                                    <Tab
                                        key={link.title}
                                        component={Link}
                                        href={link.href}
                                        label={link.title}
                                        value={link.title}
                                    />
                                ))}
                            </StyledTabs>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton onClick={this.showMenu} style={{ color: "white" }}>
                                <MenuIcon />
                            </IconButton>
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
                                {links.map((link) => (
                                    <MenuItem
                                        key={link.title}
                                    >
                                        <Link href={link.href}>
                                            <a style={{ textDecoration: "unset" }}>
                                                <Grid container spacing={2}>
                                                    <Grid item style={{ width: "calc(100% - 36px)" }}>
                                                        <Typography style={{ color: "white" }}>{link.title}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </a>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Hidden>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
}

export default Header;
