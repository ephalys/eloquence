import React from 'react';
import Footer from './footer';
import MenuContainer from '@/components/menu/menuContainer';
import { NextSeo } from 'next-seo';

const DEFAULT_TITLE =
    'Léon Tran-Van — Frontend engineer with a designer soul curbed by color blindness';
const DESCRIPTION =
    'Building curated projects and beautiful interfaces with the benefits of cutting-edge technology.';

const OPENGRAPH_CONFIG = {
    url: 'https://www.tranvanleon.com/',
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
    images: [
        {
            url: 'https://www.tranvanleon.com/cover.png',
            width: 1600,
            height: 1010,
        },
    ],
    site_name: 'Léon Tran-Van',
    type: 'profile',
    profile: {
        firstName: 'Léon',
        lastName: 'Tran-Van',
        username: 'ephalys',
        gender: 'male',
    },
};

const Layout = ({ children, SEOTitle }) => {
    return (
        <>
            <NextSeo
                title={SEOTitle}
                titleTemplate="%s — Léon Tran-Van"
                defaultTitle={DEFAULT_TITLE}
                description={DESCRIPTION}
                openGraph={OPENGRAPH_CONFIG}
            />
            <main className="max-w-2xl mx-auto px-4 py-12 sm:pt-40 sm:pb-28">
                <MenuContainer />
                {children}
                <Footer />
            </main>
        </>
    );
};

export default Layout;
