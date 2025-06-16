import clsx from "clsx";
import img from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

type IiBackgroundImageProps = {
  additionalClassNames?: string[];
};

function IiBackgroundImage({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<IiBackgroundImageProps>) {
  return (
    <p className={clsx("leading-[1.75]", additionalClassNames)}>{children}</p>
  );
}

interface ComponentProps {
  onStartClick?: () => void;
}

function Component({ onStartClick }: ComponentProps) {
  return (
    <div
      className="absolute bg-[#bacaf5] h-14 left-5 rounded-2xl top-[590px] w-[317px] cursor-pointer hover:bg-[#a5b8f3] transition-colors duration-200"
      data-name="테스트 시작하기 버튼"
      onClick={onStartClick}
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-14 items-center justify-center px-0 py-2.5 relative w-[317px]">
          <div className="font-['Pretendard:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#0c2c80] text-[20px] text-center text-nowrap tracking-[-0.5px]">
            <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
              시작하기
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute contents left-5 top-[276px]" data-name="영상설명">
      <div className="absolute flex h-[52px] items-center justify-center left-5 top-[276px] w-[317px]">
        <div className="flex-none scale-y-[-100%]">
          <div
            className="bg-[#00278c] h-[52px] w-[317px]"
            data-name="Rectangle"
          />
        </div>
      </div>
      <div
        className="absolute capitalize font-['Poppins:Medium',_sans-serif] leading-[0] not-italic text-[#ffffff] text-[19px] text-center text-nowrap top-[290px] translate-x-[-50%]"
        style={{ left: "calc(50% - 0.5px)" }}
      >
        <p className="block leading-[normal] whitespace-pre">
          먼저 영상을 보며 동작을 익혀주세요!
        </p>
      </div>
    </div>
  );
}

interface IiProps {
  onStartClick?: () => void;
}

function Ii({ onStartClick }: IiProps) {
  return (
    <div
      className="absolute contents left-0 top-0"
      data-name="테스트 창(낙상 위험도 검사 II)"
    >
      <div className="absolute bg-[#ffffff] h-[662px] left-0 rounded-[21px] shadow-[0px_4.32464px_51.8957px_12.9739px_rgba(0,0,0,0.09)] top-0 w-[358px]" />
      <Component onStartClick={onStartClick} />
      <div className="absolute capitalize font-['Poppins:Regular',_sans-serif] leading-[0] left-5 not-italic text-[#181e4b] text-[17.2986px] text-left top-[400px] tracking-[-0.518957px] w-[317px]">
        <IiBackgroundImage
          additionalClassNames={["mb-0", "tracking-[-0.48px]"]}
        >
          <span className="font-['Poppins:Bold',_sans-serif] not-italic">
            순서
          </span>
          <span className="adjustLetterSpacing"> </span>
        </IiBackgroundImage>
        <ol className="list-decimal" start="1">
          <li className="mb-0 ms-[25.948px]">
            <span className="adjustLetterSpacing leading-[1.75]">{`의자에 앉아 계세요. `}</span>
          </li>
          <li className="mb-0 ms-[25.948px]">
            <span className="adjustLetterSpacing leading-[1.75]">
              준비가 되면 시작하기 버튼을 눌러주세요.
            </span>
          </li>
          <li className="leading-[1.75] mb-0 ms-[25.948px]">
            <span className="tracking-[-0.48px]">안내에 따라 일어</span>선 후
            직선으로 3m를 걷고 돌아온 후 다시 앉아 주세요.
            <span className="adjustLetterSpacing tracking-[-0.48px]"> </span>
          </li>
          <li className="mb-0 ms-[25.948px]">
            <span className="adjustLetterSpacing leading-[1.75]">
              완료하기 버튼을 눌러주세요.
            </span>
          </li>
        </ol>
      </div>
      <div className="absolute capitalize font-['Poppins:Regular',_sans-serif] leading-[0] left-5 not-italic text-[#181e4b] text-[17.2986px] text-left top-[339px] tracking-[-0.518957px] w-[317px]">
        <IiBackgroundImage>
          <span className="font-['Poppins:Bold',_sans-serif] not-italic tracking-[-0.48px]">
            소요 시간
          </span>
          <span className="tracking-[-0.48px]">{` : 약 `}</span>10~15초
          <span className="tracking-[-0.48px]">
            <br />
          </span>
          <span className="font-['Poppins:Bold',_sans-serif] not-italic tracking-[-0.48px]">
            준비물 :
          </span>
          <span className="tracking-[-0.48px]">{` 의자 1개, `}</span>3
          <span className="adjustLetterSpacing tracking-[-0.48px]">
            m 걷기 공간
          </span>
        </IiBackgroundImage>
      </div>
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat h-[193px] left-5 rounded-tl-[21px] rounded-tr-[21px] top-[83px] w-[317px]"
        data-name="동작 영상"
        style={{ backgroundImage: `url('${img}')` }}
      />
      <Component1 />
      <div className="absolute capitalize font-['Volkhov:Bold',_sans-serif] font-bold leading-[0] left-8 not-italic text-[#00278c] text-[30px] text-left text-nowrap top-[27px]">
        <p className="block leading-[normal] whitespace-pre">
          낙상 위험도 검사 II
        </p>
      </div>
    </div>
  );
}

interface FallRiskTest2Props {
  onStartClick?: () => void;
}

export default function FallRiskTest2({ onStartClick }: FallRiskTest2Props) {
  return (
    <div
      className="bg-[#d3d3d3] overflow-clip relative rounded-[21px] size-full"
      data-name="Fall Risk Test2"
    >
      <Ii onStartClick={onStartClick} />
    </div>
  );
}