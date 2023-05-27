'use client'
//fix the client components
import Link from "next/link"
import ProductsList from "@/components/ProductsList"
import AppNavbar from "@/components/Navbar";


export default function Home() {
  // const req = await fetch("http://localhost:3000/api/search");
  // const data = await req.json()

  // return <main>{
  //     data.map((item: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => <div>{item?.name}</div>)
  //   }</main>

  return (
    <div>

      <AppNavbar />
      <section className='container max-w-screen-xl'>
        <ProductsList />
      </section>

      <Link href='/dashboard/products/new'>new product</Link>
    </div>
  )
}
