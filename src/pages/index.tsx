import illust from "@/img/Illustration.png";
import { GetstartedBtn } from "@/components/layout/btn/btn";
import { LearnMore } from "@/components/layout/btn/btn";
import { GetstartedBtnWhite } from "@/components/layout/btn/btn";
const IndexPage = () => {
  return (
    <>
      <div className="flex flex-row mt-28 ml-20 justify-items-center items-center gap-20">
        <div className="w-max ml-4 mt-3">
          <h1 className="text-white text-5xl font-bold">Learn to code with</h1>
          <h3 className="text-[#4CAF4F] text-5xl font-mono font-bold">
            {"{Arda}"}
          </h3>
          <p className="text-white mt-1 p-px">
            Start your journey to becoming a professional developer with <br />{" "}
            our intensive bootcamp program.{" "}
          </p>
          <GetstartedBtn />
          <LearnMore />
        </div>
        <img src={illust.src} alt="illust" className="ml-40 w-96" />
      </div>
      <div className="bg-green-500 h-[360px] mt-12 flex flex-col items-center">
        <div className="mt-16">
          <h1 className="font-bold m-auto text-3xl top-40 justify-center text-center">
            Ready to dive in? <br />
            Start you free trial today.
          </h1>
        </div>
        <div className="text-center mt-3 mb-5">
          <p>
            Join thousands of satisfied students and start your journey to <br />
            becoming a professional developer.
          </p>
        </div>
        <GetstartedBtnWhite />
      </div>
    </>
  );
};

export default IndexPage;
