"use client";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, InputNumber } from "antd";
import { useState } from "react";
import { calculateRent, RentSplit } from "../helpers";
import { Tenant } from "../Types";

const defaultTenants: Tenant[] = [{ salary: null }];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const testTenants: Tenant[] = [{ salary: 1000 }, { salary: 500 }];

export default function RentForm() {
  const [rent, setRent] = useState<number | null>(null);
  const [tenants, setTenants] = useState<Tenant[]>(defaultTenants);
  const [calculatedRent, setCalculatedRent] = useState<string[]>([]);

  const calculate = () => {
    const total = tenants.reduce(
      (acc, currentValue) => acc + (currentValue.salary ?? 0),
      0
    );

    const output = calculateRent(rent ?? 0, total, tenants as { salary: number }[]);
    setCalculatedRent([...output]);
  };

  const AddTenantButton = () => {
    const add = () => {
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

  const RemoveTenant = (index: number) => {
    const remove = (index: number) => {
      const newTenants = [...tenants];
      newTenants.splice(index, 1);
      setTenants(newTenants);
    };
    return tenants.length > 1 ? (
      <MinusCircleOutlined onClick={() => remove(index)} />
    ) : null;
  };

  const formLabel = (idx: number) => {
    return (
      <div className="flex justify-between w-full test2">
        <span>Tenant {idx + 1} Salary</span>
        {RemoveTenant(idx)}
      </div>
    );
  };

  const handleInputChange = (value: number | null, index: number) => {
    const newInvoiceItems = [...tenants];
    const invoiceItem = newInvoiceItems[index];
    if (invoiceItem) {
      invoiceItem.salary = value ?? 0;
    }
    console.log("newInvoiceItems", newInvoiceItems);

    setTenants([...newInvoiceItems]);
  };

/* eslint-disable @typescript-eslint/no-unused-vars */
  const testValue = (e: number, index: number) => {
    console.log("index", index);
    console.log("value", e);
    const newTenants = [...tenants];
    newTenants[index] = { salary: e };
    console.log("newTenants", newTenants);
    console.log("newTenants", newTenants);
    setTenants(newTenants);
  };

/* eslint-disable @typescript-eslint/no-unused-vars */
  const TenantInputs = () => {
    return tenants.map((tenant, index) => (
      <Form.Item key={index} label={formLabel(index)} className="w-full">
        <InputNumber
          autoFocus={true}
          key={tenant.salary}
          size="large"
          prefix="€"
          value={tenant.salary}
          // onChange={(value) => testValue(value ?? 0, index)}
          // onChange={(value) => setRent(value ?? 0)}
          // onChange={(e) => {
          //   testValue(index, e);
          // }}
          onChange={(e) => {
            handleInputChange(e, index);
          }}
          style={{ width: "100%", color: "#171717" }}
        />
      </Form.Item>
    ));
  };
  
/* eslint-disable @typescript-eslint/no-unused-vars */
  const TenantInput = ({ index }: { index: number }) => {
    const tenant = tenants[index];
    return (
      <Form.Item key={index} label={formLabel(index)} className="w-full">
        <InputNumber
          autoFocus={true}
          key={tenant.salary}
          size="large"
          prefix="€"
          value={tenant.salary}
          // onChange={(value) => testValue(value ?? 0, index)}
          // onChange={(value) => setRent(value ?? 0)}
          // onChange={(e) => {
          //   testValue(index, e);
          // }}
          onChange={(e) => {
            handleInputChange(e, index);
          }}
          style={{ width: "100%", color: "#171717" }}
        />
      </Form.Item>
    );
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
              style={{ width: "100%", color: "#171717" }}
            />
          </Form.Item>

          {/* <TenantInputs /> */}

          {tenants.map((tenant, index) => (
            // <TenantInput key={index} index={index} />
            <Form.Item key={index} label={formLabel(index)} className="w-full">
              <InputNumber
                autoFocus={true}
                key={tenant.salary}
                size="large"
                prefix="€"
                value={tenant.salary}
                onChange={(e) => {
                  handleInputChange(e, index);
                }}
                style={{ width: "100%", color: "#171717" }}
              />
            </Form.Item>
          ))}

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
