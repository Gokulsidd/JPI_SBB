"use client";
import { useFormik } from "formik";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Form = () => {
  const initialValues = {
    noOfUnits: "",
    unitAvgNRFC: "",
    totalNRFC: "",
    noOfTucks: "",
    noOfBuildings: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    enableReinitialize: true,
  });

  const handleInputChange = (e) => {
    formik.handleChange(e);
    const { name, value } = e.target;

    let updatedValues = { ...formik.values, [name]: value };

    if (name === 'noOfUnits' || name === 'unitAvgNRFC') {
      const noOfUnits = updatedValues.noOfUnits ? parseFloat(updatedValues.noOfUnits) : 0;
      const unitAvgNRFC = updatedValues.unitAvgNRFC ? parseFloat(updatedValues.unitAvgNRFC) : 0;
      updatedValues.totalNRFC = noOfUnits * unitAvgNRFC;
    }

    formik.setValues(updatedValues);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-5 my-2 w-[500px]">
      <div className="p-6 flex flex-col gap-y-5 md:border border-gray-200 rounded-md md:shadow-sm">
        <div className="flex flex-col gap-y-1">
          <Label className='text-[1rem]'>Number of units</Label>
          <Input
            id="noOfUnits"
            type="text"
            name="noOfUnits"
            onChange={handleInputChange}
            value={formik.values.noOfUnits}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <Label className='text-[1rem]'>Unit Average NRFC</Label>
          <Input
            id="unitAvgNRFC"
            type="text"
            name="unitAvgNRFC"
            onChange={handleInputChange}
            value={formik.values.unitAvgNRFC}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <Label className='text-[1rem]'>Total NRFC of project</Label>
          <Input
            id="totalNRFC"
            type="text"
            name="totalNRFC"
            readOnly
            value={formik.values.totalNRFC}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <Label className='text-[1rem]'>Number of tucks under garages</Label>
          <Input
            id="noOfTucks"
            type="text"
            name="noOfTucks"
            onChange={handleInputChange}
            value={formik.values.noOfTucks}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <Label className='text-[1rem]'>Number of Buildings</Label>
          <Input
            id="noOfBuildings"
            type="text"
            name="noOfBuildings"
            onChange={handleInputChange}
            value={formik.values.noOfBuildings}
          />
        </div>
        <Button variant='outline' type="submit">submit</Button>
      </div>
    </form>
  );
};

export default Form;
