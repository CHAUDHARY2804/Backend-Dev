export const validateYear = (req, res, next) => {
  const { year } = req.body;

  if (year && (isNaN(year) || year < 1500 || year > new Date().getFullYear())) {
    return res.status(400).json({
      message: "Invalid year. Must be between 1500 and current year."
    });
  }

  next();
};