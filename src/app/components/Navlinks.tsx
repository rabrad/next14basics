"use client"
import Link from "next/link"
import React from "react"

function NavigationLinks() {
  return (
    <>
      <section>
        <div className="flex gap-4 p-2 bg-green-600 ">
          <Link href="/posts">
            <p>Posts</p>
          </Link>
          <div className="relative group transition-all">
            <Link href="/articles">
              <p>Articles</p>
            </Link>
            <div className="absolute hidden left-0 flex-col transition-all group-hover:flex gap-1 rounded-md bg-white py-3 shadow opacity-95">
              <Link
                href="/articles/featured-articles"
                className="text-black py-1 px-3 whitespace-nowrap"
              >
                <p>Featured Articles</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NavigationLinks
