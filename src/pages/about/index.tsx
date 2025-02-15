import { GetstartedBtnWhite } from "@/components/layout/btn/btn";
const IndexPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center text-center">
        <div className="mt-14 text-center">
          <h1 className="justify-center text-6xl m-auto font-bold text-center">
            Kamu Hebat!
          </h1>
        </div>
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
