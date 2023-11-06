"use client"
import Head from 'next/head';

function MyPage() {
    return (
        <>
            <Head><meta property="og:title" content="My Neo Portfolio" />
                <meta property="og:description" content="Noe Portfolio" />
                <meta property="og:image" content="https://yandex.ru/images/search?img_url=http%3A%2F%2Femmamcintyrephotography.com%2Fwp-content%2Fuploads%2F2018%2F07%2Fportfolio-cover-designs-cover-2.jpg&lr=10335&pos=15&rpt=simage&text=portfolio%20design" />
                <meta property="og:url" content="URL of the page" />
                <title>Neo Portfolio</title>
            </Head>
            {/* Rest of your page content */}
        </>
    );
}

export default MyPage;
