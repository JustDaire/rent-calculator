import { useState } from "react";
export default function RentForm() {
  const [rent, setRent] = useState(1200);
  const [tenants, setTenants] = useState([{ salary: 1000 }, { salary: 500 }]);
  const [calculatedRent, setCalculatedRent] = useState<string[]>([]);
    return (
        <div>
            <h1>Rent Form</h1>
        </div>
    )
}