
import MyPhoto from '@/components/template/MyPhoto';
import connectedDB from '@/configs/DB';
import AboutMeModel from '@/model/AboutMe';
import SocialMediaModel from '@/model/SocialMedia';


export default async function Home() {

  await connectedDB()
  const aboutMe = await AboutMeModel.find()
  const socialMedias = await SocialMediaModel.find()
  
  
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center w-4/5 m-auto min-h-screen  gap-x-3">

      <div className="mb-5">
        <MyPhoto />
      </div>
      

      <div>

        <p>
          {aboutMe[0].introduction}
        </p>
        <div className="mt-4">
          <ul className="flex gap-x-3 items-center">
            {
              socialMedias?.map(social => (
                <li className="w-9" key={social._id}>
                  <div>
                      <a href={`${social.url}`}>
                          <img src={`${social.cover}`} alt="abolfazl khalaj" />
                      </a>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </div>
  );
}

