import Joi, { ObjectSchema } from '@hapi/joi';

export const validateUploadRequest = (body: any) => {
  const schema: ObjectSchema = Joi.object({
    guid: Joi.string().required()
  })

  return schema.validate(body)
}

export const validateUploadEnvironment = (environment: any) => {
    
  const schema: ObjectSchema = Joi.object({
    UPLOAD_BUCKET: Joi.string().required(),
    DYNAMO_TABLE: Joi.string().required()
  })

  return schema.validate(environment, { allowUnknown: true })
}