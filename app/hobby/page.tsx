import Link from "next/link";

const Hobby = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-lime-200 gap-5">
      <div className="text-5xl underline underline-offset-[12px]">My Hobby</div>
      <div className="flex gap-5">
        <div className="w-52 rounded overflow-hidden shadow-lg bg-yellow-300">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">スポーツ</div>
            <div className="text-gray-700 text-base">
              <li>ジム</li>
              <li>ランニング</li>
            </div>
          </div>
        </div>
        <div className="w-52 rounded overflow-hidden shadow-lg bg-yellow-300">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">アニメ</div>
            <div className="text-gray-700 text-base">
              <li>葬送のフリーレン</li>
            </div>
          </div>
        </div>
        <div className="w-52 rounded overflow-hidden shadow-lg bg-yellow-300">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">推し言語・ライブラリ（曖昧）</div>
            <div className="text-gray-700 text-base">
              <li>React</li>
              <li>Java</li>
            </div>
          </div>
        </div>
      </div>
      <Link href="/">Homeへ</Link>
    </div>
  );
};

export default Hobby;