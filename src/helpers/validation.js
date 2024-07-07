const validate = require('express-validator');

class ValidateData {
    validUser() {
        return [
            validate.body('email')
                .notEmpty().withMessage('Email обязателен для заполнения')
                .isEmail().normalizeEmail().withMessage('Email не валидный'),
            validate.body('name')
                .notEmpty().withMessage('Имя обязательно для заполнения')
                .isAlpha().trim().isLength({ max: 50 }).withMessage('Имя должно состоять только из букв и не превышать 50 символов')
        ]
    }

    validUserUpdate() {
        return [
            validate.body('email')
                .optional({ nullable: true })
                .isEmail().normalizeEmail().withMessage('Email не валидный'),
            validate.body('name')
                .optional({ nullable: true })
                .isAlpha().trim().isLength({ max: 50 }).withMessage('Имя должно состоять только из букв и не превышать 50 символов'),
        ]
    }

    validId() {
        return [
            validate.param('id')
                .notEmpty().withMessage('ID обязателен для заполнения')
                .isInt().withMessage('ID должен быть целым числом')
                .toInt()
        ];
    }

    validBook() {
        return [
            validate.body('name')
                .exists().withMessage('Поле "name" обязательно для заполнения')
                .isAlpha().withMessage('Название должно состоять только из букв')
                .not().matches(/^\s*$/).withMessage('Название не может состоять только из пробелов')
                .isLength({ max: 100 }).withMessage('Название не должно превышать 100 символов')
                .trim(),
            validate.body('author')
                .exists().withMessage('Поле "author" обязательно для заполнения')
                .isAlpha().withMessage('Имя должно состоять только из букв')
                .matches(/^[a-zA-Z\s]+$/).withMessage('Имя должно содержать только буквы и пробелы')
                .trim(),
            validate.body('year')
                .exists().withMessage('Поле "year" обязательно для заполнения')
                .isInt({ min: 1000, max: 2100 }).withMessage('Год должен быть между 1000 и 2100'),
            validate.body('numberOfPage')
                .exists().withMessage('Поле "numberOfPage" обязательно для заполнения')
                .isInt({ min: 1 }).withMessage('Количество страниц должно быть больше 0'),
            validate.body('user')
                .exists().withMessage('Поле "user" обязательно для заполнения')
                .isInt({ min: 1 }).withMessage('Нумерация должна быть с 1'),
        ];
    }

    validBookUpdate() {
        return [
            validate.body('name')
                .optional({ nullable: true })
                .isAlpha().withMessage('Название должно состоять только из букв')
                .not().matches(/^\s*$/).withMessage('Название не может состоять только из пробелов')
                .isLength({ max: 100 }).withMessage('Название не должно превышать 100 символов')
                .trim(),
            validate.body('author')
                .optional({ nullable: true })
                .isAlpha().withMessage('Имя должно состоять только из букв')
                .matches(/^[a-zA-Z\s]+$/).withMessage('Имя должно содержать только буквы и пробелы')
                .trim(),
            validate.body('year')
                .optional({ nullable: true })
                .isInt({ min: 1000, max: 2100 }).withMessage('Год должен быть между 1000 и 2100'),
            validate.body('numberOfPage')
                .optional({ nullable: true })
                .isInt({ min: 1 }).withMessage('Количество страниц должно быть больше 0'),
            validate.body('user')
                .optional({ nullable: true })
                .exists().withMessage('Поле "user" обязательно для заполнения')
                .isInt({ min: 1 }).withMessage('Нумерация должна быть с 1'),
        ];

    }

    validPageAndLimit() {
        return [
            validate.check('page')
                .optional()
                .isInt({ min: 1 })
                .withMessage('page должна быть положительным целым числом.'),
            validate.check('limit')
                .optional()
                .isInt({ min: 1, max: 100 })
                .withMessage('limit должен быть положительным целым числом от 1 до 100.')
        ]
    }

    validAuthorAndName() {
        return [
            validate.check('author')
                .optional()
                .isAlpha().withMessage('Имя должно состоять только из букв')
                .trim(),
            validate.check('name')
                .optional()
                .isAlpha().withMessage('Имя должно состоять только из букв')
                .trim()
        ]
    }
}

module.exports = new ValidateData();