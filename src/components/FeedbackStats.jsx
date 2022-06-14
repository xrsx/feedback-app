function FeedbackStats({ feedback }) {
  // NOTE: simpler average calculation
  // Calculate ratings avg
  const average = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  );

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Review</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
