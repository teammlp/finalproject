import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="7" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 9 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
export function Date(props) {
  return (
    <div className="form-group">
      <input type="date" dateFormat="MMMM d, yyyy h:mm aa" className="form-control" {...props} />
    </div>
  );
}
