import Link from 'next/link';
import { Heading, Link as _Link } from '@chakra-ui/react';
import Imgix from 'react-imgix';
import dynamic from 'next/dynamic';

const SocialShare = dynamic(import('../social-share/index'), {
  ssr: false
});
const InsiderTips = dynamic(import('../article/insider-tips'), {
  ssr: false
});
const ProsCons = dynamic(import('../article/pros-cons'), {
  ssr: false
});
const Callout = dynamic(import('../article/callout'), {
  ssr: false
});
const ExpandedCallout = dynamic(import('../article/expanded-callout'), {
  ssr: false
});
const OurFindings = dynamic(import('../article/our-findings'), {
  ssr: false
});
const Coupon = dynamic(import('../article/coupon'), {
  ssr: false
});
const MainImage = dynamic(import('../article/main-image'), {
  ssr: false
});
const MultiColumnList = dynamic(import('../article/multi-column-list'), {
  ssr: false
});
const Header = dynamic(import('../common/mdx-header'), {
  ssr: false
});
const TableSimple = dynamic(import('../article/table-simple'), {
  ssr: false
});
const TableScrolling = dynamic(import('../article/table-scrolling'), {
  ssr: false
});
const TableOfContents = dynamic(import('../article/table-of-contents'), {
  ssr: false
});
const ReadThisNext = dynamic(import('../article/read-this-next'), {
  ssr: false
});
const CallToActionLarge = dynamic(import('../article/call-to-action-large'), {
  ssr: false
});
const CallToAction = dynamic(import('../article/call-to-action'), {
  ssr: false
});
const SplitList = dynamic(import('../article/split-list'), {
  ssr: false
});
const SimpleButton = dynamic(import('../article/simple-button'), {
  ssr: false
});
const FrequentlyAskedQuestion = dynamic(import('../article/frequently-asked-question'), {
  ssr: false
});
const LinkList = dynamic(import('../category/link-list'), {
  ssr: false
});
const LinkListLarge = dynamic(import('../category/link-list-large'), {
  ssr: false
});
const MainNavigation = dynamic(import('../common/main-navigation'), {
  ssr: false
});

const CommonFeatured = dynamic(import('../common/common-featured'));

const AboutUsFact = dynamic(import('../misc/misc-aboutus-fact'), {
  ssr: false
});
const CommonTrust = dynamic(import('../common/common-trust'), {
  ssr: false
});
const MainHeader = dynamic(import('../common/header'), {
  ssr: false
});
const ContactForm = dynamic(import('../misc/aboutus-contact-form'), {
  ssr: false
});
const AboutUsPeopleFeature = dynamic(import('../misc/aboutus-people-feature'), {
  ssr: false
});
const AboutHeader = dynamic(import('../misc/aboutus-header'), {
  ssr: false
});

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <_Link color="link" {...props} fontWeight="bold" className="mdx">
          {props.children}
        </_Link>
      </Link>
    );
  }

  return (
    <_Link
      target="_blank"
      rel="noopener noreferrer"
      color="link"
      className="mdx"
      fontWeight="bold"
      {...props}>
      {props.children}
    </_Link>
  );
};

const h1 = (props) => <Heading as="h1" size="2xl" my="0.5rem" {...props} />;
const h2 = (props) => (
  <Heading as="h2" className="article-heading" size="xl" my="0.5rem" {...props} />
);
const h3 = (props) => {
  // eslint-disable-next-line react/no-children-prop
  return <Heading as="h3" size="lg" my="0.5rem" {...props} children={props?.children?.[1]} />;
};
const h4 = (props) => <Heading as="h4" size="sm" my="0.5rem" {...props} />;
const CImage = (props) => <Imgix {...props} />;

const components = {
  a: CustomLink,
  h1,
  h2,
  h3,
  h4,
  Image: CImage,
  SocialShare,
  InsiderTips,
  ProsCons,
  Callout,
  ExpandedCallout,
  OurFindings,
  Coupon,
  MainImage,
  MultiColumnList,
  Header,
  TableSimple,
  TableScrolling,
  TableOfContents,
  ReadThisNext,
  CallToActionLarge,
  CallToAction,
  SplitList,
  SimpleButton,
  FrequentlyAskedQuestion,
  LinkList,
  LinkListLarge,
  MainNavigation,
  CommonFeatured,
  AboutUsFact,
  CommonTrust,
  MainHeader,
  ContactForm,
  AboutUsPeopleFeature,
  AboutHeader
};

export default components;
