// export async function getStaticProps() {
//     try {
//         const res = await fetch('http://127.0.0.1:8000/portfolio/all-product/')
//         if (!res.ok) {
//             throw new Error('Failed to fetch data')
//         }
//         const repo = await res.json()
//         console.log(repo);
//         return { props: { repo } }
//     } catch (error) {
//         console.error('Error fetching data:', error)
//         return { props: { repo: [] } } // Provide a default value in case of an error
        
//     }
// }

// export default async function Page() {
//     const api = await fetch('http://127.0.0.1:8000/portfolio/all-category-news/')
//     const response = await api.json()
//     console.log(response);
//     // save props
//     return (
//         <div>
            
//         </div>
//     )
// }