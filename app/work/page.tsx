import Link from "next/link";

const Work = () => {
  return (
    <div className="flex flex-col min-h-screen items-center pt-10 bg-orange-200 gap-10">
      <div className="text-5xl underline underline-offset-[12px] text-black ">My Work</div>
      
      <div className="w-1/2 flex items-center justify-between border-2 border-solid border-black p-3 rounded-lg">
        <div className="text-xl gap-5">
        <div className="text-black text-2xl text-center">ー技術スタックー</div>
          <div>
            <div className="text-black text-xl">■Java</div>
            <p className="text-gray-500">新人研修でJavaを学習し、電卓を作ってそのままSpringの現場に。</p>
            <p className="text-gray-500">何もわからない状況で時間を過ごし次の現場でしっかり勉強</p>
          </div>
          <div>
            <div className="text-black text-xl">■Saas</div>
            <p className="text-gray-500">転職して、Saas開発を担当したがこういうのをやりたいんじゃないんだと駄々を捏ねてしまう</p>
          </div>
          <div>
            <div className="text-black text-xl">■React</div>
            <p className="text-gray-500">駄々を捏ねた結果、Reactを使った開発を行っています</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-between border-2 border-solid border-black p-3 rounded-lg">
        <div className="text-xl gap-5">
        <div className="text-black text-2xl text-center">ープロジェクトー</div>
          <div>
            <div className="text-black text-xl">■Springフレームワークへのリプレース</div>
            <p className="text-gray-500">テスト要員</p>
          </div>
          <div>
            <div className="text-black text-xl">■金融系の保守開発</div>
            <p className="text-gray-500">開発メンバー</p>
          </div>
          <div>
            <div className="text-black text-xl">■社内Web開発</div>
          <p className="text-gray-500">開発メンバー・・・だがチームリーダーくらいの行動できるくらいになれと言われて戦々恐々</p>
          </div>
        </div>
      </div>

      <Link href="/" className="text-black">Homeへ</Link>
    </div>
  );
};

export default Work;