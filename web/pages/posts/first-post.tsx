import React from 'react'
import Link from 'next/link'
import {NextPage} from 'next'

const FirstPost:NextPage = () => {
    return <div>
        First Post
        <hr/>
        <a href="/"> a 跳转回首页</a>
        <Link href="/"> link 跳转回首页</Link>
    </div>
}

export default FirstPost