import Head from "next/head"
import Header from "./header"

export default function Layout({children, title = '', description = '', getTotal}) {

  return (
    <>
        <Head>
            <title>{`HamburgerDev - ${title}`}</title>
            <meta name="description" content={description}/>
        </Head>

        <Header getTotal={getTotal} />

        {children}
    </>
  )
}


