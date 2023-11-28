import { useGetPharmaciesQuery } from "../store/pharmacies";
import { Link } from "react-router-dom"

const PharmacyList = () => {
    const { data: pharmacies, isLoading } = useGetPharmaciesQuery();
    if (isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
    return (
        <>
            <div className="px-5">
                <h1 className="m-5 text-center">My Pharmacies</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pharmacies.map(pharmacy => {
                            return (
                                <tr key={pharmacy.id}>
                                    <td><Link to={`/pharmacies/${pharmacy.id}`}>{pharmacy.name}</Link></td>
                                    <td>{pharmacy.phone}</td>
                                    <td>{pharmacy.address}</td>
                                    <td>{pharmacy.website}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
        </>
    );
}

export default PharmacyList;