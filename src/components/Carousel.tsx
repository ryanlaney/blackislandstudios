import * as React from "react";

import {
    Grid,
    Typography,
} from "@material-ui/core";

export interface CarouselProps {
    photos: {
        imageUrl: string;
        title?: string;
        subtitle?: string;
    }[];
    interval?: number;
    style?: React.CSSProperties;
}

interface IState {
    currentPhoto: number;
}

export default class Carousel extends React.Component<CarouselProps, IState> {
    public static readonly defaultProps = {
        interval: 10000,
    }

    public readonly state: IState = {
        currentPhoto: 0,
    }

    private interval: number | null = null;

    componentDidMount() {
        const { interval } = this.props;
        this.interval = window.setInterval(this.updatePhoto, interval);
    }

    componentWillUnmount() {
        if (this.interval) {
            window.clearInterval(this.interval);
        }
    }

    private readonly updatePhoto = (): void => {
        const { photos } = this.props;
        this.setState((prevState) => ({
            currentPhoto: (prevState.currentPhoto + 1) % photos.length,
        }));
    }

    render() {
        const { currentPhoto } = this.state;
        const { photos } = this.props;

        return (
            <div style={{ width: "100vw", height: "100vh" }}>
                {photos.map((photo, indx) => (
                    <div
                        key={photo.imageUrl}
                        style={{
                            width: "100vw",
                            height: "100vh",
                            overflow: "hidden",
                            backgroundImage: `url('${photo.imageUrl}')`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            color: "#8ae4f2",
                            position: "absolute",
                            textShadow: `
                            3px 3px 0 #000,
                            -1px -1px 0 #000,
                            1px -1px 0 #000,
                            -1px 1px 0 #000,
                            1px 1px 0 #000
                            `,
                            opacity: indx === currentPhoto ? 1 : 0,
                            transition: "opacity 1s ease-in-out",
                            ...this.props.style,
                        }}
                    >
                        {(photo.title || photo.subtitle) && (
                            <Grid container spacing={4} style={{ marginTop: "50vh", transform: "translateY(-25vh)", textAlign: "center" }}>
                                {photo.title && (
                                    <Grid item xs={12}>
                                        <Typography variant="h3">{photo.title}</Typography>
                                    </Grid>
                                )}
                                {photo.subtitle && (
                                    <Grid item xs={12}>
                                        <Typography variant="h5">{photo.subtitle}</Typography>
                                    </Grid>
                                )}
                            </Grid>
                        )}
                    </div>
                ))}
            </div>
        );
    }
}
