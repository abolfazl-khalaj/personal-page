import { SoftSkillsType } from "@/model/SoftSkills";
import { Progress, ProgressProps } from "antd";
import Image from "next/image";


const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#108ee9',
    '100%': '#87d068',
  };

export default function SoftSkill({softSkill}:{softSkill:SoftSkillsType}){

    return (
        <div className='text-center mx-10'>
        <Progress type="dashboard" percent={softSkill.mastery} strokeColor={twoColors} />
        <p className='font-DanaMedium text-xl'>{softSkill.name} </p>
      </div>
    )
}