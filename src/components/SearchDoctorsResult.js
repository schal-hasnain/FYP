import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {  useHistory } from 'react-router-dom';
import Card from "./Card";
import { db } from "../config/Firebase-config";
import { collection, getDocs } from "firebase/firestore";

function SearchDoctorsResult() {

    let history = useHistory();
    const [doctors, setDoctors] = useState([]);
    const location = useLocation();
    const { data } = location.state;
    const searchWord = data.speciality;
  
  
    useEffect(() => {
        const doctorsCollectionRef = collection(db, "doctors");
        const getDoctors = async () => {
          const data = await getDocs(doctorsCollectionRef);
          setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
        };
        
    
        getDoctors();
      }, []);

     

    return (
        <div className="cards" >
        {doctors.map((doctor) => {
            if (doctor.speciality === searchWord)
            {
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
                              Contact: {doctor.number}
                              {<br />}
                            </h4>
                          </div>
                        }
                      ></Card>
                    </div>
                  );
            }
          
          
        })}
      </div>
       
    )
}

export default SearchDoctorsResult
