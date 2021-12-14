import React from 'react';
import './card.css';

function Card(props) {
  console.log(props);
  const { title, style, bordred = false, children, cover } = props;
  return (
    <div className="card-sep">
    <div className={`card ${bordred ? 'bordred' : null}`} style={style}>
        <div> {cover} </div>
      {title && (
        <div className="card-title"> {title} </div>
      )}
      {children && ( 
      <div className="card-body">{children}</div>
      )}
    </div></div>
  );
}
  

export default Card;