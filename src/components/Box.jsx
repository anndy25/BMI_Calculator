import React, { useState } from "react";
import { calculationBMIData } from "../Calculation";
export const Box = () => {
  const [Weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [BMI, setBMI] = useState(null);
  const [category, setCategory] = useState("");
  const [risk, setRisk] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    const { bmi, category, risk } = calculationBMIData(height, Weight);
    setBMI(bmi);
    setCategory(category);
    setRisk(risk);
  };
  const reset = () => {
    setCategory("");
    setHeight("");
    setWeight("");
    setBMI(null);
    setRisk("");
  };
  return (
    <>
      <div
        className=" container  d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <form onSubmit={calculateBMI}>
          <div className="row  m-2 py-2 shadow-lg p-3 mb-5 bg-body rounded">
            <h2
              className="text-center bg-primary  p-2 mb-4"
              style={{ color: "white" }}
            >
              BMI Calculator
            </h2>
            <div className="col-lg-6 col-sm-6 col-md-6 mb-3">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Height:
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Height in cm..."
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                  <div className="input-group-text">cm</div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Weight:
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Wight in kg."
                    value={Weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                  <div className="input-group-text">kg</div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Calculate
              </button>
              <button
                onClick={reset}
                type="reset"
                className="mx-2 btn btn-warning"
              >
                Reset
              </button>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-6">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput3" className="form-label">
                  BMI
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput3"
                    defaultValue={BMI}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      kg/cm
                      <sup>2</sup>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput4" className="form-label">
                  BMI Category:
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput4"
                    defaultValue={category}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput5" className="form-label">
                  Health Risk:
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput5"
                    defaultValue={risk}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
