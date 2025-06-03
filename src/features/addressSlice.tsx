import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Field } from "../../pages/AddressSelector";

interface AddressState {
  formData: Record<string, string>;
  schemaFields: Field[] | null;
  fullAddress: string;
}

const initialState: AddressState = {
  formData: {
    province: "",
    district: "",
    ward: "",
    street: ""
  },
  schemaFields: null,
  fullAddress: ""
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<Record<string, string>>) {
      state.formData = action.payload;
    },
    setField(state, action: PayloadAction<{ name: string; value: string }>) {
        const { name, value } = action.payload;
        state.formData[name] = value;

        if (name === "province") {
            state.formData.district = "";
            state.formData.ward = "";
            state.fullAddress = "";
        } else if (name === "district") {
            state.formData.ward = "";
            state.fullAddress = "";
        }
 
    },
    setStreetAddress(state, action: PayloadAction<string>){
      state.formData.street = action.payload;
      const getLabel = (fieldName: string, id: string): string => {
        const field = state.schemaFields?.find(f => f.name === fieldName);
        if (!field) return "";
        
        if ('options' in field) {
            return field.options.find(opt => opt.id === id)?.label || "";
        } else if ('optionsMap' in field) {
            const map = field.optionsMap[state.formData[field.dependsOn]];
            return map?.find(opt => opt.id === id)?.label || "";
        }

        return "";
      };

      const provinceLabel = getLabel("province", state.formData.province);
      const wardLabel = getLabel("district", state.formData.district);
      const streetLabel = getLabel("ward", state.formData.ward);

      state.fullAddress = [state.formData.street, streetLabel, wardLabel, provinceLabel].filter(Boolean).join(", ");
    },
    setSchemaFields(state, action: PayloadAction<Field[] | null>) {
      state.schemaFields = action.payload;
    },
    resetAddress(state) {
      state.formData = {
        province: "",
        district: "",
        ward: "",
        street: "",
      };
      state.fullAddress = '';
    },
  },
});

export const { setFormData, setField, setSchemaFields, setStreetAddress, resetAddress } = addressSlice.actions;
export default addressSlice.reducer;

