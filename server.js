const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const user = {
  email: "vanivyshali@gmail.com",
  password: "1234",
}


app.post("/login", (req, res) => {
  const { email, password } = req.body

  if (email === user.email && password === user.password) {
    res.json({ success: true })
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid email or password",
    })
  }
})


app.listen(5000, () => {
  console.log("Server is running...")
})