import Link from 'next/link';
import Image from 'next/image';

const CustomLink = (props: any) => {
  const { href } = props;
  const isInternalLink = href && href.startsWith('/');

  const isHeadingLink = href.startsWith('#');

  if (isInternalLink) {
    return <Link href={href}>{...props}</Link>;
  } else if (isHeadingLink) {
    return <Link href={href}>#</Link>;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const CustomImage = (props: any) => {
  // console.log('props: ---------------------------------', props);
  return (
    <Image
      alt=""
      // layout={'responsive'}
      // objectFit="cover"
      loading="lazy"
      {...props}
    />
  );
};

const MDXComponents = {
  img: CustomImage,
  a: CustomLink,
};

export default MDXComponents;
