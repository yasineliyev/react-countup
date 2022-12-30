import React from "react";
import CountUp, { useCountUp } from "react-countup";
import "../counter.css";

function Counter() {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 50,
    duration: 2,
    delay: 1,
  });

  return (
    <div className="counter">
      <div className="boxes">
        <div className="box box1">
          {<CountUp end={140} duration={2} delay={3} />}
        </div>
        <div className="box box2" ref={countUpRef}>0</div>
        <div className="box box3">
          {<CountUp end={600} duration={1} prefix="&#8380;" suffix=" AZN" />}
        </div>
      </div>
      <div className="d-flex justify-content-center gap-1">
        <button className="btn btn-success" onClick={start}>
          Start
        </button>
        <button className="btn btn-primary" onClick={pauseResume}>
          PauseResume
        </button>
        <button className="btn btn-danger" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-warning" onClick={() => update(150)}>
          Update
        </button>
      </div>
    </div>
  );
}

export default Counter;
