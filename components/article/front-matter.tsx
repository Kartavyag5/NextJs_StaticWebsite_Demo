import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Avatar,
  Text,
  Flex,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  ModalHeader,
  ModalFooter
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { CheckIcon } from '../../assets/js/checkIcon';
import { CalendarIcon } from '@chakra-ui/icons';
import moment from 'moment';
import Image from 'next/image';

type Props = {
  title: string;
  publishedAt: string;
  readingTime: string;
  description: string;
  author: AuthorProps;
};

type AuthorProps = {
  main_author: string;
  last_updated: string;
  secondary_author_byline: string;
  secondary_authot: string;
  advertising_warning: boolean;
};

type AuthorDetails = {
  description: string;
  image: string;
  name: string;
};

const FrontMatter: FC<Props> = ({ title, publishedAt, readingTime, description, author }) => {
  const [authorOne, setAuthorOne] = useState<AuthorDetails>();
  const [authorTwo, setAuthorTwo] = useState<AuthorDetails>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetchAuthorDetails();
  }, []);

  const fetchAuthorDetails = async () => {
    const author1 = await import(`../../data/authors/${author?.main_author}.yml`);
    const author2 = await import(`../../data/authors/${author?.secondary_authot}.yml`);
    setAuthorOne(author1.default);
    setAuthorTwo(author2.default);
  };

  const popoverBox = (authorRank) => {
    const authorData = authorRank === 'main_author' ? authorOne : authorTwo;

    return (
      authorData && (
        <Popover trigger="hover" placement="bottom-start">
          <PopoverTrigger>
            <Box
              as="span"
              tabIndex={0}
              textDecoration={'underline'}
              textTransform={'capitalize'}
              cursor="pointer">
              {authorData.name}
            </Box>
          </PopoverTrigger>
          <PopoverContent className="front-matter-popover">
            <Box className="front-matter-popover-content">
              <Box className="front-matter-popover-image-container">
                <Image src={authorData.image} alt={authorData.image} width="65px" height="65px" />
              </Box>
              <Box className="front-matter-popover-data-container">
                <Text as="span" className="front-matter-popover-heading">
                  {authorData.name}
                </Text>
                {authorData.short_description?.split('\n').map((desc, index) => (
                  <Text as="span" key={index} className="front-matter-popover-desc">
                    {desc}
                  </Text>
                ))}
              </Box>
            </Box>
          </PopoverContent>
        </Popover>
      )
    );
  };

  const renderModal = () => (
    <Box className="abcd">
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent fontFamily={'proxima-nova'}>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Text as="span" textAlign={'center'}>
              <Text as="h2" color="#20486e" fontSize={'20px'} fontWeight={'bold'}>
                At Innerbody Research, we take transparency seriously.
              </Text>
              <Text>
                Innerbody Research is supported by readers like you. Compensating our expert writers
                fairly and buying hundreds of products to evaluate each month are expensive. In
                order to cover these costs and to keep our information free to users, we instead
                accept referral fee compensation from some companies referenced on our site. What
                this means is that after you find the health test or product that matches your needs{' '}
                <a href="https://www.innerbody.com/htm/aboutsite.html">(our mission!)</a>, click the
                link to the company’s website, and ultimately make a purchase, we sometimes receive
                a small commission from that company at no additional cost to you. Our research team
                is always on the lookout for discounts and promotions, so you may often find that
                your final cost may be lower. We can’t guarantee it will always be lower, but we can
                guarantee that it will never be higher. If you prefer that we not receive this small
                commission, we recommend that you go to the company’s website directly (without
                clicking on our links). This will ensure we are not compensated in any way. The
                choice is always 100% up to you.
              </Text>
              <br />
              <Text as="h2" color="#20486e" fontSize={'20px'} fontWeight={'bold'}>
                Editorial integrity matters to us.
              </Text>
              <Text>
                Companies that we evaluate on Innerbody Research cannot compensate us to influence
                our recommendations or advice, which are grounded in thousands of hours of research.
                Additionally, we purchase all the products we review ourselves and do not accept
                free products. Getting our readers unbiased reviews and information written by
                qualified experts is our very top priority.
              </Text>
            </Text>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );

  return (
    <FrontMatterBox>
      <Heading as="h1" className="front-matter-heading">
        {title}
      </Heading>
      <Heading as="h1" className="front-matter-desc">
        {description}
      </Heading>
      <Flex className="front-matter-details">
        <Text as="span" className="front-matter-author">
          by {popoverBox('main_author')}
        </Text>
        <Box className="front-matter-review">
          <Box width={'auto'} height={'auto'}>
            <CheckIcon width="14px" height="14px" />
          </Box>
          <Text as="span">
            {author?.secondary_author_byline} {popoverBox('')}
          </Text>
        </Box>
        <Box className="front-matter-last-updated">
          <Box width={'auto'} height={'auto'} alignSelf={'flex-start'}>
            <CalendarIcon width="14px" height="14px" />
          </Box>
          <Text as="span">
            Last updated: <Box as="span">{moment(author?.last_updated).format('MMM Do, YYYY')}</Box>
          </Text>
        </Box>
      </Flex>
      {author?.advertising_warning && (
        <Text as="span" className="front-matter-ad-warning">
          Innerbody is independent and reader-supported. When you buy through links on our site, we
          may earn a commission.{' '}
          <Text as="span" onClick={onOpen} cursor={'pointer'} textDecoration={'underline'}>
            Learn More
          </Text>
        </Text>
      )}
      {renderModal()}
    </FrontMatterBox>
  );
};

const FrontMatterBox = styled(Box)`
  font-family: proxima-nova;
  @media (max-width: 800px) {
    padding-top: 10px !important;
  }
  padding-top: 20px;
  max-width: 1127px;
  width: 100%;
  color: #404145;
  margin-bottom: 22px;

  @media (max-width: 1127px) {
    padding: 20px;
  }

  @media (max-width: 580px) {
    margin-bottom: 0px;
    .front-matter-heading {
      font-size: 28px !important;
    }
    .front-matter-desc {
      font-size: 16px !important;
    }
    .front-matter-details {
      flex-direction: column;
      .front-matter-author {
        padding-right: 0px !important;
        border-right: 0px !important;
        line-height: 1.5;
      }
      .front-matter-review {
        line-height: 1.5;
        margin-left: 0px !important;
        padding-right: 0px !important;
        border-right: 0px !important;
      }
      .front-matter-last-updated {
        line-height: 1.5;
        margin-left: 0px !important;
      }
    }
  }

  .front-matter-heading {
    font-size: 42px;
    margin-bottom: 10px;
    line-height: 48px;
    @media (max-width: 580px) {
      line-height: 32px;
      margin-bottom: 15px;
    }
  }
  .front-matter-desc {
    font-size: 22px;
    font-weight: normal;
    line-height: 1.3;
    color: #2c2d30;
    margin-bottom: 10px;
  }
  .front-matter-details {
    font-size: 14px;
    margin-bottom: 15px;
    .front-matter-author {
      padding-right: 20px;
      border-right: 2px solid #d5d7db;
    }
    .front-matter-review {
      display: flex;
      align-items: center;
      margin-left: 16px;
      padding-right: 20px;
      border-right: 2px solid #d5d7db;
      > div {
        line-height: 0;
        align-self: flex-start;
        padding: 4px 0px;
      }
      > span {
        margin-left: 5px;
      }
    }
    .front-matter-last-updated {
      display: flex;
      align-items: center;
      margin-left: 16px;
      > div {
        line-height: 0;
        align-self: center;
      }
      > span {
        margin-left: 5px;
      }
    }
    .chakra-popover__popper {
      z-index: 101;
      .front-matter-popover {
        border: 1px solid #e0e0e0;
        box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.15), inset 0px 0px 2px -1px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        z-index: 101;
        max-width: 444px;
        width: 100%;
        @media (max-width: 490px) {
          max-width: 75vw;
          width: 100%;
        }
        .front-matter-popover-content {
          padding: 15px;
          max-width: 100vw;
          width: 100%;
          z-index: 101;
          .front-matter-popover-image-container {
            float: left;
            min-width: 58px;
            min-height: 58px;
            margin-right: 10px;
          }
          .front-matter-popover-data-container {
            font-size: 16px;
            .front-matter-popover-heading {
              color: #e54253;
              text-decoration: underline;
              font-weight: bold;
              margin-right: 5px;
            }
            .front-matter-popover-desc {
              text-align: left;
            }
          }
        }
      }
    }
  }
  .front-matter-ad-warning {
    @media (max-width: 580px) {
      font-size: 13px;
    }
    font-size: 14px;
    color: #7e8085;
    line-height: 19px;
    display: block;
    font-style: italic;
  }
`;

export default FrontMatter;
