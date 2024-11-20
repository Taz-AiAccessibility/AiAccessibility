import 'dotenv/config';

const userQueryController = {};

userQueryController.parseUserQuery = async (req, res, next) => {
  //check the request body for userURL
  if (!req.body.userURL) {
    return next({
      log: 'User URL not found',
      status: 500,
      message: {
        err: 'An error occurred in userQueryController Middleware',
      },
    });
  }
  //check if the body contains image context and text context, give it a default value if it doesnt exisit

  const userUrl = req.body.userURL;
  const imageContext = req.body.imageContext || 'no image conext provided';
  const textContext = req.body.textContext || 'no text content provided';

  res.locals.userUrl = userUrl;
  res.locals.imageContext = imageContext;
  res.locals.textContext = textContext;

  return next();
};

export default userQueryController;
