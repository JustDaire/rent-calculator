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
  return (
    <div className="flex items-center gap-4">
      <div>
        <h1>Rent Form</h1>

        <Form layout="vertical">
          <Form.Item label="Monthly Rent">
            <InputNumber
              size="large"
              prefix="€"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <TenantInputs />

}
          <Button
            size="large"
            type="primary"
            onClick={calculate}
            style={{ width: "100%" }}
          >
            Calculate
          </Button>
        </Form>
      </div>
      <div className="justify-self-end">
        <RentSplit items={calculatedRent} />
      </div>
    </div>
  );
}
