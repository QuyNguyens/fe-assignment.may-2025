import React, { useEffect, useState } from "react";
import type { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { resetAddress, setField, setStreetAddress } from "../features/users/addressSlice";
import ArrowDownIcon from '../assets/arrow-down-icon-gray.svg';
type Option = { id: string; label: string };

type BaseField = {
  label: string;
  name: string;
  type: "select";
};

type SelectField = BaseField & {
  options: Option[];
};

type DependentSelectField = BaseField & {
  dependsOn: string;
  optionsMap: {
    [key: string]: Option[];
  };
};

export type Field = SelectField | DependentSelectField;

interface AddressSelectorProps {
    schemaFields: Field[];
}

export const AddressSelector = ({schemaFields}: AddressSelectorProps) => {
    const fields: Field[] = schemaFields;
    const formData = useSelector((state: RootState) => state.address.formData);
    const fullAddress = useSelector((state: RootState) => state.address.fullAddress);

    const [streetValue, setStreetValue] = useState<string>(formData.street);

    const dispatch = useDispatch();

    useEffect(() =>{
      const timeOut = setTimeout(() =>{
        dispatch(setStreetAddress(streetValue));
      },1000);

      return () => clearTimeout(timeOut);
    },[streetValue, dispatch]);

    const districtOptions = React.useMemo(() => {
      const districtField = schemaFields.find(
          (f): f is DependentSelectField => f.name === "district" && "optionsMap" in f
      );
      if (!districtField) return [];
      return formData.province ? districtField.optionsMap[formData.province] || [] : [];
    }, [formData.province, schemaFields]);

    const wardOptions = React.useMemo(() => {
      const wardField = schemaFields.find(
        (f): f is DependentSelectField => f.name === "ward" && "optionsMap" in f
      );
      if (!wardField) return [];
      return formData.district ? wardField.optionsMap[formData.district] || [] : [];
    }, [formData.district, schemaFields]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      dispatch(setField({ name, value }));
    };

  return (
    <form className="flex w-80 flex-col p-5 gap-3 bg-white rounded shadow-sm">
      {fields.map((field) => {
        if (field.type !== "select") return null;

        let options: Option[] = [];

        if ("options" in field) {
          options = field.options;
        } else if (field.name === "district") {
          options = districtOptions;
        } else if (field.name === "ward") {
          options = wardOptions;
        }

        const isDisabled =
          "dependsOn" in field && !formData[field.dependsOn || ""];

        return (
          <div key={field.name} className="relative flex flex-col">
            <label
              htmlFor={field.name}
              className="mb-1 font-medium text-gray-700"
            >
              {field.name}
            </label>
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="appearance-none block w-full px-3 py-[10px] border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-sm font-normal pr-10"
              disabled={isDisabled}
            >
              <option value="">-- Select {field.name.toLowerCase()} --</option>
              {options.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
            <img className='pointer-events-none absolute top-[70%] right-3 w-[14px] h-[14px] text-gray-500 transform -translate-y-1/2' src={ArrowDownIcon} alt="" />
          </div>
        );
      })}
      <div className="">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Street Address
        </label>
        <input
          type="text"
          value={streetValue}
          placeholder="Enter your streetAddress"
          onChange={(e) => setStreetValue(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <p>
      {fullAddress ? fullAddress : 'Please enter your street address'}
      </p>
      <div className="flex justify-end">
        <button onClick={() =>dispatch(resetAddress())} className="px-5 py-2 text-white text-base16 bg-primary hover:bg-primary-hover font-medium rounded-lg">Reset</button>
      </div>
    </form>
  );
};
