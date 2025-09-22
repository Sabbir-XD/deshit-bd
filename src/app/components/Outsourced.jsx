import Image from "next/image";
import outS from "../../../public/pic/out.png";

export default function Outsourced() {
  return (
    <div className="mb-4 text-center">
      <h1 className="text-2xl font-bold">Outsourced Software Development Workflow</h1>
      <p className="w-7/12 mx-auto mt-4 ">
        Our Strategic Development Plan streamlines project execution enhances
        collaboration, and ensures timely delivery with flexible scaling, all
        while maintaining high-quality standards.
      </p>
      <div className="flex justify-center mt-10">
      <Image src={outS} alt="Logo" width={925} height={500} />
      </div>
    </div>
  );
}
