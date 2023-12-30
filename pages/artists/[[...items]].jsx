import React from 'react';
import { useRouter } from 'next/router';

function Actor() {
    const router = useRouter();  // Access the Next.js router for route-related functionalities
    let dynamicItems = router.query.items;  // Retrieve the 'items' parameter from the current URL's query string

    // Dynamic extraction of IDs based on the length of the 'items' array
    let id1 = dynamicItems && dynamicItems.length > 0 ? router.query.items[0] : null;
    let id2 = dynamicItems && dynamicItems.length > 1 ? router.query.items[1] : null;
    let id3 = dynamicItems && dynamicItems.length > 2 ? router.query.items[2] : null;

    return (
        <>
            {id1 && <p>ID 1: {id1}</p>}
            {id2 && <p>ID 2: {id2}</p>}  
            {id3 && <p>ID 3: {id3}</p>}  

            {/* 
                If none of the IDs exist, show a loading message. 
                This can happen during initial page load or if no 'items' parameter is provided in the URL.
            */}
            {!id1 && !id2 && !id3 && <p>Loading...</p>}
        </>
    );
}

export default Actor;
