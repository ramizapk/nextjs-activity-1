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

    const res = await fetch(`https://dummyjson.com/postsW${params.id}`);
    const data = await res.json();
    console.log(params.id);
    return {
        props: {
            posts: data,
        },
    };
}



export default function index() {
    return (
        <main className={styles.main}>
            <p>posts</p>
            {posts.map((post) => <div>
                <Link href={`posts/${post.id}`}>{post.title}</Link>
            </div>
            )}
        </main>
    )
}
