import React from 'react'
import Link from 'next/Link'
import { useRouter } from 'next/router'

const Collection = () => {
  const router = useRouter()

  console.log(router.query)
  console.log(router.query.collectionId)

  return (
    <Link href="/">
      <h2>{router.query.collectionId}</h2>
    </Link>
  )
}

export default Collection
