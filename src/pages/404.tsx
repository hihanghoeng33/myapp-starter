import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-[1c1c1c] text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Oops! Sorry ye!</p>
      <p className="text-md mt-2">Dana wesbsite dikorupsi oke gas oke gas</p>
      <Link
        href="/"
        className="mt-5 px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition"
      >
        Kembali ke Home
      </Link>
    </div>
  );
};

export default Custom404;