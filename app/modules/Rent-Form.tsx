import { useState } from "react";
export default function RentForm() {
  const [rent, setRent] = useState(1200);
  const [tenants, setTenants] = useState([{ salary: 1000 }, { salary: 500 }]);
  const [calculatedRent, setCalculatedRent] = useState<string[]>([]);
    return (
  const TenantInputs = () => {
    return tenants.map((tenant, index) => (
      <Form.Item key={index} label={`Tenant ${index + 1} Salary`}>
        <InputNumber
          size="large"
          prefix="€"
          value={tenant.salary}
          onChange={(value) => {
            const newTenants = [...tenants];
            newTenants[index] = { salary: value ?? 0 };
            setTenants(newTenants);
          }}
          style={{ width: "100%" }}
        />
      </Form.Item>
    ));
  };
}