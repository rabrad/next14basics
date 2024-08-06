import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Page Title",
  description: "My page description",
}

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <h1 className="p-4">Articles</h1>
      <div className="mt-2 bg-slate-700 p-4 h-screen flex-grow">{children}</div>
    </div>
  )
}

export default Layout
