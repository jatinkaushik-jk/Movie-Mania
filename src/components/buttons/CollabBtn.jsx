import { useState } from "react";
import CollabWindow from "../navigations/CollabWindow";

const CollabBtn = (props) => {

    const [isCollabOpen, setIsCollabOpen] = useState(false);

    const handleCollabClick = () => {
        setIsCollabOpen(true);
    };

    return (
        <>
            <div onClick={handleCollabClick} className={`bg-[--charcoal] text-center flex justify-center items-center text-white p-2 px-4 rounded hover:bg-[--charcoalLight] transition cursor-pointer ${props.className}`}><a href="#">LET&apos;s COLLAB</a></div>
            {isCollabOpen && <CollabWindow setState={setIsCollabOpen} />}
        </>
    )
}

export default CollabBtn