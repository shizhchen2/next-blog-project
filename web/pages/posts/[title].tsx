
import Link from "next/link"
import { GetServerSideProps, NextPage} from 'next'
import { getSpecialDetailFromMd } from "../../lib/posts"
import * as React from 'react'
import { useRouter } from "next/router"

  
type Props = {
    detail: String;
}
const PageDetail:NextPage<Props> = (props) => {
  const router = useRouter()
  const { title } = router.query
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        {title}
      </h1>
      <div>{props.detail}</div>
      <Link href="/posts">
        <a>Go Back</a>
      </Link>
    </>
  )
}

export default PageDetail
// 实现SSG
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { title } = context.query
    const {content} = await getSpecialDetailFromMd(title)
    return {
      props: {
        detail: JSON.parse(JSON.stringify(content))
      }
    };
  };