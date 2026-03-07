import React from "react";

function ProfileImage ({src}) {
    return(
        <div>
            <img
             src= {src}
             alt="profile"
             
            />
        </div>
    )
}

export default ProfileImage;