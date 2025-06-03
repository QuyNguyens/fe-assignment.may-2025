import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { JSONHighlight } from "./JsonHightLight";
import { AddressSelector } from "./AddressSelector";
import { useDispatch, useSelector } from "react-redux";
import { setSchemaFields } from "../features/addressSlice";
import type { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";
type FieldOption = {
  label: string;
  value: string;
};

type Field = {
  type: "text" | "email" | "password" | "number" | "radio" | "checkbox" | "submit";
  label: string;
  name?: string;
  placeholder?: string;
  options?: FieldOption[];
};

type FormSchema = {
  title?: string;
  fields: Field[];
};

const JsonFormRenderer: React.FC = () => {
  const [schemaInput, setSchemaInput] = useState<string>("");
  const [parsedSchema, setParsedSchema] = useState<FormSchema | null>(null);
  const parsedSchemaAddress = useSelector((state: RootState) => state.address.schemaFields);

  const [formData, setFormData] = useState<Record<string, any>>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRender = () => {
    try {
      const parsed: FormSchema = JSON.parse(schemaInput);
      const parsedAddress = JSON.parse(schemaInput);
      if(parsedAddress.type === "object" && Array.isArray(parsedAddress.fields)){
          dispatch(setSchemaFields(parsedAddress.fields));
      }else{
        dispatch(setSchemaFields(null));
      }

      setParsedSchema(parsed);
      setFormData({});
    } catch (err) {
      alert("Invalid JSON Schema");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    if (type === "checkbox") {
        setFormData((prev) => {
        const prevValues = prev[name] || [];
        return {
            ...prev,
            [name]: checked
            ? [...prevValues, value]
            : prevValues.filter((v: string) => v !== value),
        };
        });
    } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  const renderField = (field: Field, index: number) => {
    switch (field.type) {
      case "text":
      case "email":
      case "number":
      case "password":
        return (
          <div key={index} className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        );

      case "radio":
        return (
          <div key={index} className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <div className="flex gap-4">
              {field.options?.map((option, i) => (
                <label key={i} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name={field.name}
                    value={option.value}
                    onChange={handleChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        );

      case "checkbox":
        return (
          <div key={index} className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <div className="flex gap-4">
              {field.options?.map((option, i) => (
                <label key={i} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name={field.name}
                    value={option.value}
                    onChange={handleChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        );

      case "submit":
        return (
          <div key={index} className="flex justify-end">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-hover"
            >
              {field.label}
            </button>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="w-full min-h-screen bg-gray-50">
        <div className="p-2 bg-white">
          <button onClick={() => navigate('/')} className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-base16 rounded-md">back</button>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full flex justify-center items-center gap-6 mx-auto p-10">
              <div className="w-[35%] flex flex-col gap-5 p-5 bg-white rounded-md">
                  <h2 className="text-xl font-bold">Enter JSON Schema</h2>
                  <input
                      className="w-full border rounded p-3 font-mono text-sm"
                      placeholder="Paste JSON Schema here..."
                      value={schemaInput}
                      onChange={(e) => setSchemaInput(e.target.value)}
                  />
                  <div className="border rounded p-3 h-64 overflow-auto bg-gray-50 text-sm">
                      <JSONHighlight jsonString={schemaInput} />
                  </div>
                  <div className="flex justify-end">
                      <button
                          onClick={handleRender}
                          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-900"
                      >
                          Render Form
                      </button>
                  </div>
              </div>
              {parsedSchema && !parsedSchemaAddress &&
              (<div className="w-[35%] p-5 bg-white rounded-md">
                  <form onSubmit={handleSubmit} className="h-full flex flex-col gap-3">
                      <h3 className="text-xl font-bold mb-4 text-center">
                          {parsedSchema.title || "Form"}
                      </h3>
                      {parsedSchema.fields.map((field, index) =>
                          renderField(field, index)
                      )}
                  </form>
              </div>)}
              {
                  parsedSchemaAddress && 
                  <AddressSelector schemaFields={parsedSchemaAddress}/>
              }
          </div>
        </div>
    </div>
  );
};

export default JsonFormRenderer;
