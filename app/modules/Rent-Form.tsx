"use client";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
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
          Add tenant
        </Button>
      </Form.Item>
    );
  };

  const TenantInputs = () => {
    function remove(index: number): void {
      const newTenants = [...tenants];
      newTenants.splice(index, 1);
      setTenants(newTenants);
    }

    const formLabel = (idx: number) => {
      return (
        <div className="flex justify-between w-full test2">
          <span>Tenant {idx + 1} Salary</span>
          {RemoveTenant(idx)}
        </div>
      );
    };

    const RemoveTenant = (index: number) => {
      return tenants.length > 1 ? (
        <MinusCircleOutlined
          className="dynamic-delete-button"
          onClick={() => remove(index)}
        />
      ) : null;
    };

    return tenants.map((tenant, index) => (
      <Form.Item key={index} label={formLabel(index)} className="w-full test">
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
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 content-stretch place-content-stretch">
      <div className="col">
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
      <div className="col flex items-stretch min-h-full self-center border border-gray-200 rounded-md">
        <RentSplit items={calculatedRent} />
      </div>
    </div>
  );
}
