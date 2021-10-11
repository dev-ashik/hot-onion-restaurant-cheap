import React from "react";
import { useForm } from "react-hook-form";
import "./Userdetails.css";

const Userdetails = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="userDetail" onSubmit={handleSubmit(onSubmit)}>
      <h5 className="edit-detail">Edit Delivery Detils</h5>

      <input
        name="delivery"
        defaultValue="Deliver to door"
        ref={register({ required: true })}
        placeholder="Delivery to door"
      />
      {errors.delivery && <span className="error">This field is required</span>}

      <input
        name="road"
        defaultValue=""
        ref={register({ required: true })}
        placeholder="Road Number"
      />
      {errors.road && <span className="error">Road number is required</span>}

      <input
        name="floor"
        ref={register({ required: true })}
        placeholder="Flat, suite or floor"
      />
      {errors.floor && <span className="error">flat or floor is required</span>}

      <input
        name="name"
        ref={register({ required: true })}
        placeholder="Business Name"
      />
      {errors.name && <span className="error">Name is required</span>}

      <input
        name="instructor"
        ref={register({ required: true })}
        placeholder="Add delivery instructor"
      />
      {errors.instructor && (
        <span className="error">instructor is required</span>
      )}

      <input className="userDetailsSubmitButton" type="submit" value="Save & Continue"/>
    </form>
  );
};

export default Userdetails;
