import React from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import SideBar from '../components/Sidebar'
import Video from '../components/Video'

interface Params {
  slug: string;
}

export default function Event() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug
          ? <Video lessonSlug={slug}/>
          : <div className="flex-1" />
        }
        <SideBar />
      </main>

    </div>
  )
}
