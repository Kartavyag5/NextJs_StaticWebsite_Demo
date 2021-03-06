import React, { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { HomepageExtendedInfo1 } from '../../assets/js/homepageExtendedInfo1';
import { HomepageExtendedInfo2 } from '../../assets/js/homepageExtendedInfo2';
import { HomepageExtendedInfo3 } from '../../assets/js/homepageExtendedInfo3';
import styled from '@emotion/styled';
import HomepageCommonHeader from '../common/header';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// gsap.core?.globals('ScrollTrigger', ScrollTrigger);

const HomepageExtendedInfo = ({ extendedData }) => {
  useEffect(() => {
    gsap.to('#Path_1', {
      rotate: '-20deg',
      x: '-10px',
      y: '20px',
      scrollTrigger: {
        trigger: '#Extended_Info_1',
        start: '100% bottom',
        end: '0% 67px',
        scrub: true
      }
    });
    gsap.to('#Path_2', {
      x: '0px',
      y: '8px',
      scrollTrigger: {
        trigger: '#Extended_Info_1',
        start: '100% bottom',
        end: '0% 67px',
        scrub: true
      }
    });
    gsap.to('#Path_3', {
      x: '-15px',
      y: '18px',
      opacity: 0.761,
      scale: 3,
      scrollTrigger: {
        trigger: '#Extended_Info_1',
        start: '100% bottom',
        end: '0% 67px',
        scrub: true
      }
    });
    gsap.to('#Path_5', {
      y: '25px',
      scrollTrigger: {
        trigger: '#Extended_Info_1',
        start: '100% bottom',
        end: '0% 67px',
        scrub: true
      }
    });
    gsap.to('#Path_6', {
      fill: '#90db0e',
      scrollTrigger: {
        trigger: '#Extended_Info_1',
        start: '100% bottom',
        end: '0% 67px',
        scrub: true
      }
    });
    gsap.to('#Path_7', {
      fill: '#e54253',
      fillOpacity: 1,
      scrollTrigger: {
        trigger: '#Extended_Info_1',
        start: '100% bottom',
        end: '0% 67px',
        scrub: true
      }
    });
    gsap.to('#Path_105', {
      fill: '#90db0e',
      scrollTrigger: {
        trigger: '#Extended_Info_2',
        start: '100% bottom',
        end: '0% 67px',
        scrub: true
      }
    });
    gsap.to('#Path_103', {
      x: '3px',
      y: '7px',
      rotate: '10deg',
      scrollTrigger: {
        trigger: '#Extended_Info_2',
        start: '100% bottom',
        end: '0% 67px',
        scrub: true
      }
    });
    gsap.to('#Path_104', {
      rotate: '10deg',
      scrollTrigger: {
        trigger: '#Extended_Info_2',
        start: '100% bottom',
        end: '0% 67px',
        scrub: true
      }
    });
    gsap.to('#Path_102', {
      // rotate: '10deg',
      y: '7px',
      x: '-5px',
      scrollTrigger: {
        trigger: '#Extended_Info_2',
        start: '100% bottom',
        end: '0% 67px',
        scrub: true
      }
    });
    gsap.to('#Path_101', {
      rotate: '-30deg',
      y: '23px',
      x: '-13px',
      scrollTrigger: {
        trigger: '#Extended_Info_2',
        start: '100% bottom',
        end: '0% 67px',
        scrub: true
      }
    });
    gsap.to('#Path_204', {
      y: '-111px',
      x: '332px',
      scale: 1.3,
      scrollTrigger: {
        trigger: '#Extended_Info_3',
        start: '100% bottom',
        end: '0% 25%',
        scrub: true
      }
    });
    gsap.to('#Path_205', {
      opacity: 0,
      scrollTrigger: {
        trigger: '#Extended_Info_3',
        start: '75% bottom',
        end: '-25% 17%',
        scrub: true
      }
    });
    gsap.to('#Path_201', {
      // opacity: 0,
      rotate: '-40deg',
      y: '25px',
      x: '-5px',
      scrollTrigger: {
        trigger: '#Extended_Info_3',
        start: '75% bottom',
        end: '-25% 17%',
        scrub: true
      }
    });
    gsap.to('#Path_202', {
      rotate: '-90deg',
      y: '30px',
      x: '0px',
      scrollTrigger: {
        trigger: '#Extended_Info_3',
        start: '75% bottom',
        end: '-25% 17%',
        scrub: true
      }
    });
    gsap.to('#Path_203', {
      rotate: '-100deg',
      y: '8px',
      x: '8px',
      scrollTrigger: {
        trigger: '#Extended_Info_3',
        start: '75% bottom',
        end: '-25% 17%',
        scrub: true
      }
    });
  }, []);

  const cardImageByIndex = (index) => {
    const autoWH = {
      height: 'auto',
      width: 'auto'
    };

    const props = {
      info1: {
        maxWidth: 467,
        maxHeight: 275,
        ...autoWH
      },
      info2: {
        maxWidth: 474,
        maxHeight: 338,
        ...autoWH
      },
      info3: {
        maxWidth: 517,
        maxHeight: 351,
        ...autoWH
      }
    };
    if (index === 0) return <HomepageExtendedInfo1 {...props.info1} />;
    if (index === 1) return <HomepageExtendedInfo2 {...props.info2} />;
    if (index === 2) return <HomepageExtendedInfo3 {...props.info3} />;
  };

  const cardDetail = (cardData) => {
    return (
      <Box className="extended-info-card-detail">
        <Text className="card-title">{cardData?.title}</Text>
        <Text className="card-description">{cardData?.paragraph}</Text>
      </Box>
    );
  };

  const cardImage = (index) => {
    return <Box className="extended-info-card-image">{cardImageByIndex(index)}</Box>;
  };

  return (
    <ExtendedInfoBox>
      <HomepageCommonHeader headerTitle={extendedData?.title} />
      <Box className="extended-info-details">
        {extendedData?.points?.map((point, index) =>
          ((index / 2) * 10) % 2 === 0 ? (
            <CardBox cardindex={index} className="extended-info-card" key={index}>
              {cardDetail(point)}
              {cardImage(index)}
            </CardBox>
          ) : (
            <CardBox cardindex={index} className="extended-info-card" key={index}>
              {cardImage(index)}
              {cardDetail(point)}
            </CardBox>
          )
        )}
      </Box>
    </ExtendedInfoBox>
  );
};

const ExtendedInfoBox = styled(Box)`
  max-width: 980px;
  min-height: 1000px;
  width: 70vw;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  font-family: proxima-nova;
  @media (max-width: 768px) {
    width: 85vw;
  }
  @media (max-width: 600px) {
    width: 100vw;
    padding: 30px;
  }
  .extended-info-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const CardBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (max-width: 600px) {
    flex-direction: ${(props) =>
      ((props.cardindex / 2) * 10) % 2 === 0 ? 'column-reverse' : 'column'};
  }
  .extended-info-card-detail {
    width: 45%;
    @media (max-width: 600px) {
      width: 100%;
    }
    .card-title {
      font-size: 28px;
      font-weight: bold;
      line-height: 1;
      margin-bottom: 10px;
      @media (max-width: 1100px) {
        font-size: 22px;
      }
      @media (max-width: 768px) {
        font-size: 22px;
      }
      @media (max-width: 600px) {
        text-align: left;
      }
    }
    .card-description {
      @media (max-width: 1100px) {
        font-size: 15px;
      }
      @media (max-width: 768px) {
        font-size: 15px;
      }
      @media (max-width: 600px) {
        text-align: justify;
      }
    }
  }
  .extended-info-card-image {
    width: 45%;
    @media (max-width: 600px) {
      width: 100%;
      margin-bottom: 20px;
    }
    @media (min-width: 600px) {
      svg {
        &[data-name='Extended_Info_1'] {
          #Path_1,
          #Path_2,
          #Path_3,
          #Path_5,
          #Path_6,
          #Path_7 {
            transition: all 0.2s ease;
          }
          &:hover {
            /* #Path_1 {
              d: path(
                'M143.893 7.50709C143.936 7.24136 144.058 6.99475 144.243 6.79898C144.428 6.60322 144.667 6.46725 144.93 6.40859C133.979 8.85169 123.005 13.3562 115.702 21.87C113.933 23.9325 112.367 26.2363 110.291 27.9591C110.194 28.0416 110.119 28.148 110.075 28.2679C110.03 28.3878 110.018 28.5171 110.038 28.6433C110.059 28.7695 110.111 28.8882 110.191 28.9881C110.271 29.0879 110.375 29.1653 110.494 29.2129L110.813 29.343C110.94 29.3938 111.05 29.4785 111.132 29.5878C111.214 29.6972 111.264 29.8269 111.277 29.9629C111.29 30.0988 111.265 30.2357 111.206 30.3585C111.146 30.4814 111.054 30.5854 110.939 30.6593C110.82 30.7365 110.726 30.846 110.667 30.9749C110.608 31.1039 110.587 31.247 110.607 31.3873C110.627 31.5276 110.687 31.6594 110.779 31.767C110.871 31.8747 110.992 31.9538 111.127 31.9951L113.496 32.713C113.615 32.7481 113.723 32.8125 113.811 32.9003C113.898 32.9881 113.962 33.0964 113.997 33.2154C114.032 33.3344 114.036 33.4602 114.01 33.5814C113.984 33.7025 113.927 33.8151 113.846 33.9088C113.707 34.0618 113.555 34.2028 113.392 34.3304C113.289 34.4064 113.208 34.5075 113.156 34.6239C113.104 34.7404 113.083 34.8683 113.095 34.9953C113.107 35.1223 113.151 35.2441 113.224 35.349C113.296 35.4538 113.395 35.5382 113.51 35.5939C114.596 36.1161 115.537 36.896 116.253 37.8657C117.336 39.467 118.168 41.2248 118.719 43.0778C118.641 40.2081 121.107 37.7992 123.815 36.85C126.523 35.9007 129.47 36.0387 132.339 35.9236C138.584 35.6683 144.715 34.1629 150.369 31.4963C149.508 36.1124 152.595 40.4486 155.503 44.1378L160.356 40.1798C166.726 33.7105 166.637 53.3748 164.509 56.6815C170.887 57.029 179.669 30.3539 172.357 23.2866C168.553 19.6106 168.728 13.4125 162.534 10.6683C159.347 8.79317 154.788 11.3406 151.678 9.9135C150.454 9.35218 151.305 6.66762 149.813 6.56272C147.819 6.73247 145.84 7.0481 143.893 7.50709V7.50709Z'
              );
            }
            #Path_2 {
              d: path(
                'M150.067 68.4489C163.051 64.7258 170.559 51.1821 166.835 38.1981C163.112 25.2141 149.569 17.7067 136.585 21.4298C123.601 25.1529 116.093 38.6966 119.816 51.6806C123.539 64.6646 137.083 72.172 150.067 68.4489Z'
              );
            } */
            /* #Path_3 {
              d: path(
                'M68.4971 88.913C77.2657 88.913 84.3741 81.8046 84.3741 73.036C84.3741 64.2674 77.2657 57.159 68.4971 57.159C59.7284 57.159 52.6201 64.2674 52.6201 73.036C52.6201 81.8046 59.7284 88.913 68.4971 88.913Z'
              );
              opacity: 0.761;
            } */
            /* #Path_5 {
              d: path(
                'M1.63103 154.627C2.46857 156.026 3.60262 157.224 4.95336 158.137C6.3041 159.05 7.83864 159.656 9.44887 159.912C11.0591 160.168 12.7058 160.068 14.2731 159.618C15.8404 159.169 17.2901 158.381 18.52 157.311L52.898 177.028L51.617 156.473L19.167 140.9C17.232 138.954 14.6503 137.784 11.9109 137.614C9.17162 137.444 6.46496 138.284 4.3037 139.976C2.14244 141.667 0.676679 144.093 0.184102 146.793C-0.308475 149.493 0.206354 152.28 1.63103 154.626V154.627Z'
              );
            } */
            /* #Path_6 {
              fill: #90db0e;
            } */
            /* #Path_7 {
              fill: #e54253;
              fill-opacity: 1;
            } */
          }
        }
        &[data-name='Extended_Info_2'] {
          #Path_101,
          #Path_102,
          #Path_103,
          #Path_104,
          #Path_105 {
            transition: all 0.2s ease;
          }
          &:hover {
            /* #Path_101 {
              d: path(
                'M427.165 52.7612C425.816 52.1725 424.629 51.2659 423.706 50.119C422.782 48.972 422.151 47.6187 421.864 46.1746C421.102 42.3192 420.557 39.8117 420.29 38.9285C419.372 35.9073 415.469 34.7383 412.401 35.5368C412.282 35.5677 412.183 35.5967 412.102 35.622C412.202 35.6646 412.315 35.7072 412.413 35.7465C413.18 36.0419 414.129 36.4124 414.235 37.1472C414.298 37.5896 414.049 38.0224 413.462 38.4731C409.416 41.5929 405.429 41.8403 400.915 39.2497C399.641 38.5101 398.557 37.4843 397.747 36.2534C394.562 31.4445 395.603 25.8286 397.042 21.9618C398.225 18.7745 400.523 14.56 404.769 12.5616C408.07 11.0123 412.87 11.3295 415.483 14.3471C415.711 13.2791 416.185 12.2788 416.866 11.4254C417.548 10.572 418.418 9.88898 419.409 9.4304C421.694 8.4491 424.218 8.16337 426.664 8.60898C438.389 10.2158 447.728 21.5538 447.061 33.3711C446.642 40.8024 442.145 48.0249 435.326 52.2208C434.898 52.4846 434.449 52.7119 433.983 52.9005C432.896 53.3375 431.731 53.551 430.56 53.5283C429.388 53.5056 428.233 53.2471 427.164 52.7683L427.165 52.7612Z'
              );
            } */
            /* #Path_102 {
              d: path(
                'M432.527 52.7984C443.371 48.4173 448.61 36.0753 444.229 25.2317C439.848 14.3881 427.506 9.14924 416.662 13.5303C405.819 17.9114 400.58 30.2535 404.961 41.097C409.342 51.9406 421.684 57.1795 432.527 52.7984Z'
              );
            } */
            /* #Path_103 {
              d: path(
                'M411.501 117.083C410.97 117.175 410.425 117.131 409.916 116.955L394.446 111.63C393.669 111.362 393.024 110.807 392.643 110.079C392.263 109.35 392.177 108.504 392.402 107.714L401.531 75.6773C402.345 72.6771 404.229 70.079 406.829 68.374C408.7 67.1714 410.862 66.496 413.085 66.4188C415.308 66.3416 417.511 66.8656 419.462 67.9354C420.972 68.7467 422.286 69.8774 423.315 71.2485C424.563 72.8726 425.386 74.7822 425.711 76.8047C426.035 78.8271 425.85 80.8985 425.172 82.8313L414 114.969C413.81 115.511 413.479 115.993 413.041 116.364C412.602 116.735 412.072 116.982 411.506 117.079L411.501 117.083Z'
              );
            } */
            /* #Path_104 {
              d: path(
                'M354.844 161.256C354.546 160.152 354.493 158.995 354.69 157.868C354.887 156.741 355.329 155.67 355.984 154.732C356.64 153.794 357.493 153.011 358.484 152.439C359.474 151.866 360.579 151.518 361.719 151.418L398.015 103.385L409.476 115.969L370.329 159.091C370.37 161.018 369.704 162.893 368.455 164.361C367.206 165.828 365.462 166.787 363.553 167.054C361.645 167.321 359.705 166.879 358.101 165.811C356.496 164.743 355.34 163.124 354.851 161.26L354.844 161.256Z'
              );
            } */
            /* #Path_105 {
              fill: #90db0e;
            } */
          }
        }
        &[data-name='Extended_Info_3'] {
          #Path_201,
          #Path_202,
          #Path_203,
          #Path_204 {
            transition: all 0.2s ease;
          }
          &:hover {
            /* #Path_201 {
              d: path(
                'M88.3375 129.116C87.6876 122.509 88.0005 115.843 89.2664 109.325C90.1756 103.864 92.1911 98.6461 95.1892 93.9915C98.3095 89.44 102.916 85.7486 108.292 84.507C113.668 83.2654 120.846 83.8425 124.489 87.9873C125.66 89.3188 126.893 91.4245 125.373 92.3383L125.04 92.7169L113.828 99.0836L122.018 116.706C122.593 117.944 123.173 119.384 122.6 120.623C122.06 121.79 120.711 122.306 119.49 122.71C119.285 122.779 115.554 121.036 115.554 121.036C115.445 120.974 115.322 120.943 115.197 120.945C115.072 120.947 114.949 120.983 114.843 121.049C114.736 121.114 114.649 121.207 114.591 121.318C114.532 121.429 114.505 121.553 114.51 121.678L114.572 123.274C114.585 123.578 114.498 123.878 114.325 124.129C114.152 124.38 113.901 124.567 113.612 124.662L92.4228 131.687C91.4442 132.007 90.3063 132.315 89.4518 131.752C89.0858 131.42 88.7964 131.012 88.604 130.557C88.4115 130.102 88.3206 129.61 88.3375 129.116V129.116Z'
              );
            } */
            /* #Path_202 {
              d: path(
                'M121.951 158.441C121.898 158.141 121.802 157.85 121.666 157.577L113.583 141.299C113.389 140.907 113.116 140.561 112.78 140.28C112.445 140 112.056 139.792 111.636 139.671C111.217 139.549 110.777 139.515 110.344 139.572C109.911 139.629 109.494 139.775 109.12 140.002L93.8268 149.256C93.1805 149.643 92.695 150.25 92.4589 150.966C92.2229 151.682 92.252 152.459 92.541 153.155L97.0074 164.064C97.2868 164.745 97.795 165.307 98.4443 165.653C99.0937 165.999 99.8434 166.107 100.564 165.96L119.471 162.076C120.275 161.91 120.984 161.438 121.446 160.76C121.909 160.081 122.089 159.249 121.949 158.44L121.951 158.441Z'
              );
            } */
            /* #Path_203 {
              d: path(
                'M187.521 139.237C187.055 140.235 186.375 141.12 185.53 141.827C184.685 142.535 183.696 143.049 182.631 143.332C181.566 143.616 180.451 143.663 179.366 143.469C178.281 143.276 177.252 142.847 176.351 142.212L112.427 159.044L111.803 142.661L174.778 131.223C175.944 129.78 177.599 128.815 179.429 128.511C181.259 128.206 183.138 128.584 184.708 129.571C186.279 130.559 187.432 132.088 187.951 133.869C188.469 135.651 188.316 137.56 187.521 139.237V139.237Z'
              );
            } */
            /* #Path_204 {
              d: path(
                'M449.169 135.45C449.73 135.448 450.275 135.267 450.726 134.934L454.479 132.208C454.79 131.981 455.166 131.858 455.552 131.858C455.937 131.858 456.313 131.981 456.624 132.208L460.377 134.935C460.83 135.264 461.375 135.441 461.934 135.441C462.493 135.441 463.039 135.264 463.491 134.936C463.944 134.607 464.281 134.143 464.454 133.611C464.627 133.079 464.627 132.506 464.454 131.974L463.021 127.563C462.901 127.197 462.901 126.802 463.02 126.435C463.139 126.068 463.372 125.749 463.684 125.523L467.437 122.796C467.89 122.467 468.226 122.004 468.399 121.472C468.572 120.94 468.572 120.366 468.399 119.834C468.226 119.302 467.89 118.839 467.437 118.51C466.984 118.181 466.439 118.004 465.88 118.004H461.241C460.856 118.005 460.48 117.883 460.168 117.656C459.856 117.43 459.624 117.11 459.506 116.743L458.073 112.332C457.9 111.8 457.563 111.336 457.111 111.007C456.658 110.678 456.113 110.501 455.554 110.501C454.994 110.501 454.449 110.678 453.996 111.007C453.544 111.336 453.207 111.8 453.034 112.332L451.6 116.743C451.481 117.109 451.25 117.427 450.939 117.653C450.628 117.879 450.253 118.001 449.869 118.001H445.229C444.67 118.001 444.125 118.178 443.672 118.507C443.22 118.836 442.883 119.299 442.71 119.831C442.537 120.363 442.537 120.936 442.71 121.468C442.883 122 443.22 122.464 443.672 122.793L447.425 125.519C447.737 125.745 447.97 126.064 448.089 126.431C448.208 126.798 448.208 127.193 448.088 127.559L446.655 131.97C446.476 132.501 446.473 133.076 446.646 133.61C446.819 134.143 447.16 134.606 447.617 134.931C448.068 135.264 448.613 135.445 449.174 135.447L449.169 135.45Z'
              );
            } */
            /* #Path_205 {
              opacity: 0;
            } */
          }
        }
      }
    }
  }
`;

export default HomepageExtendedInfo;
