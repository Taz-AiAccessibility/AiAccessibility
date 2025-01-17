import 'dotenv/config';

const userQueryController = {};

userQueryController.parseUserQuery = async (req, res, next) => {
  console.log('pareUserQuery middlware');
  const userUrl = req.body.userUrl;
  const imageContext = req.body.imageContext;
  const textContext = req.body.textContext;

  //check the request body for userURL
  if (!userUrl) {
    console.log('error in userQuery ', { userUrl });
    return next({
      log: 'User URL not found',
      status: 500,
      message: {
        err: 'An error occurred in userQueryController Middleware',
      },
    });
  }
  //check if the body contains image context and text context, give it a default value if it doesnt exisit

  res.locals.userUrl = userUrl;
  res.locals.imageContext = imageContext;
  res.locals.textContext = textContext;

  return next();
};

export default userQueryController;
