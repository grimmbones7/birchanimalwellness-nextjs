import Link from "next/link";
import type { NextPage } from "next";

const GoogleReviewSection: NextPage = () => {
  return (
    <div className="container w-3/4">
      <div className="flex w-full justify-center items-center">
        <Link href="https://g.page/r/CXTtwkxM2e6YEAg/review" className="w-full">
          <button className="btn bg-[#6b8e23] text-white w-full font-bold py-2 px-4 rounded shadow-lg hover:bg-[#5a7a1e] transition-colors duration-300">
            See More Testimonials on Google Reviews!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GoogleReviewSection;
