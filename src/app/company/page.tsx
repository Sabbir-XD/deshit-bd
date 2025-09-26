import BackgroundTitle from "@/components/layout/BackgroundTitle";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function Company() {
  return (
    <section>
      {/* Background Title */}
      <BackgroundTitle />

      {/* Company Intro */}
      <div className="w-11/12 lg:max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-[#141414] mt-5">
          DeshITBD
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#FA8370] mt-5 leading-snug">
          S I M P L I F Y I N G C O M P L E X I T Y T H R O U G H T E C H N O L
          O G Y
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-5 mb-5">
          <p className="text-base md:text-lg lg:text-2xl text-[#717171] leading-relaxed">
            We, DeshITbd is a mobile application development startup in
            Bangladesh. We can develop apps from sketch to workable apps and
            bring them to the marketplace like Google Play. We have a full-stack
            mobile application development team consisting of system analysts,
            programmers, testers, deployment specialists, and database
            engineers. We have already launched several apps successfully. We
            also have some software products and our clients are using them with
            satisfaction. You will find our product here and project here.
          </p>
          <Image
            src="/pic/company.png"
            alt="Company"
            width={375}
            height={245}
            className="mt-5 w-full max-w-sm lg:max-w-md h-auto object-contain"
          />
        </div>

        {/* Mission Section */}
        <div className="mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-[#141414]">
            Mission
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-6">
            <p className="text-base md:text-lg lg:text-2xl text-[#717171] leading-relaxed">
              Our mission is to transform ideas into digital products and enable
              organizations to leverage technology for betterment. Our priority
              is to deliver impactful digital solutions with superior user
              experience. We build such a solution that can accelerate the
              growth of your business.
            </p>
            <Image
              src="/pic/Mission.png"
              alt="Mission"
              width={375}
              height={245}
              className="mt-5 w-full max-w-sm lg:max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="bg-[#FA8370] py-10 mt-10">
        <div className="w-11/12 lg:max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            How we work
          </h1>
          <p className="text-base md:text-lg lg:text-2xl text-white mt-5 leading-relaxed">
            We believe in agile development. We manage our projects by following
            Scrum, the most popular widely practiced agile approach. Delivering
            working applications on budget, and on time is always our concern
            and Scrum enables us to manage our projects in such a way. Scope of
            flexibility and collaboration enable us to manage the resources
            effectively and deliver the quality product.
          </p>
          <div className="mt-6">
            <button className="bg-white text-[#FA8370] text-sm md:text-base px-6 py-2 rounded-full hover:opacity-90 transition">
              Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
