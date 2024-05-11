const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const adRouter = require("./routes/ad");
const userRouter = require("./routes/user");
const loginRouter = require("./routes/login");
const signoutRouter = require("./routes/signout");
const profileRouter = require("./routes/profile");
const postAnAdRouter = require("./routes/postAnAd");
const deleteAdRouter = require("./routes/deleteAd");
const autoLoginRouter = require("./routes/autoLogin");
const allUsedCarsRoute = require("./routes/allUsedCars");
const companyAllNewCarsRoute = require("./routes/companyAllNewCars");
const newCarsSpecificModelRoute = require("./routes/newCarsSpecificModel");
const newCarsSpecificVariantRoute = require("./routes/newCarsSpecificVariant");
const popularNewCarsRoute = require("./routes/popularNewCars");
const profileUpdateRoute = require("./routes/profileUpdate");
const adUpdateRoute = require("./routes/adUpdate");
const resetPasswordRouter = require("./routes/resetPassword");
const forgotPasswordRouter = require("./routes/forgotPassword");
const searchUsedCarsRouter = require("./routes/searchUsedCars");
const auth = require("./middlewares/auth");
const { connectMongodb } = require("./connection");
const newCarAd = require("./models/newCarAd");

const server = express();
const Port = 7000;

connectMongodb();

// Middlewares
server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
server.use(bodyParser.json());
server.use(cookieParser());

// Set Multer Storage Engine for Storing Images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
// After creating Storage of multer, now we upload images in this Storage
const upload = multer({ storage: storage });

server.use(express.static("build")); // Serve static files from React build directory
server.use("/images", express.static("public/images")); // Make images available under the `/images` path

// Auto-Sign-in Routes
server.use("/autoSignIn", auth, autoLoginRouter);

// Sign-Up Routes
server.use("/signup", userRouter);

// Sign-In Routes
server.use("/login", loginRouter);

// Forget Password Route
server.use("/forgotpassword", forgotPasswordRouter);

// Reset Password Route
server.use("/resetpassword", resetPasswordRouter);

// User Sign-Out Route
server.use("/signout", signoutRouter);

// Profile Route
server.use("/profile", auth, profileRouter);

// Each Car Ad Route
server.use("/api/cars", adRouter);

// Delete the Ads Route
server.use("/ads", deleteAdRouter);

// Route for Ad Update
server.use("/updateAd", upload.array("images", 5), adUpdateRoute);

// Route for Profile Update
server.use("/updateProfile", profileUpdateRoute);

// All Used Car Ads Route
server.use("/allusedcars", allUsedCarsRoute);

// Searching Used Cars Route
server.use("/searchusedcars", searchUsedCarsRouter);

// Company All New Car Ads Route
server.use("/companyallnewcars", companyAllNewCarsRoute);

// Serve static files from the uploads directory
server.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Post An Ad Route
server.use("/postanadd", auth, upload.array("files", 5), postAnAdRouter);

// New Cars Ads Route
server.use("/newcarspecificmodel", newCarsSpecificModelRoute);

// Popular New Cars Ads Route
server.use("/popularNewCars", popularNewCarsRoute);

// Route to get a specific variant's details
server.use("/newcarspecificvariant", newCarsSpecificVariantRoute);

// Server Port Number
server.listen(Port, () => {
  console.log("server started");
});
