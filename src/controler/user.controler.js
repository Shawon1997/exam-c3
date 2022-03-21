const express = require("express")
const router = express.Router;
const { body, validationresult } = require("express-validator");
const User = require("../model/user.model")
router.post("/", body("firstName").trim().not().isEmpty().withMessage("minimum length 3 and maximum length 30").islength({ min: 3, max: 30 }),
    body("lasttName").trim().not().isEmpty().withMessage("minimum length 3 and maximum length 30").islength({ min: 3, max: 30 }),
    body("age").isEmpty().withMessage("age can not be empty").isNeumeric().withMessage("age should be 1 to 150").custom((value) => {
        if (value < 1 || value > 150) {
            throw new Error("Invalid age")
        }
        return true;
    }), async(req, res) => {
        try {
            const errors = validationresult(req)
            console.log({ errors })
            if (!errors.isEmpty()) {
                return res.status(400).send({ errors: errors.array })
            }
            const user = await User.create(req.body);
            return res.status(201).send(user)
        } catch (err) {

        }
    })
module.exports = router;