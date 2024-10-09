export default function Home() {
  return (
    <div className="text-sm md:text-xl">
      <div className="flex items-center justify-center mb-10">
        <div className="bg-blue-400/40 w-[300px] p-4 text-center md:p-5 md:w-[620px]">
          ウィンドウ幅に対して幅が変化します
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center max-sm:flex-col">
        <div className="bg-green-400/40 w-[300px] h-[113px] p-10 text-center m-2">
          ウィンドウ幅に応じて
        </div>

        <div className="w-full block md:hidden"></div>

        <div className="flex-col items-center justify-center m-1">
          <div className="bg-red-400/40 w-[300px] p-3 text-center m-2">
            並び替えを
          </div>
          <div className="bg-yellow-400/40 w-[300px] p-3 text-center m-2">
            します
          </div>
        </div>
      </div>

      <div className="mt-10 mb-40 flex flex-wrap items-center justify-center p-3 text-center">
        <div className="mb-3">その他、並べ列数を可変できます</div>
        <div className="w-full"></div>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-8">
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
          <div className="bg-blue-400/40 h-[180px] w-[100px]"></div>
        </div>
      </div>
    </div>
  );
}
