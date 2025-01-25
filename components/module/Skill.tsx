import { Progress } from "antd";
import Image from "next/image";
import { SkillsResponseType } from "../template/SkillsP";



export default function Skill({skill}:{ skill: SkillsResponseType}){

    return (
        <div className='text-white flex gap-x-3 items-center my-3'>

            <Image src={skill.cover} alt={`${skill.name}`} width={50} height={50} className='rounded-sm'/>

            <Progress percent={skill.mastery} size="default" status="active" />

        </div>
    )
}