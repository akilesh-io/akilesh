import Link from "next/link";
import Layout from "layout/Layout";

export default function FirstPost() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold underline">First Post</h1>
            <Link href="/">
                Back to home
            </Link>
        </Layout>
    );
}
