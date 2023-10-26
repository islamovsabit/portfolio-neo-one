// pages/index.js or any other Next.js page
// import React from 'react';

// function Home({ params }) {
//     console.log(params);
//     return (
//         <div>
//             <h1>Biography</h1>
//             {/* <p>{biography}</p> */}
//         </div>
//     );
// }

// export async function getServerSideProps() {
//     const apiUrl = 'https://portfoliobilmer.pythonanywhere.com/api/v1/biography/';
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     return {
//         props: {
//             params: data,
//         },
//     };
// }

// export default Home;