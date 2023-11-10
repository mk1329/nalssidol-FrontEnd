import styled from "styled-components";
// import YeongdeokSea from "../../assets/fonts/KyoboHand.ttf"

// TimeSlider.tsx
export const TimeSliderWrapper = styled.div`
  width: 100vw;
  max-width: 430px;
  height: 10%;

  margin-top: 5%; // 50px 12%

  display: flex;
  justify-content: center;

  font-family: KyoboHand;
  color: #322300;

  @media (max-width: 430px) {
    font-size: 0.8rem; // 16px
  }
  @media (min-width: 390px) {
    font-size: 1rem; // 16px
  }
`;
export const TimeSliderBox = styled.div`
  width: 95%; // 410px
  height: 98%; // 118px
  border-radius: 10px;
  background-color: #fffefa;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 4px;

  display: flex;
  flex-direction: row;
  position: relative;
`;
export const TimeBox = styled.div`
  /* width: 17%; // 64px */
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    /* width: 100%; */
    width: 70%;
  }
`;

// SubSlider.tsx
export const SubSliderWrapper = styled.div`
  width: 100vw;
  max-width: 430px;
  height: 5%;

  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 430px) {
    font-size: 0.9rem; // 20px
  }
  @media (min-width: 390px) {
    font-size: 1.2rem; // 20px
  }

  img {
    width: 18px;
    height: 20px;
    position: absolute;
    right: 7%;
  }
`;
export const SubSliderBox = styled.div`
  width: 66%; // 284px
  height: 100%; // 42px

  position: relative;

  border-radius: 6.624px;
  border: 1.5px solid #ffd990;
  background-color: #fff9ee;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
`;
export const SliderText = styled.p`
  /* width: 100%;
  height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "KyoboHand";
`;

// WindowBox.tsx
export const WindowBoxWrapper = styled.div`
  width: 80%; // 230px
  max-width: 430px;

  padding: 0 15%;
  margin: 10% 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  color: #fff;
`;
export const Location = styled.div`
  width: 100%; // 230px
  border-bottom: 1px solid #fff;

  display: flex;
  justify-content: center;
  position: relative;

  padding-top: 10px;
  padding-bottom: 5px;

  font-family: Gmarket Sans;

  @media (max-width: 430px) {
    font-size: 0.9rem; // 18px
  }
  @media (min-width: 390px) {
    font-size: 1.2rem; // 18px
  }

  z-index: 1;

  img {
    width: 7%; // 16px
    position: absolute;
    right: 0;
    transform: translate(0, 20%);
  }
`;
export const Temperature = styled.div`
  display: flex;
  justify-content: center;

  padding: 8% 0 6% 0;

  font-family: Gmarket Sans;
  font-weight: 600;
  font-size: 3rem; //46px;
  @media (max-width: 430px) {
    font-size: 3rem; // 46px
  }
  @media (min-width: 390px) {
    font-size: 3.3rem; // 46px
  }

  z-index: 1;
`;
export const HighAndLow = styled.div`
  font-family: Gmarket Sans;
  font-weight: 600;

  @media (max-width: 430px) {
    font-size: 0.9rem; // 18px
  }
  @media (min-width: 390px) {
    font-size: 1.2rem; // 18px
  }

  z-index: 1;
`;
export const SeasonImg = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 80%;
  }
`;

// ClothesBoxs.tsx
export const ClothesBoxsWrapper = styled.div`
  width: 100vw;
  max-width: 430px;
  height: 15%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  line-height: 140%;
  font-family: KyoboHand;

  @media (max-width: 430px) {
    font-size: 0.9rem; // 18px
  }
  @media (min-width: 390px) {
    font-size: 1.1rem; // 18px
  }
`;
export const ClothesBox = styled.div`
  width: 28%; // 121px
  height: 100%; // 136px
  border-radius: 20px;
  background-color: #fffefb;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 5px;

  img {
    width: 30%; //36px;
  }
`;
export const ClothesTitle = styled.p`
  color: #f2a000;
  text-align: center;
`;
export const ClothesTextLabel = styled.div`
  height: 44%;
`;
export const ClothesText = styled.p`
  color: #322300;
  text-align: center;
  font-weight: 400;
`;

// NalaldolBox.tsx
export const NalaldolBoxWrapper = styled.div`
  width: 100vw;
  max-width: 430px;
  height: 38%; // 300px

  position: relative;
`;
export const Nalaldol = styled.img`
  @media (max-width: 430px) {
    width: 200px;
  }
  @media (min-width: 390px) {
    /* width: 64%; */
    width: 68%;
  }

  position: absolute;
  bottom: 8%;
  right: 0;
`;
export const SeasonBottom = styled.img`
  width: 95%;

  position: absolute;
  bottom: 0;
  right: 0;
`;
export const Comment = styled.div`
  width: 32%; // 141px
  height: 38%; // 113px

  position: absolute;
  bottom: 52%; // 156px
  left: 4%; // 18px

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px;

  color: #1669b9;
  font-family: KyoboHand;
  line-height: 150%;

  @media (max-width: 430px) {
    font-size: 0.8rem; // 18px
  }
  @media (min-width: 390px) {
    font-size: 1.1rem; // 18px
  }

  background-image: url("/말풍선.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  p {
    transform: translate(0, -20%);
  }
`;
