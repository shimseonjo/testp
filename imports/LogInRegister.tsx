import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string[];
};

function Wrapper({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <div
      className={clsx("absolute contents left-[77px]", additionalClassNames)}
    >
      {children}
    </div>
  );
}

function Group54() {
  return (
    <Wrapper additionalClassNames={["top-[616px]"]}>
      <div className="absolute bg-[#2260ff] h-[45px] left-[77px] rounded-[30px] top-[616px] w-[207px]" />
    </Wrapper>
  );
}

function Group92() {
  return (
    <Wrapper additionalClassNames={["top-[668px]"]}>
      <div className="absolute bg-[#cad6ff] h-[45px] left-[77px] rounded-[30px] top-[668px] w-[207px]" />
    </Wrapper>
  );
}

export default function LogInRegister() {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-[30px] size-full"
      data-name="Log in/register"
    >
      <div className="absolute h-[800px] left-0 top-0 w-[360px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 360 800"
        >
          <path
            d="M0 0H360V800H0V0Z"
            fill="var(--fill-0, #ECF1FF)"
            id="Rectangle 70"
          />
        </svg>
      </div>
      <Group54 />
      <Group92 />
      <div className="absolute capitalize flex flex-col font-['Abhaya_Libre_ExtraBold:Regular',_sans-serif] h-3.5 justify-center leading-[0] left-[180px] not-italic text-[#2260ff] text-[24px] text-center top-[692px] tracking-[-0.24px] translate-x-[-50%] translate-y-[-50%] w-[162px]">
        <p className="adjustLetterSpacing block leading-[normal]">데모버전</p>
      </div>
      <div className="absolute capitalize flex flex-col font-['SUIT_Variable:SemiBold',_sans-serif] h-3.5 justify-center leading-[0] left-[180px] not-italic text-[#ffffff] text-[24px] text-center top-[640px] tracking-[2.4px] translate-x-[-50%] translate-y-[-50%] w-[162px]">
        <p className="adjustLetterSpacing block leading-[normal]">로그인</p>
      </div>
      <div className="absolute capitalize flex flex-col font-['League_Spartan:Thin',_sans-serif] font-thin h-[34px] justify-center leading-[0] left-[182.5px] text-[#4378ff] text-[25px] text-center top-[383px] translate-x-[-50%] translate-y-[-50%] w-[215px]">
        <p className="block leading-[normal]">Walk Safe, Live Smart</p>
      </div>
      <div className="[text-shadow:rgba(21,33,167,0.25)_0px_4px_4px] absolute capitalize flex flex-col font-['Lilita_One:Regular',_sans-serif] h-[78px] justify-center leading-[0] left-[34px] not-italic text-[#4378ff] text-[55px] text-left top-[333px] translate-y-[-50%] w-[292px]">
        <p className="block leading-[normal]">bODYFENCE</p>
      </div>
      <div className="absolute capitalize flex flex-col font-['League_Spartan:SemiBold',_sans-serif] font-semibold h-2 justify-center leading-[0] left-[180px] text-[#2260ff] text-[12px] text-center top-[298px] translate-x-[-50%] translate-y-[-50%] w-[142px]">
        <p className="block leading-[normal]">WALKer HOLIC</p>
      </div>
    </div>
  );
}