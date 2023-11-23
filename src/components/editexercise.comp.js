import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditExercise() {
  const { id } = useParams();
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: 0,
    sets: 0,
    reps: 0,
    date: new Date(),
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/exercises/${id}`)
      .then((response) => {
        const data = response.data;
        setExercise({
          username: data.username,
          description: data.description,
          duration: data.duration,
          sets: data.sets,
          reps: data.reps,
          date: new Date(data.date),
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get("http://127.0.0.1:5000/user/").then((response) => {
      if (response.data.length > 0) {
        setUsers(response.data.map((user) => user.username));
      }
    });
  }, [id]);

  const onChangeUsername = (e) => {
    setExercise({ ...exercise, username: e.target.value });
  };

  const onChangeDescription = (e) => {
    setExercise({ ...exercise, description: e.target.value });
  };

  const onChangeDuration = (e) => {
    setExercise({ ...exercise, duration: e.target.value });
  };

  const onChangeSets = (e) => {
    setExercise({ ...exercise, sets: e.target.value });
  };

  const onChangeReps = (e) => {
    setExercise({ ...exercise, reps: e.target.value });
  };

  const onChangeDate = (date) => {
    setExercise({ ...exercise, date });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://127.0.0.1:5000/exercises/update/${id}`, exercise)
      .then((res) => {
        console.log(res.data);
        window.location = "/app/list";
      });
  };

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        {/* Username selection */}
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={exercise.username}
            onChange={onChangeUsername}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>

        {/* Description input */}
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={exercise.description}
            onChange={onChangeDescription}
          />
        </div>

        {/* Duration input */}
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={exercise.duration}
            onChange={onChangeDuration}
          />
        </div>

        {/* Sets input */}
        <div className="form-group">
          <label>Sets: </label>
          <input
            type="text"
            className="form-control"
            value={exercise.sets}
            onChange={onChangeSets}
          />
        </div>

        {/* Reps input */}
        <div className="form-group">
          <label>Reps: </label>
          <input
            type="text"
            className="form-control"
            value={exercise.reps}
            onChange={onChangeReps}
          />
        </div>

        {/* Date picker */}
        <div className="form-group">
          <label>Date: </label>
          <div>
            <input
              type="date"
              selected={exercise.date}
              onChange={(e) => onChangeDate(e.target.value)}
            />
          </div>
        </div>

        {/* Submit button */}
        <div className="form-group">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default EditExercise;
