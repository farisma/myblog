import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Alert from '../../components/Alert';
export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>First Post</title>
          
        </Head>
        <h1>First Post</h1>
        <Alert type="error"> 
            <h5>Alert</h5>
        </Alert>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </Layout>
    );
  }