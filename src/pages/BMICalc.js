import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BMICalc = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [healthStatus, setHealthStatus] = useState('');

  const calculateBMI = () => {
    const weightFloat = parseFloat(weight);
    const heightFloat = parseFloat(height);

    if (!isNaN(weightFloat) && !isNaN(heightFloat) && heightFloat !== 0) {
      const bmiValue = weightFloat / Math.pow(heightFloat, 2);
      setBMI(bmiValue.toFixed(2));

      // Determine health status based on BMI categories
      if (bmiValue < 18.5) {
        setHealthStatus('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setHealthStatus('Normal Weight');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setHealthStatus('Overweight');
      } else {
        setHealthStatus('Obese');
      }
    } else {
      setBMI(null);
      setHealthStatus('');
    }
  };

  const getDietRecommendation = () => {
    if (healthStatus === 'Underweight') {
      return 'Increase your calorie intake with a balanced diet including more protein and healthy fats.';
    } else if (healthStatus === 'Overweight') {
      return 'Focus on a balanced diet with fewer calories. Include more fruits, vegetables, and lean proteins.';
    } else if (healthStatus === 'Obese') {
      return 'Consult with a healthcare professional for personalized diet and exercise recommendations.';
    } else {
      return 'Maintain a balanced diet and regular exercise routine for overall health.';
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">BMI Calculator</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">Weight (kg)</label>
            <input
              type="number"
              className="form-control"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="height" className="form-label">Height (m)</label>
            <input
              type="number"
              className="form-control"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3">
            <label className="form-label">BMI</label>
            <div className="form-control">{bmi || 'Calculate BMI'}</div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Health Status</label>
        <div className="form-control">{healthStatus || 'No data'}</div>
      </div>
      <button className="btn btn-outline-danger" onClick={calculateBMI}>Calculate BMI</button>
      <div className="mt-4">
        <h3>Diet Recommendation</h3>
        <p>{getDietRecommendation()}</p>
      </div>
    </div>
  );
};

export default BMICalc;
