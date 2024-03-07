import Content from "@/components/Content/content";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";

export default function HomePage() {
  return (
    <div className="container p-0">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
