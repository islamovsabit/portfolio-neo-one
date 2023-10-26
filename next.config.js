/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ['portfoliobilmer.pythonanywhere.com'],
        // add again
    },
    env: {
        GOOGLE_ANALYTICS_ID: 'G-CBD7KWSDWW',
        REACT_APP_BOT_TOKEN: "5891664254:AAGAX3r9LYu9HuB4EH3EiJC8S7A1bSFI9nI",
        REACT_APP_API_TOKEN: "https://portfoliobilmer.pythonanywhere.com/",
        REACT_APP_PUBLIC_KEY: "t0uJeXn356UkulIz_",
        REACT_APP_TEMPLATE_ID: "template_iaeymcs",
        REACT_APP_SERVICE_ID: "service_ey5ryaf",
    },
    youtube: {
        source: '/embed/:path*',
        destination: 'https://www.youtube.com/embed/:path*',
    },
}