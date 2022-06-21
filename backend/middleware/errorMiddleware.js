// Fallback function for handleing 404 error
const handle404 = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalURL}`);
  res.status(404);
  next(error);
};

// Function for handeling errors
const customErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { handle404, customErrorHandler };
