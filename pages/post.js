import { useRouter } from 'next/router';
import LayoutStatic from '../comps/LayoutStatic';

const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

const Page = () => (
  <LayoutStatic>
    <Content />
  </LayoutStatic>
);

export default Page;