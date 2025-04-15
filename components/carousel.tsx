'use client'
import Link from "next/link"
import { Blog } from "contentlayer/generated"
import { useState, useEffect } from "react"

interface Props {
  posts: Blog[]
}

export default function Carousel({ posts }: Props) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [posts.length])

  return (
    <div className="relative h-[320px] md:h-[280px]">
      {posts.map((post, index) => (
        <div
          key={post._id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white shadow-lg rounded-lg p-6 h-full">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="mb-4">{post.description}</p>
              <Link href={post.url}>
                <a className="text-blue-600 underline">Leer más</a>
              </Link>
            </div>
            <div className="hidden md:block w-64 h-40 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
