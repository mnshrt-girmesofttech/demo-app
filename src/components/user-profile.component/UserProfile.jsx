import React from 'react';

function UserProfile(props) {
    const {name,age,address,fitnessReq} = props.user
    return (
        <div>

            <div>
                <h2>user Profile</h2>
            </div>
            <div>
               <div>
                  <span>Name:</span>
                  <span>{name}</span>
               </div>
               <div>
                  <span>Age:</span>
                  <span>{age}</span>
               </div>
               <div>
                  <span>Address:</span>
                  <span>{address}</span>
               </div>
               <div>
                  <span>Fitness Requirement:</span>
                  <span>{fitnessReq}</span>
               </div>
            </div>
        </div>
    )
}

export default UserProfile;
