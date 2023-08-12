import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className=" bg-black">
      <main className="lg:bg-[url('/images/footer-bg.svg')] bg-right bg-contain bg-no-repeat px-5 pt-5 lg:pt-10 pb-5">
        <div className="flex justify-center">
          <span className=" text-white text-sm font-spartanMedium text-center">
            Design inspiration from
            <Link
              href={"https://www.figma.com/community/file/1006095821656678611"}
              target="_blank"
              className=" text-sm font-spartanBold  text-pw-orange"
            >
              &nbsp;Akhil T J Portfolio Mockup Design{" "}
            </Link>
            <img
              src="/icons/figma.svg"
              alt=""
              className="w-5 h-5 animate-pulse inline-flex"
              loading="lazy"
            />
          </span>
        </div>
        <div className="flex items-center justify-center mt-5">
          <h2 className=" text-white text-sm font-spartanMedium text-center">
            All Rights Reserved © {year}
          </h2>
        </div>
      </main>
    </footer>
  );
}
