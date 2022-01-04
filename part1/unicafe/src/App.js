import React, { useState } from "react";

const Header = () => {
  return <h1>Give Feedback</h1>;
};

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const StatisticsLine = ({ text, value, suffix }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value} {suffix}
      </td>
    </tr>
  );
};

const Statistics = ({ statistics }) => {
  if (statistics.allReviews === 0) {
    return (
      <>
        <p>No feedback given.</p>
      </>
    );
  }

  const average = (statistics.good - statistics.bad) / statistics.allReviews;
  const positive = statistics.good / statistics.allReviews;
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={statistics.good} />
        <StatisticsLine text="neutral" value={statistics.neutral} />
        <StatisticsLine text="bad" value={statistics.bad} />
        <StatisticsLine text="all" value={statistics.allReviews} />
        <StatisticsLine text="average" value={average.toPrecision(2)} />
        <StatisticsLine
          text="positive"
          value={positive.toPrecision(2)}
          suffix="%"
        />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allReviews, setAll] = useState(0);

  const setClicks = (rating) => {
    switch (rating) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
    setAll(allReviews + 1);
  };

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    allReviews: allReviews,
  };
  return (
    <div>
      <Header />
      <Button handleClick={() => setClicks("good")} text="good" />
      <Button handleClick={() => setClicks("neutral")} text="neutral" />
      <Button handleClick={() => setClicks("bad")} text="bad" />
      <h1>Statistics</h1>
      <Statistics statistics={statistics} />
    </div>
  );
};

export default App;
