const router = require('express').Router();
const { UserSaved } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newSaved = await UserSaved.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSaved);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const saved = await UserSaved.destroy({
      where: {
        quote_id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!saved) {
      res.status(404).json({ message: 'No saved quote found with this id!' });
      return;
    }

    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
