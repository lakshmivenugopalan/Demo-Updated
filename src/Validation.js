export default function RequiredValidation(values) {
    const validate = Object.keys(values.fields)
    let error = {};

    validate.forEach(item => {
        if (values.fields[item].required && (values.fields[item].value === '' || values.fields[item].value.length == 0))
            error[item] = `* Required`
        else if (Array.isArray(values.fields[item].value)) {
            if (values.fields[item].hasOwnProperty('validate')) {
                var regX = new RegExp(values.fields[item].validate.pattern);
                values.fields[item].value.map((obj) => {
                    if (!regX.test(obj)) {
                        if (values.fields[item].hasOwnProperty('name')) {
                            error[item] = `${values.fields[item].name} is not valid`
                        }
                        else {
                            error[item] = `${item} is not valid`
                        }
                    }
                })
            }
        }
        else if (values.fields[item].hasOwnProperty('validate')) {
            const regX = new RegExp(values.fields[item].validate.pattern);
            if (values.fields[item].value) {
                if (!regX.test(values.fields[item].value))
                    if (values.fields[item].hasOwnProperty('name')) {
                        error[item] = `${values.fields[item].name} is not valid`
                    }
                    else {
                        error[item] = `${item} is not valid`
                    }
            }
        }

    })
    console.log(error)
    return error
}