// METHOD 1 USING promises

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
            catch((err) => next(err))
    }
}
I
export { asyncHandler }







//     METHOD 2  using try and catch 

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     }
//     catch (error) {

//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }