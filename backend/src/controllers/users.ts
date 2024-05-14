import { Request, Response } from "express";
import * as Yup from "yup";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";

import { User } from "@/entity";

const { OK, NOT_FOUND, INTERNAL_SERVER_ERROR } = StatusCodes;

//@desc    Login user
//@route   GET /api/auth/login
//@access  Private
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const schema = Yup.object().shape({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required("Password is required"),
    });

    await schema.validate(
      {
        email,
        password,
      },
      { abortEarly: false }
    );

    let userExists = await User.findOne({
      where: {
        email,
        provider: "credentials",
      },
      select: [
        "id",
        "first_name",
        "last_name",
        "email",
        "password",
        "provider_id",
      ],
    });
    if (!userExists) {
      return res.status(NOT_FOUND).json({
        status: "error",
        message: "Please provide a valid email address and password",
      });
    }

    let isMatched = await bcrypt.compare(password, userExists.password);

    if (!isMatched) {
      return res.status(NOT_FOUND).json({
        status: "error",
        message: "Please provide a valid email address and password",
      });
    }

    const user = await User.createQueryBuilder("user")
      .where("user.id = :id", { id: userExists.id })
      .getOne();

    return res.status(OK).json({
      data: {
        user,
      },
    });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: error.message,
    });
  }
};
