import * as React from "react";

import ProductImageLink from "@src/components/ProductImageLink";
import Footer from "@src/container/Footer";
import Header from "@src/container/Header";

const Index: React.FC = () => (
    <>
        <Header />
        <ProductImageLink
            href="/products/syntien"
            imageUrl="/syntien/mockup.png"
            subtitle="Customizable OSC Control Surface for iOS"
            title="Syntien"
        />
        <ProductImageLink
            href="/products/keyboard-keyboard"
            imageUrl="/keyboard-keyboard/mockup.png"
            subtitle="Virtual MIDI Controller for macOS"
            title="Keyboard Keyboard"
        />
        <Footer />
    </>
);

export default Index;
