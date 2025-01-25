import connectedDB from '@/configs/DB';
import SkillsModel from '@/model/Skills';
import SoftSkillsModel from '@/model/SoftSkills';
import { Suspense } from 'react';
import Skill from '@/components/module/Skill';
import SoftSkill from '@/components/module/SoftSkill';
import { SkillsResponseType } from '@/components/template/SkillsP';
import { SoftSkillsResponseType } from '@/components/template/SoftSkillsP';

export const revalidate = 60; // کش به مدت 60 ثانیه

export default async function Skills() {
  await connectedDB();

  const skillsPromise = SkillsModel.find({}, 'name cover mastery');
  const softSkillsPromise = SoftSkillsModel.find({}, 'name mastery');

  const skills = await skillsPromise;
  const softSkills = await softSkillsPromise;

  return (
    <div className="flex flex-col mx-5 py-10 gap-y-3">
      <Suspense fallback={<div>در حال بارگذاری مهارت‌ها...</div>}>
        <SkillsSection skills={skills} />
      </Suspense>
      <Suspense fallback={<div>در حال بارگذاری مهارت‌های نرم...</div>}>
        <SoftSkillsSection softSkills={softSkills} />
      </Suspense>
    </div>
  );
}

function SkillsSection({ skills }: { skills: SkillsResponseType[] }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div style={{ width: '400px', position: 'relative' }}>
        {skills.map((skill) => (
          <Skill skill={skill} key={skill._id} />
        ))}
      </div>
    </div>
  );
}

function SoftSkillsSection({ softSkills }: { softSkills: SoftSkillsResponseType[] }) {
  return (
    <div className="mt-5">
      <div className="border-b-2 border-blue-400">
        <h2 className="font-DanaBold pb-1 text-xl">مهارت های نرم</h2>
      </div>
      <div className="mt-10 flex justify-center gap-small flex-wrap">
        {softSkills.map((softSkill) => (
          <SoftSkill softSkill={softSkill} key={softSkill._id} />
        ))}
      </div>
    </div>
  );
}
