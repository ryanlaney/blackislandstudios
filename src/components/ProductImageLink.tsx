import * as React from "react";

import Link from "next/link";

import {
    Grid,
    Typography,
} from "@material-ui/core";

export interface ProductImageLinkProps {
    title?: string;
    subtitle?: string;
    imageUrl: string;
    href: string;
}

const ProductImageLink: React.FC<ProductImageLinkProps & { style?: React.CSSProperties }> = (props: ProductImageLinkProps & { style?: React.CSSProperties }) => (
    <Link href={props.href}>
        <a style={{ textDecoration: "unset" }}>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    overflow: "hidden",
                    backgroundImage: `url('${props.imageUrl}')`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    color: "#8ae4f2",
                    textShadow: `
                        3px 3px 0 #000,
                        -1px -1px 0 #000,
                        1px -1px 0 #000,
                        -1px 1px 0 #000,
                        1px 1px 0 #000
                    `,
                    ...props.style,
                }}
            >
                {(props.title || props.subtitle) && (
                    <Grid container spacing={4} style={{ marginTop: "50vh", transform: "translateY(-25vh)", textAlign: "center" }}>
                        {props.title && (
                            <Grid item xs={12}>
                                <Typography variant="h3">{props.title}</Typography>
                            </Grid>
                        )}
                        {props.subtitle && (
                            <Grid item xs={12}>
                                <Typography variant="h5">{props.subtitle}</Typography>
                            </Grid>
                        )}
                    </Grid>
                )}
            </div>
        </a>
    </Link>
);

export default ProductImageLink;
