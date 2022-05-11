import React, { useState, useEffect } from "react";
import Card from "../Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/Firebase-config";
import {  useHistory } from 'react-router-dom';

const TopDoctors = () => {
  let history = useHistory();
    const [topDoctors, setTopDoctors] = useState([]);
    
  
    useEffect(() => {
      const topDoctorsCollectionRef = collection(db, "top-search-doctors");
      const getTopDoctors = async () => {
        const data = await getDocs(topDoctorsCollectionRef);
        setTopDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        
      };
  
      getTopDoctors();
    }, []);
    return (
        <div className="cards" >
        {topDoctors.map((doctor) => {
          
          return (
            
            <div onClick={() => { history.push("/docprofile", { data: doctor }); }}>
              <Card 
                bordred={false}
                style={{ width: "300px" }}
                cover={<img src={doctor.image} alt="error"/>}
                title={
                  <div  style={{ display: "flex", justifyContent: "center" }}>
                    <h4>
                      {" "}
                      {doctor.name}
                      {<br />}
                      {<br />}
                      {doctor.description.split("of certifications")[0]}
                      {<br />}
                      {<br />}
                      Contact: {doctor.number}
                      {<br />}
                    </h4>
                  </div>
                }
              ></Card>
            </div>
          );
        })}
      </div>
    )
}

export default TopDoctors
