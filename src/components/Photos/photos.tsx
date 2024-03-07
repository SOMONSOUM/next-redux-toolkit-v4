"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function Photos() {
    const [selectedImage, setSelectedImage] = useState(null);

    const imageList = Array.from({ length: 5 }, (_, i) => `image-${i + 1}.jpg`);

    const openModal = (image: any) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="px-5 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {imageList.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg cursor-pointer animate__animated animate__zoomIn"
                        style={{ width: '100%', paddingBottom: '100%' }}
                        onClick={() => openModal(image)}
                    >
                        <Image
                            src={`/images/${image}`}
                            alt={`Image-${index + 1}`}
                            className='object-cover'
                            fill
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={closeModal}
                >
                    <div className="relative max-w-screen-md">
                        <Image
                            src={`/images/${selectedImage}`}
                            alt={`Full Image`}
                            layout="responsive"
                            width={800}
                            height={600}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
