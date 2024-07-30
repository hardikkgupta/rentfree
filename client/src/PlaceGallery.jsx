import Image from "./Image";
import { useState } from "react";

export default function PlaceGallery({place}) {

    const [showAllPhotos, setShowAllPhotos] = useState(false);

    if (showAllPhotos) {
        return (
            <div className="absolute inset-0 bg-white min-h-screen">
                <div className="p-8 grid gap-4">
                    <div>
                        <h2 className="text-2xl mr-48 ml-4">Photos of {place.title}</h2>
                        <button onClick={() => setShowAllPhotos(false)} className="fixed right-8 top-8 flex gap-1 py-2 px-4 rounded-2xl bg-white text-black shadow shadow-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        Close photos</button>
                    </div>
                {place?.photos?.length > 0 && place.photos.map(photo => (
                    <div className="w-2/3">
                        <Image src={photo}  className="w-full h-auto object-cover ml-4" />
                    </div>
                ))}
                </div>      
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden" style={{maxWidth:'1200px', maxHeight:'800px', margin: '0 auto'}}>
                <div>
                    {place.photos?.[0] && (
                        <div>
                            <Image onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={place.photos[0]} alt=""/>
                        </div>
                    )}
                </div>
                <div className="grid gap-0">
                {place.photos?.[1] && (
                        <Image onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={place.photos[1]} alt=""/>
                    )}

                <div className="overflow-hidden">
                {place.photos?.[2] && (
                        <Image onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2" src={place.photos[2]} alt=""/>
                    )}
                </div>
                </div>
            </div>
            <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

                Show more photos
                </button>
            </div>
    );
}
