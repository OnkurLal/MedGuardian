import React, { useState } from "react";
import { useCreateDoctorMutation } from '../store/doctorsApi';
import doctorImage from '../assets/doctor-web.jpg';

function CreateDoctor() {

    const emptyFields = {
        "full_name": "",
        "specialty": "",
        "phone": "",
        "address": ""
    }
    const [formData, setFormData] = useState(emptyFields)
    const [doctor] = useCreateDoctorMutation();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    async function handleSubmit(e) {
        e.preventDefault();
        const data = { ...formData }
        await doctor(data);
        setFormData(emptyFields);

    }

    return (
        <section className="container d-flex flex-row align-items-start mt-5">
            <div className="w-50 px-5 d-flex flex-column align-items-center">
                <img src={doctorImage} alt="Doctor sitting on a stool" className="img-fluid rounded shadow w-75" />
            </div>
            <div className="forms px-4 d-flex flex-column align-items-center w-50">
                <h1 className="mb-4">Add Doctor</h1>
                <form className="w-75" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="full_name"
                            required
                            id="full_name"
                            className="form-control"
                            value={formData.full_name}
                            onChange={handleChange}
                        />
                        <label htmlFor="full_name">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            placeholder="Specialty"
                            name="specialty"
                            id="specialty"
                            required
                            className="form-control"
                            value={formData.specialty}
                            onChange={handleChange}
                        />
                        <label htmlFor="specialty">Specialty</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="tel"
                            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                            placeholder="Phone Number (xxx-xxx-xxxx)"
                            name="phone"
                            id="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <label htmlFor="phone">Phone Number (xxx-xxx-xxxx)</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            id="address"
                            className="form-control"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="d-flex justify-content-center pt-3">
                        <button className="btn btn-primary px-5 py-2">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CreateDoctor;
