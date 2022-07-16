import React from 'react'
import PhotoGet from './endpoints/PhotoGet'
import PhotoPost from './endpoints/PhotoPost'
import TokenPost from './endpoints/TokenPost'
import UserPost from './endpoints/UserPost'

const Api = () => {
  return (
    <div>
      <UserPost />
      <TokenPost />
      <h2>Photo Post</h2>
      <PhotoPost />
      <h2>Photo Get</h2>
      <PhotoGet />
    </div>
  )
}

export default Api