import { useEffect, useState } from "react";
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";
import axios from "axios";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";

export default function PlacesFormPage() {
    const {id} = useParams();

    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/places/'+id).then(response => {
            const {data} = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuests(data.maxGuests);
        });
    }, [id]);

    function inputHeader(text){
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }

    function inputDescription(text){
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        );
    }

    function preInput(header, description) {
        return (
            <>
            {inputHeader(header)}
            {inputDescription(description)}
            </>
        );
    }

    async function savePlace(ev) {
        ev.preventDefault();
        const placeData = {
            title, address, addedPhotos, 
            description, perks, extraInfo, 
            checkIn, checkOut, maxGuests
        };
        if (id) {
            await axios.put('/places', {
                id, ...placeData
            });
            setRedirect(true);
        } else {
            await axios.post('/places', placeData);
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }
    
    return (
                <div>
                    <AccountNav />
                    <form onSubmit={savePlace}>
                        {preInput('Title', 'Tell us about your home')}
                        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example: My apt"/>
                        {preInput('Address', 'Confirm your location')}
                        <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="pin your location"/>
                        {preInput('Photos', 'Add some photos of your place')}
                        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                        
                        {preInput('Description', 'Tell us more about your place')}
                        <textarea value={description} onChange={ev => setDescription(ev.target.value)}/>

                        {preInput('Perks', 'Tell guests what your place has to offer')}
                        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                        <Perks selected={perks} onChange={setPerks}  />
                        </div>
                        {preInput('Share some basics about your place', 'Add more details here')}
                        <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
                        
                        {preInput('Check-in, Check-out and Max guests', 'Rules etc.')}
                        <div className="grid gap-2 sm:grid-cols-3">
                            <div>
                                <h3 className="mt-2 -mb-1">Check-in time</h3>
                                <input type="text" 
                                value={checkIn} 
                                onChange={ev => setCheckIn(ev.target.value)} placeholder="14:00"/>
                            </div>

                            <div>
                            <h3 className="mt-2 -mb-1">Check-out time</h3>
                            <input type="text" 
                            value={checkOut} 
                            onChange={ev => setCheckOut(ev.target.value)} placeholder="12:00"/>
                            </div>

                            <div>
                            <h3 className="mt-2 -mb-1">Maximum number of guests</h3>
                            <input type="number" 
                            value={maxGuests} 
                            onChange={ev => setMaxGuests(ev.target.value)} placeholder="2"/>
                            </div>
                        </div>
                        <button className="primary my-4">Save</button>

                        
                    </form>
                </div>
    );
}