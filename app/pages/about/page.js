const About = () => {
  return (
    <div className="w-2/2 h-screen">
      <h2 className="text-white font-extrabold text-7xl text-center mt-40">
        AKATSUKI
      </h2>
      <p className="text-gray-300 m-16 mt-10 text-center">
        Akatsuki 暁 is a criminal organization made up of S-Class fugitive ninja
        and highly wanted by the ninja world. Their main objective is to collect
        all biju or "Tailed Creatures" for the purpose of dominating the world.
        Although initially Akatsuki only played a small role in Part I , but in
        Part II they have become the main antagonists of the series. Akatsuki
        members (at any given time) will not exceed ten members and they are
        listed as S-class fugitive ninja by their village. Its members always
        move in groups of two except Zetsu who acts as a spy or scout for the
        organization by using his unique abilities to the organization's
        advantage. each team must function well, or at least have to complete
        the given mission even if the members of each team have disputes between
        them. All the members of this organization rarely get together as seen
        at the end of Part I when one member states that it is their first
        meeting after the last meeting seven years ago. Akatsuki's network is
        very wide, covering several ninja countries with the help of their
        secret agents in many places. When a team manages to get the tailed
        creature as instructed, they need to immediately lock it up. All this is
        done in their secret fortress surrounded by various traps. This
        confinement process takes three days to complete.
      </p>

      <div
        className=" grid grid-cols-3 gap-20 px-24
       h-96"
      >
        <div className="border-white/[.6] border-4 rounded-3xl">
          <h4 className="text-red-500/[.7] text-center my-8 text-2xl font-bold">
            Main Objective
          </h4>
          <ul className="text-slate-300 text-sm list-outside list-disc text-left ml-10 mr-7 ">
            <li className="my-7">
              To attain the power by capturing all tailed beast.
            </li>
            <li>
              Obtain a large amount of money to support their organization.
            </li>
            <li className="my-7">
              Set up a mercenary group loyal only to Akatsuki.
            </li>
            <li>
              Build their reputation, they plan to accept any mission below the
              usual cost and operate off of the excess funds earned in the first
              part of their plan.
            </li>
          </ul>
        </div>
        <div className="border-white/[.6] border-4  rounded-3xl">
          <h4 className="text-red-500/[.7]  text-center my-7 text-2xl font-bold">
            Teams
          </h4>
          <ul className="text-gray-400 text-sm list-outside list-disc text-left ml-10 mr-7 ">
            <li className="my-5">
              <span className="text-base font-bold text-slate-300">
                Itachi & Kisame{" "}
              </span>{" "}
              ( to capture nine, eight & four tailed beast )
            </li>
            <li>
              {" "}
              <span className="text-base font-bold text-slate-300">
                Hidan & Kakuzu{" "}
              </span>
              ( to capture seven & two tailed beast )
            </li>
            <li className="my-5">
              <span className="text-base font-bold text-slate-300">
                {" "}
                Deidara & Sasori
              </span>{" "}
              ( to capture one tail beast )
            </li>
            <li>
              {" "}
              <span className="text-base font-bold text-slate-300">
                Pain & Konan{" "}
              </span>
              ( to capture six & nine tails )
            </li>
            <li className="mt-5">
              <span className="text-base font-bold text-slate-300">
                {" "}
                Black & White Zetsu{" "}
              </span>{" "}
              ( to give intel about the enemy )
            </li>
          </ul>
        </div>
        <div className="border-white/[.6] border-4  rounded-3xl">
          <h4 className="text-red-500/[.7]  text-center my-7 text-2xl font-bold">
            Achievements
          </h4>
          <ul className="text-slate-300 text-sm list-outside list-disc text-left ml-10 mr-7 ">
            <li className="mb-4">
              Pain the leader of ataksuki succesfully infiltrated the leaf
              village and destroyed it.
            </li>
            <li>Akatsuki captured all tailed beast except nine tails.</li>
            <li className="my-4">
              under the influence of obito and black zetsu they revived gedo
              statue.
            </li>
            <li>
              {" "}
              They succesfully managed to obtain the village hidden in the rain
              and rule over it.
            </li>
            <li className=" mt-4">
              Paths of pain killed one of the legendary sanin Jiraya.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
