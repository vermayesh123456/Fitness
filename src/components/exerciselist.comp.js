import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ExerciseCard = (props) => (
  <div className="card m-4 " style={{ width: '18rem', boxShadow: '2px 2px 2px grey', background: '#ffefef' }}>
    <div className="card-body d-flex flex-column">
      <h4 className="card-title text-success">{props.exercise.username}</h4>
      <p className="card-text">
        <strong>Description:</strong> {props.exercise.description}<br />
        <strong>Duration:</strong> {props.exercise.duration} minutes<br />
        <strong>Sets:</strong> {props.exercise.sets}<br />
        <strong>Reps:</strong> {props.exercise.reps}<br />
        <strong>Date:</strong> {props.exercise.date.substring(0, 10)}
      </p>
      <div className="mt-auto d-flex justify-content-between">
        <Link className="btn btn-outline-success me-3" to={'/app/edit/' + props.exercise._id}>
          Edit
        </Link>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => {
            props.deleteExercise(props.exercise._id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get('http://127.0.0.1:5000/exercises/')
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((err) => console.log(err));
  }

  deleteExercise(id) {
    axios.delete('http://127.0.0.1:5000/exercises/' + id).then((res) => console.log(res.data));

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((current) => {
      return <ExerciseCard exercise={current} deleteExercise={this.deleteExercise} key={current._id} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <div className="card-deck d-flex flex-wrap">{this.exerciseList()}</div>
      </div>
    );
  }
}
