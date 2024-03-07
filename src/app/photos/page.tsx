import Photos from "@/components/Photos/photos";


export default function PhotosPage() {
    return (
        <>  <div className="px-5 pt-5       ">
            {/* <p className="text-xl font-bold text-[#2980B9] lg:text-2xl">My Gallery</p> */}
            <p className="text-2xl font-bold text-[#2980B9] lg:text-2xl inline-block border-b-[3px] border-[#2980B9]">My Gallery</p>
        </div>
            <Photos />
        </>
    );
}