/*
 * @Author: Mark
 * @Date: 2024-08-27 17:52:40
 * @LastEditTime: 2024-08-27 18:14:08
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/views/Main/Home/components/content2/index.tsx
 */

import img1 from './images/1.png'
const Content2: React.FC = () => {
    return(
        <div className="Content2">
            <title className="lg:text-[56px] lg:text-[#2F3E46] font-semibold flex justify-center mb-14 ">Our Goals</title>
            <div className="step1 flex justify-left  items-center px-[135px]">
                <div className="flex justify-start  text-[28px] text-[#292f36] lg:w-[567px] lg:h-[108px]  ">
                    <img className=' size-10 mr-5' src={img1} alt=""   />
                    <span className='lg:w-[495px]'>
                        <p>Providing Custom </p>
                        <p>Solutions</p>
                    </span>
                </div>
                <div className="text-[24px] text-[#5e6472]  lg:w-[687px] lg:h-[108px]">Tailoring software solutions to meet the unique needs of our clients, helping them optimize business processes and increase efficiency.</div>
            </div>
        </div>
    )
}

export default Content2