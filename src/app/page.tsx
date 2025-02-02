import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionIntroTitle from "@/components/SectionIntroTitle";
import Tags from "@/components/Tags";
import TopmostHeader from "@/components/TopmostHeader";

export default function Home() {
  return (
    <div className="px-14">
      <TopmostHeader />
      <Navbar />
      <section className="flex flex-col gap-8">
        <SectionIntroTitle sectionTitle="Today's" />
       
      </section>

      <Button text="View All Products" classProps="bg-[purple]" />
      <div className="my-5"></div>
      <Tags text="-40%" />
      <div className="my-5"></div>


      <Footer />
    </div>
  );
}
