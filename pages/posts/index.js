import Link from 'next/link';
import React from 'react'
import styles from '../../styles/Home.module.css'
export async function getStaticProps() {

    const res = await fetch('https://dummyjson.com/posts');
    const data = await res.json();
    return {
        props: {
            posts: data,
        },
    };
}
export default function index({ posts }) {
    console.log(posts);
    return (
        <main className={styles.main}>
            <p>posts</p>
            {posts.posts.map((post) => <div>
                <Link href={`posts/${post.id}`}>{post.title}</Link>
            </div>
            )}
        </main>
    )
}
