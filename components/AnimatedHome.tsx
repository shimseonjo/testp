'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Home from '../imports/Home';

// Animation variants for different elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const elementVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoothness
    }
  }
};

const chatbotVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 10
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const greetingVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    y: 15
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 25
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function AnimatedHome() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full h-full"
    >
      {/* Background - appears first */}
      <motion.div
        variants={elementVariants}
        className="absolute inset-0"
      >
        <div className="bg-[#ffffff] overflow-clip relative rounded-[30px] size-full">
          <div
            className="absolute bg-gradient-to-b from-[#ecf1ff] h-[198px] left-0 to-[#ffffff] top-7 w-[360px]"
            data-name="배경1"
          />
          <div
            className="absolute bg-[#cad6ff] h-[588px] left-0 top-[212px] w-[360px]"
            data-name="배경2"
          />
          <div className="absolute bg-[rgba(226,234,255,0.66)] h-7 left-0 top-0 w-[360px]" />
        </div>
      </motion.div>

      {/* Header elements - time, icons, branding */}
      <motion.div
        variants={elementVariants}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute capitalize flex flex-col font-['League_Spartan:Medium',_sans-serif] font-medium h-3.5 justify-center leading-[0] left-[27px] text-[#000000] text-[13px] text-left top-4 translate-y-[-50%] w-[30px]">
          <p className="block leading-[normal]">16:04</p>
        </div>
        
        <div className="[text-shadow:rgba(21,33,167,0.25)_0px_4px_4px] absolute capitalize flex flex-col font-['Lilita_One:Regular',_sans-serif] h-[33px] justify-center leading-[0] left-[22px] not-italic text-[#2260ff] text-[19px] text-left top-[62.5px] tracking-[0.95px] translate-y-[-50%] w-[131px]">
          <p className="adjustLetterSpacing block leading-[normal] [-webkit-text-stroke:1px_#00278C]">bODYFENCE</p>
        </div>
        
        <div className="absolute capitalize flex flex-col font-['League_Spartan:Thin',_sans-serif] font-thin h-3.5 justify-center leading-[0] left-[140px] text-[#4378ff] text-[12px] text-left top-[68px] translate-y-[-50%] w-[120px]">
          <p className="block leading-[normal]">Walk Safe, Live Smart</p>
        </div>
      </motion.div>

      {/* Greeting text with special animation */}
      <motion.div
        variants={greetingVariants}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute capitalize flex flex-col font-['Noto_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] left-[195.5px] text-[#00278c] text-[30px] text-center text-nowrap top-[120.5px] translate-x-[-50%] translate-y-[-50%]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          <p className="block leading-[normal] whitespace-pre">김순자님!</p>
        </div>
        <div className="absolute font-['Noto_Emoji:Light',_sans-serif] font-light leading-[0] left-9 text-[#00278c] text-[20px] text-left text-nowrap top-[109px]">
          <p className="block leading-[35px] whitespace-pre">안녕하세요</p>
        </div>
      </motion.div>

      {/* Chatbot character with center-out animation */}
      <motion.div
        variants={chatbotVariants}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute bg-[51.22%_53.39%] bg-no-repeat h-[123px] left-[199px] top-[147.5px] w-[130px] contrast-[1.1] saturate-[1.05]"
          data-name="챗봇 이미지"
          style={{ 
            backgroundImage: "url('figma:asset/b4ee0de9f8346f4e87924d272abe20f7a15fc9e4.png')",
            backgroundSize: '125%',
            imageRendering: 'crisp-edges'
          }}
        />
      </motion.div>

      {/* Chat interface */}
      <motion.div
        variants={cardVariants}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 pointer-events-auto"
      >
        <div className="absolute bg-[#ffffff] h-[102px] left-[33px] rounded-[23px] top-[153px] w-[298px]">
          <div className="absolute border-[#00278c] border-[1.7px] border-solid inset-0 pointer-events-none rounded-[23px]" />
        </div>
        <div className="absolute font-['League_Spartan:Medium',_sans-serif] font-medium leading-[0] left-[60px] text-[#00278c] text-[17px] text-left text-nowrap top-60">
          <p className="block leading-[normal] whitespace-pre">
            워키를 불러보세요!
          </p>
        </div>
      </motion.div>

      {/* Card blocks with staggered animation - Test Mode */}
      <motion.div
        variants={cardVariants}
        transition={{ delay: 0.6 }}
        className="absolute inset-0 pointer-events-auto"
      >
        {/* Test Mode Card */}
        <div className="absolute h-[92px] left-[31px] top-[281px] w-[298px]">
          <div className="absolute bg-[#ffffff] border-[#3d6dea] border-[1.7px] border-solid rounded-[20px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.25)] inset-0" />
          <div className="absolute flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center leading-[0] left-[102px] text-[#00278c] text-[18px] text-center text-nowrap top-[317.5px] translate-x-[-50%] translate-y-[-50%]">
            <p className="block leading-[normal] whitespace-pre">테스트 모드</p>
          </div>
          <div className="absolute font-['League_Spartan:Medium',_sans-serif] font-medium leading-[0] left-[58px] text-[#00278c] text-[12px] text-left text-nowrap top-[340px]">
            <p className="block leading-[normal] whitespace-pre">
              낙상 위험 및 인지기능 검사
            </p>
          </div>
          <div className="absolute flex flex-col font-['League_Spartan:Medium',_sans-serif] font-medium justify-center leading-[0] left-[221.5px] text-[#00278c] text-[24px] text-center text-nowrap top-[325px] translate-x-[-50%] translate-y-[-50%]">
            <p className="block leading-[normal] whitespace-pre">88점</p>
          </div>
        </div>
      </motion.div>

      {/* Health Status & Walking Analysis */}
      <motion.div
        variants={cardVariants}
        transition={{ delay: 0.7 }}
        className="absolute inset-0 pointer-events-auto"
      >
        {/* Health Status Card */}
        <div className="absolute bg-[#ffffff] h-[134px] left-[31px] rounded-[20px] top-[389px] w-[140px]">
          <div className="absolute border-[#3d6dea] border-[1.7px] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.25)]" />
          <div className="absolute flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold h-4 justify-center leading-[0] left-[85.5px] text-[#00278c] text-[18px] text-center top-[416px] translate-x-[-50%] translate-y-[-50%] w-[95px]">
            <p className="block leading-[normal]">건강 상태</p>
          </div>
          <div className="absolute flex flex-col font-['League_Spartan:Medium',_sans-serif] font-medium h-[17px] justify-center leading-[0] left-[83px] text-[#00278c] text-[24px] text-center top-[488.5px] translate-x-[-50%] translate-y-[-50%] w-16">
            <p className="block leading-[normal]">86%</p>
          </div>
          <div className="absolute font-['League_Spartan:Medium',_sans-serif] font-medium leading-[0] left-[54px] text-[#00278c] text-[12px] text-left text-nowrap top-[502px]">
            <p className="block leading-[normal] whitespace-pre">
              건강 상태 매우 양호
            </p>
          </div>
        </div>

        {/* Walking Analysis Card */}
        <div className="absolute bg-[#ffffff] h-[134px] left-[189px] rounded-[20px] top-[389px] w-[140px]">
          <div className="absolute border-[#3d6dea] border-[1.7px] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.25)]" />
          <div className="absolute flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center leading-[0] left-[58.333%] text-[#00278c] text-[18px] text-center text-nowrap top-[50.75%]">
            <p className="block leading-[normal] whitespace-pre">보행 분석</p>
          </div>
          <div className="absolute font-['League_Spartan:Medium',_sans-serif] font-medium leading-[0] left-[57.5%] text-[#00278c] text-[12px] text-left text-nowrap top-[62.625%]">
            <p className="block leading-[normal] whitespace-pre">
              보행 안정성 낮은 상태
            </p>
          </div>
          <div className="absolute flex flex-col font-['League_Spartan:Medium',_sans-serif] font-medium justify-center leading-[0] left-[61.667%] text-[#00278c] text-[24px] text-center text-nowrap top-[59.375%]">
            <p className="block leading-[normal] whitespace-pre">46점</p>
          </div>
        </div>
      </motion.div>

      {/* Airbag Status & GPS */}
      <motion.div
        variants={cardVariants}
        transition={{ delay: 0.8 }}
        className="absolute inset-0 pointer-events-auto"
      >
        {/* Airbag Status Card */}
        <div className="absolute bg-[#ffffff] h-[134px] left-[31px] rounded-[20px] top-[537px] w-[140px]">
          <div className="absolute border-[#3d6dea] border-[1.7px] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.25)]" />
          <div className="absolute flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center leading-[0] left-[13.333%] text-[#00278c] text-[18px] text-center top-[69.5%]">
            <p className="block leading-[normal]">에어백 상태</p>
          </div>
          <div className="absolute flex flex-col font-['League_Spartan:Medium',_sans-serif] font-medium justify-center leading-[0] left-[14.722%] text-[#00278c] text-[24px] text-center top-[78.75%]">
            <p className="block leading-[normal]">100%</p>
          </div>
          <div className="absolute font-['League_Spartan:Medium',_sans-serif] font-medium leading-[0] left-[15.556%] text-[#00278c] text-[12px] text-left top-[81.375%]">
            <p className="block leading-[normal]">펌웨어 매우 안정적</p>
          </div>
        </div>

        {/* GPS Card */}
        <div className="absolute bg-[#ffffff] h-[134px] left-[189px] rounded-[20px] top-[537px] w-[140px]">
          <div className="absolute border-[#3d6dea] border-[1.7px] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.25)]" />
          <div className="absolute flex flex-col font-['League_Spartan:Bold',_sans-serif] font-bold justify-center leading-[0] left-[57.778%] text-[#00278c] text-[18px] text-center top-[69.25%]">
            <p className="block leading-[normal]">GPS 기능</p>
          </div>
          <div className="absolute flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] left-[58.611%] text-[#00278c] text-[24px] text-center text-nowrap top-[77%]">
            <p className="block leading-[normal] whitespace-pre text-[20px] font-bold">위치 찾기</p>
          </div>
          <div className="absolute font-['League_Spartan:Medium',_sans-serif] font-medium leading-[0] left-[59.167%] text-[#00278c] text-[12px] text-left text-nowrap top-[80.875%]">
            <p className="block leading-[normal] whitespace-pre">
              정상 위치 확인됨
            </p>
          </div>
        </div>
      </motion.div>

      {/* Emergency Contact Button */}
      <motion.div
        variants={cardVariants}
        transition={{ delay: 0.9 }}
        className="absolute inset-0 pointer-events-auto"
      >
        <div
          className="absolute bg-[#fb5959] h-10 rounded-[17px] left-[35px] top-[690px] w-[298px]"
        />
        <div className="absolute font-['League_Spartan:SemiBold',_sans-serif] font-semibold h-3 leading-[0] left-[46.044px] text-[#ffffff] text-[20px] text-left top-[687px] w-[184.62px]">
          <p className="block leading-[normal]">긴급 연락</p>
        </div>
      </motion.div>

      {/* Bottom Navigation - appears last and stays fixed */}
      <motion.div
        variants={elementVariants}
        transition={{ delay: 1.0 }}
        className="absolute inset-0 pointer-events-auto"
      >
        <div className="absolute h-12 left-[33px] top-[739px] w-[298px]">
          <div className="absolute bg-white rounded-[24px] inset-0" />
          <div className="absolute left-[22px] top-[12px] w-10 h-6 bg-[#2260ff] rounded-full flex items-center justify-center">
            {/* Home icon placeholder */}
            <div className="w-4 h-4 bg-white rounded-sm" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}