import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/posts">posts</Link></li>
                    <li><Link href="/about">about</Link></li>
                </ul>
            </nav>
        </header>
    )
}
