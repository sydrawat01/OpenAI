import HTTPCodes from '../constants/HTTPCode'

class HTTPError extends Error {
  constructor({ message, name, statusCode, data }) {
    super(message)
    this.name = name
    this.statusCode = statusCode
    this.data = data
    Error.captureStackTrace(this, HTTPError)
  }
}

class UnknownError extends HTTPError {
  constructor(message = 'Unknown Error', data) {
    super({
      message,
      name: 'UnknownError',
      statusCode: HTTPCodes.UNKNOWN_ERROR,
      data,
    })
  }
}

// Predefined 4xx error handler utils
class BadRequestError extends HTTPError {
  constructor(message = 'Bad Request', data) {
    super({
      message,
      name: 'HTTPBadRequest',
      statusCode: HTTPCodes.BAD_REQUEST,
      data,
    })
  }
}

class UnauthorizedError extends HTTPError {
  constructor(message = 'Unauthorized', data) {
    super({
      message,
      name: 'Unauthorized',
      statusCode: HTTPCodes.UNAUTHORIZED,
      data,
    })
  }
}

class ForbiddenError extends HTTPError {
  constructor(message = 'Forbidden', data) {
    super({
      message,
      name: 'Forbidden',
      statusCode: HTTPCodes.FORBIDDEN,
      data,
    })
  }
}

class ResourceNotFoundError extends HTTPError {
  constructor(message = 'Not Found', data) {
    super({
      message,
      name: 'HTTPResourceNotFound',
      statusCode: HTTPCodes.RESOURCE_NOT_FOUND,
      data,
    })
  }
}

// Predefined 5xx error handler utils
class InternalServerError extends HTTPError {
  constructor(message = 'Internal Server Error', data) {
    super({
      message,
      name: 'HTTPInternalServerError',
      statusCode: HTTPCodes.INTERNAL_SERVER_ERROR,
      data,
    })
  }
}

class BadGatewayError extends HTTPError {
  constructor(message = 'Bad Gateway Error', data) {
    super({
      message,
      name: 'BadGateway',
      statusCode: HTTPCodes.BAD_GATEWAY,
      data,
    })
  }
}

class ServiceUnavailableError extends HTTPError {
  constructor(message = 'Service Unavailable Error', data) {
    super({
      message,
      name: 'ServiceUnavailable',
      statusCode: HTTPCodes.SERVICE_UNAVAILABLE,
      data,
    })
  }
}

class GatewayTimeoutError extends HTTPError {
  constructor(message = 'Gateway Timeout Error', data) {
    super({
      message,
      name: 'GatewayTimeout',
      statusCode: HTTPCodes.GATEWAY_TIMEOUT,
      data,
    })
  }
}

export {
  HTTPError,
  UnknownError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  ResourceNotFoundError,
  InternalServerError,
  BadGatewayError,
  ServiceUnavailableError,
  GatewayTimeoutError,
}
