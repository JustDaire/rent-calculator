"use client";

import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, InputNumber } from "antd";
import { useState } from "react";
import { calculateRent, RentSplit } from "../helpers";

export default function RentForm() {
  const [rent, setRent] = useState(1200);
  const [tenants, setTenants] = useState([{ salary: 1000 }, { salary: 500 }]);
  const [calculatedRent, setCalculatedRent] = useState<string[]>([]);

  const calculate = () => {
    const total = tenants.reduce(
      (acc, currentValue) => acc + currentValue.salary,
      0
    );

    const output = calculateRent(rent, total, tenants);
    setCalculatedRent([...output]);
  };

  const AddTenantButton = () => {
    const add = () => {
      console.log("Adding tenant");

      setTenants([
        ...tenants,
        {
          salary: 0,
        },
      ]);
    };
    return (
      <Form.Item>
        <Button
          type="dashed"
          onClick={() => add()}
          style={{ width: "100%" }}
          icon={<PlusOutlined />}
          size="large"
        >
          Add field
        </Button>
      </Form.Item>
    );
  };

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
              onChange={(value) => setRent(value ?? 0)}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <TenantInputs />

          <AddTenantButton />

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
