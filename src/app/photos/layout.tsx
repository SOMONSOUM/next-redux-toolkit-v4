import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";


export default function PhotosLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <div className="container p-0">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}