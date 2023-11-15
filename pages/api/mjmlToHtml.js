import mjml2html from "mjml";

export default function handler(req, res) {
  const { html } = req.body;
  console.log("req.body", html);
  const result = mjml2html(html);
  console.log(result, "result");
  res.status(200).json({ html: result.html });
}
