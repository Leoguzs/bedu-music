const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 4001;

require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;

const twilioClient = require("twilio")(accountSid, authToken);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("It's alive!!!");
});

app.post("/", (req, res) => {
  const { message, user: sender, type, members } = req.body;

  if (type === "message.new") {
    members
      .filter((member) => member.user_id !== sender.id)
      .forEach(({ user }) => {
        if (!user.online) {
          twilioClient.messages
            .create({
              body: `Tienes un nuevo mensaje de ${message.user.fullName} - ${message.text}`,
              messagingServiceSid: messagingServiceSid,
              to: user.phoneNumber,
            })
            .then(() => console.log("Mensaje enviado!"))
            .catch((err) => console.log(err));
        }
      });

    return res.status(200).send("Mensaje enviado!");
  }

  return res.status(200).send("no tienes mensajes");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
