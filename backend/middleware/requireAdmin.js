export function requireAdmin(req, res, next) {
  const adminApiKey = process.env.ADMIN_API_KEY;

  if (!adminApiKey) {
    return res.status(404).json({ message: 'Route not found.' });
  }

  if (req.get('x-admin-api-key') !== adminApiKey) {
    return res.status(401).json({ message: 'Unauthorized.' });
  }

  return next();
}
