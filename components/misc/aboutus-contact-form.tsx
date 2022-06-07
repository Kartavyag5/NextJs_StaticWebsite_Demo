import { Box, FormControl, FormLabel, Input, Textarea, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import HomepageCommonHeader from '../../components/common/header';
type Props = {
  title: string;
  people: string[];
};

const ContactForm: React.FC<Props> = (props): JSX.Element => {
  return (
    <ContactFormBox>
      <HomepageCommonHeader headerTitle="GET IN TOUCH WITH US" />
      <Box className="contact-form-container">
        <Box className="contact-form-container-left">
          <FormControl className="contact-form-control">
            <FormLabel htmlFor="text">First Name</FormLabel>
            <Input id="firstname" placeholder='Enter your first name' type="text" />
          </FormControl>
          <FormControl className="contact-form-control">
            <FormLabel htmlFor="text">Last Name</FormLabel>
            <Input id="lastname" placeholder='Enter your last name' type="text" />
          </FormControl>
          <FormControl className="contact-form-control">
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" placeholder='Enter your email' type="email" />
          </FormControl>
          <FormControl className="contact-form-control">
            <FormLabel htmlFor="number">Phone number</FormLabel>
            <Input id="phoneNumber" placeholder='Enter your phone number' type="number" />
          </FormControl>
        </Box>
        <Box className="contact-form-container-right">
          <Box className="contact-form-msg-tag">Your Message:</Box>
          <Textarea className="container-form-textarea" size="lg" placeholder="Type here" />
        </Box>
      </Box>
    </ContactFormBox>
  );
};

const ContactFormBox = styled(Box)`
  font-family: proxima-nova;
  max-width: 1127px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px auto;
  padding: 64px 96px;
  border: 2px solid lightgray;
  border-radius: 6px;

  .contact-form-container {
    display: flex;
    width: 100%;
    .contact-form-container-left {
      flex: 1;
      width: 100%;
      margin: 20px 25px auto;

      .contact-form-control {
        margin-bottom: 25px;
      }
    }
    .contact-form-container-right {
      flex: 1;
      margin: 20px 0px 0px 0px;

      .contact-form-msg-tag {
        margin-bottom: 4px;
      }
      .container-form-textarea {
        width: 100%;
        height: 85.5%;
      }
    }
  }

  @media (max-width: 950px) {
    padding: 64px 0px;
    border: 0px;

    .contact-form-container {
      display: flex;
      flex-direction: column;
      width: 100%;

      .contact-form-container-left {
        padding: 0px 15px;
        width: 100%;
        margin: 0px !important;

        .contact-form-control {
          margin-bottom: 25px;
        }
      }
      .contact-form-container-right {
        padding: 0px 15px;
        width: 100%;
        margin: 0px !important;
        .container-form-textarea {
          width: 100%;
          height: 80%;
        }
      }
    }
  }
`;

export default ContactForm;
