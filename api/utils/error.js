<<<<<<< HEAD
export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
=======
export const errorHandler=(statusCode,message)=>{
    const error=new Error(message);
    error.statusCode=statusCode;
    error.message=message;
    return error;
}
>>>>>>> 9fd1453f029e3449823ac9ad09b238362e52676e
