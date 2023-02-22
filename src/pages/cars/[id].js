// NOTE the file name [id].js tells next that this file should render a single subset of cars or single car api/cars/id. the "[id]" work as params to a page
// NOTE the useRouter lets us use the params above
import { useRouter } from "next/router.js";
// NOTE this Head import allows us to import the metadata that we would usually write in the top of an html file
import Head from "next/head.js";

export default function Car({car}) {

  const router = useRouter()
  const {id} = router.query

  return(
    <>
    <Head>
      <title>
      {car}
      </title>
    </Head>
    <h1>Hello {car.id}</h1>
    </>
    )
}

export async function getServerSideProps({params}){

  const req = await fetch(`http://localhost:3000/${params.id}.json`)
  const data = await req.json();
  return {
    props: {car: data}
  }

}

// NOTE you can only use ServerSideProps or StaticProps. That is why the functions below are commented.
// NOTE but we can use both within the application based on the needs of that page

// export async function getStaticProps({params}) {

//   const req = await fetch(`http://localhost:3000/${params.id}.json`)
//   const data = await req.json();
//   return {
//     props: {car: data}
//   }
// }

// export async function getStaticPath() {

//   const req = await fetch(`http://localhost:3000/${params.id}.json`)
//   const data = await req.json();

//   const paths = data.map(car => {
//     return {params: {id: car}}
//   })

//   return {
//     paths,
//     fallback: false
//   }

// }