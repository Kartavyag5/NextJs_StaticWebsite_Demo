import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  ModalHeader,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import HomepageCommonHeader from '../../components/common/header';
import styled from '@emotion/styled';
import { ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { ImFacebook2, ImLinkedin2 } from 'react-icons/im';
import ReactMarkdown from 'react-markdown';

type Props = {
  title: string;
  people: string[];
};

// type PeopleDetails = {
//     description: string;
//     image: string;
//     name: string;
// }

const AboutUsPeopleFeature: React.FC<Props> = ({ title, people }): JSX.Element => {
  const [allPeople, setAllPeople] = useState<any>([]);
  const [activeModelUser, setActiveModelUser] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [visible, setVisible] = useState(false);
  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    fetchPeopleDetails();
    window.addEventListener('resize', () => setWindowsWidth(window?.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setWindowsWidth(window?.innerWidth));
    };
  }, []);

  const fetchPeopleDetails = async () => {
    let allAuthors = [];
    const unresolved = people?.map(async (author) => {
      const authorData = await import(`../../data/authors/${author}.yml`);
      allAuthors = [...allAuthors, { ...authorData.default, baseName: author }];
    });
    await Promise.all(unresolved);
    const uniqueArray = allAuthors.reduce((unique, o) => {
      if (!unique.some((obj) => obj.baseName === o.baseName)) {
        unique.push(o);
      }
      return unique;
    }, []);
    setAllPeople([...allPeople, ...uniqueArray]);
  };

  const getAuthorContent = (authorName) => {
    return allPeople?.find((data) => data?.baseName === authorName);
  };

  const renderModal = () => (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent fontFamily={'proxima-nova'}>
        <ModalCloseButton />
        <ModalHeader></ModalHeader>
        <RenderModalBox>
          <Box className="people-feature-model-container">
            <Box className="people-feature-model-image-box">
              <Image
                className="people-feature-model-image"
                src={getAuthorContent(activeModelUser)?.image}
              />
            </Box>
            <Box className="people-feature-model-content-box">
              <Box className="people-feature-model-title">
                {getAuthorContent(activeModelUser)?.name}
              </Box>
              <Box className="people-feature-model-role">Co-founder and CEO</Box>
              <ReactMarkdown className="people-feature-model-details">
                {getAuthorContent(activeModelUser)?.description}
              </ReactMarkdown>
              <Box className="people-feature-model-social">
                <ImFacebook2 color={'#16A0B7'} /> <ImLinkedin2 color={'#16A0B7'} />
              </Box>
            </Box>
          </Box>
        </RenderModalBox>
      </ModalContent>
    </Modal>
  );

  const PeopleFeatureMobile = () => (
    <Box>
      <Accordion allowMultiple>
        {allPeople?.length > 0 &&
          people?.map((author, index) => (
            <div key={index}>
              <AccordionItemBox key={index}>
                <AccordionButton className="people-feature-mobile-acco-button">
                  <PeopleFeatureMobileBox>
                    <Box className="people-feature-mobile-visible-box">
                      <Box className="people-feature-mobile-image-box">
                        <Image
                          className="people-feature-mobile-image"
                          src={getAuthorContent(author)?.image}
                        />
                      </Box>
                      <Box className="people-feature-mobile-main-box">
                        <Box className="people-feature-mobile-content-box">
                          <Box className="people-feature-mobile-title">
                            {getAuthorContent(author)?.name}
                          </Box>
                          <Box className="people-feature-mobile-role" textAlign={'left'}>
                            Co-founder and CEO
                          </Box>
                        </Box>
                      </Box>
                      <AccordionIcon color={'#E52843'} />
                    </Box>
                  </PeopleFeatureMobileBox>
                </AccordionButton>
                <AccordionPanel className="people-feature-panel-box">
                  <Box className="people-feature-mobile-hidden-box">
                    <ReactMarkdown className="people-feature-mobile-details">
                      {getAuthorContent(author)?.description}
                    </ReactMarkdown>
                    <Box className="people-feature-mobile-social">
                      <ImFacebook2 color={'#16A0B7'} /> <ImLinkedin2 color={'#16A0B7'} />
                    </Box>
                  </Box>
                </AccordionPanel>
              </AccordionItemBox>
            </div>
          ))}
      </Accordion>
    </Box>
  );

  return window.innerWidth > 740 ? (
    <AboutUsPeopleFeatureBox>
      <HomepageCommonHeader headerTitle={title} />
      <Box className="people-feature-container">
        {allPeople?.length > 0 &&
          people?.map((author, index) => (
            <Box key={index} className="people-feature-card">
              <Box className="people-feature-card-image-box">
                <Image
                  className="people-feature-card-image"
                  src={getAuthorContent(author)?.image}
                  sizes="100vw"
                />
              </Box>
              <Box className="people-feature-card-title">{getAuthorContent(author)?.name}</Box>
              <Box className="people-feature-card-role">Co-founder and CEO</Box>
              <ReactMarkdown className="people-feature-card-details">
                {getAuthorContent(author)?.short_description.slice(0, 183) + '...'}
              </ReactMarkdown>
              <Box className="people-feature-card-readmore">
                <Box 
                  tabIndex={0} 
                  width={'101px'} 
                  cursor={'pointer'}
                  onClick={() => {
                    onOpen();
                    setActiveModelUser(author);
                  }}
                  onKeyPress={() => {
                    onOpen();
                    setActiveModelUser(author);
                  }}
                >
                  Read more
                  <ChevronRightIcon boxSize={6} />
                </Box>
              </Box>
            </Box>
          ))}
      </Box>
      {renderModal()}
    </AboutUsPeopleFeatureBox>
  ) : (
    <>{PeopleFeatureMobile()}</>
  );
};

const AboutUsPeopleFeatureBox = styled(Box)`
  display: flex;
  font-family: proxima-nova;
  justify-content: center;
  max-width: 1127px;
  margin-top: 64px 119px 64px 119px;
  flex-direction: column;
  margin: auto;
  box-shadow: 0px 5px 15px 0px lightgray;

  .people-feature-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .people-feature-card {
      display: flex;
      flex-direction: column;
      justify-content: left;
      border-radius: 5px;
      width: 359px;
      margin: 0px auto 32px;
      box-shadow: 0px 1px 1px 1px lightgray;

      .people-feature-card-image-box {
        display: flex;
        height: 210px;
        justify-content: center;
        background: #fcf7ea;

        .people-feature-card-image {
          height: 210px;
          width: 210px;
        }
      }

      .people-feature-card-title {
        font-weight: 600;
        font-size: 18px;
        margin: 14px 14px 4px 14px;
      }

      .people-feature-card-role {
        font-size: 14px;
        font-weight: 600;
        color: #16a0b7;
        margin: 0px 14px 16px 14px;
      }

      .people-feature-card-details {
        margin: 0px 14px 16px 14px;
        max-height: 110px;
        line-height: 1.2;
        overflow: hidden;
        p {
          padding: 0px 0px 0px 0px;
          margin: 0px 0px 0px 0px;
        }
      }
    }

    .people-feature-card-readmore {
      font-size: 16px;
      color: #e52843;
      margin: 0px 0px 22px 14px;
    }
  }

  @media (max-width: 1100px) {
    .people-feature-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 740px) {
      .people-feature-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);

        .people-feature-card {
          width: 97%;
        }
      }
    }
  }
`;

const RenderModalBox = styled(ModalBody)`
  display: flex;
  font-family: proxima-nova;
  max-width: 600px;
  /* max-height: 380px; */

  .people-feature-model-container {
    width: 100%;
    height: auto;
    display: flex;

    .people-feature-model-image-box {
      min-width: 150px;
      height: 150px;
      margin: 0px 20px 0px 0px;

      .people-feature-model-image {
        width: 150px;
        height: 150px;
        object-fit: fill;
      }
    }

    .people-feature-model-content-box {
      display: flex;
      flex-direction: column;
      .people-feature-model-title {
        font-size: 18px;
        font-weight: 600;
        margin: 0px 0px 4px 0px;
      }
      .people-feature-model-role {
        font-size: 14px;
        font-weight: 600;
        color: #16a0b7;
        margin: 0px 0px 16px 0px;
      }
      .people-feature-model-details {
        font-size: 16px;
        margin: 0px 0px 18px 0px;
      }
      .people-feature-model-social {
        display: flex;
        gap: 20px;
        margin-bottom: 22px;

        svg {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
`;

const AccordionItemBox = styled(AccordionItem)`
  width: 100%;
  /* min-width: 374px; */
  display: flex;
  flex-direction: column;
  z-index: 2;
  display: flex;
  border: 3px solid lightgray;
  margin: 0px 0px 16px 0px;
  .people-feature-mobile-acco-button {
    padding: 0px;
    /* position: absolute; */
  }
  .people-feature-panel-box {
    display: flex;
    justify-content: center;
    .people-feature-mobile-hidden-box {
      font-size: 14px;
      background-color: white;
      z-index: 10;
      position: absolute;
      border: 3px solid lightgrey;

      padding: 6px;
      border-top: 0px;
      border-radius: 3px;
      overflow: hidden;

      .people-feature-mobile-details {
        margin-bottom: 5px;
      }
      .people-feature-mobile-social {
        display: flex;
        gap: 20px;

        svg {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
`;
const PeopleFeatureMobileBox = styled(Box)`
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  .people-feature-mobile-visible-box {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    align-items: center;
    .people-feature-mobile-image-box {
      height: 100px;
      width: 100px;
      overflow: hidden;
      .people-feature-mobile-image {
        height: 100px;
        width: 100px;
        border-radius: 5px;
      }
    }
    .people-feature-mobile-main-box {
      width: 76%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .people-feature-mobile-content-box {
        .people-feature-mobile-title {
          font-size: 18px;
          font-weight: 600;
        }
        .people-feature-mobile-role {
          font-size: 14px;
        }
      }
    }
  }
`;

export default AboutUsPeopleFeature;
