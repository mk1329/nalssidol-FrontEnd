import * as S from "./style";
import "../../style/styles.css";
import { useNavigate } from "react-router-dom";
import { ApiNowModel, ApiVilageFuture } from "../../model/apiModel";

type Props = {
  vilageData: ApiVilageFuture[];
  nowData: ApiNowModel;
  city: string;
  gu: string;
};

const WindowBox = (props: Props) => {
  const navigate = useNavigate();

  const allTemperature: ApiVilageFuture[] = props.vilageData.filter(
    (data: ApiVilageFuture) => data.category === "TMP"
  );

  const minTemperature: number =
    allTemperature.length > 0
      ? Math.min(...allTemperature.map((item) => parseInt(item.fcstValue)))
      : 0;
  const maxTemperature: number =
    allTemperature.length > 0
      ? Math.max(...allTemperature.map((item) => parseInt(item.fcstValue)))
      : 0;

  console.log("가장 낮은 온도:", minTemperature);
  console.log("가장 높은 온도:", maxTemperature);

  // const min =
  //   props.vilageData.length > 0
  //     ? props.vilageData.filter((item) => item.category === "TMN")[0].fcstValue
  //     : "0";
  // const max =
  //   props.vilageData.length > 0
  //     ? props.vilageData.filter((item) => item.category === "TMX")[0].fcstValue
  //     : "0";
  // console.log(min, max);

  // 창문 밖 계절이미지
  const today: Date = new Date();
  const month: number = today.getMonth() + 1;
  console.log(month);

  interface MonthToSeasonMap {
    [key: number]: string;
  }

  const MonthToSeason: MonthToSeasonMap = {
    1: "/겨울 창문.png",
    2: "/겨울 창문.png",
    3: "/봄 창문.png",
    4: "/봄 창문.png",
    5: "/봄 창문.png",
    6: "/여름 창문.png",
    7: "/여름 창문.png",
    8: "/여름 창문.png",
    9: "/가을 창문.png",
    10: "/가을 창문.png",
    11: "/가을 창문.png",
    12: "/겨울 창문.png",
  };
  const getSeasonImg = (monthNum: number): string => {
    return MonthToSeason[monthNum] || "/가을 창문.png";
  };
  const SeasonImg: string = getSeasonImg(month);

  return (
    <>
      <S.WindowBoxWrapper>
        <S.Location onClick={() => navigate("select", { state: props })}>
          {/* 서울특별시 용산구 */}
          {props.city} {props.gu}
          <img src="/search.png" alt="검색" />
        </S.Location>
        <S.Temperature>
          {props.nowData && parseInt(props.nowData.obsrValue)}℃
        </S.Temperature>
        <S.HighAndLow>
          최고 {maxTemperature}℃ | 최저 {minTemperature}℃
        </S.HighAndLow>

        <S.SeasonImg src={SeasonImg} alt="배경이미지" />
      </S.WindowBoxWrapper>
    </>
  );
};

export default WindowBox;
