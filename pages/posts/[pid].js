import Link from 'next/link';
import React from 'react'
import styles from '../../styles/Home.module.css'

export async function getStaticPaths() {

    const res = await fetch(`https://dummyjson.com/posts`);
    const data = await res.json();
    console.log(data);
    const paths = data.posts.map((post) => ({
        params: { pid: post.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {

    const res = await fetch(`https://dummyjson.com/posts/${params.pid}`);
    const data = await res.json();
    console.log(params.pid);
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
            <p>single post</p>
            <div>
                <h1>{posts.title}</h1>
                <p>{posts.body}</p>
            </div>

        </main>
    )
}
