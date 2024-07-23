import { Link, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";

export default function PlacesPage() {
    return (
        <div>
            <AccountNav />
            <div className="text-center">
                List of all added places
                <br />
                    <Link className="inline-flex gap-1 bg-primary text-white py-2 px-2 rounded-full" to={'/account/places/new'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    {/* Add New Place */}
                    </Link>
                </div>
        </div>
    )
}