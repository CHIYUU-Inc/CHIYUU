const {onRequest} = require('firebase-functions/v2/https');
const allowedOrigin = process.env.ALLOWED_ORIGIN;
const cors = require('cors')({
  origin: allowedOrigin,
});
const axios = require('axios');
const logger = require('firebase-functions/logger');
const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

const buildMessage = (body) => {
  return 'お問い合わせがありました:\n' +
         `名前: ${body.name}\n` +
         `会社名: ${body.company}\n` +
         `メールアドレス: ${body.email}\n` +
         `電話番号: ${body.tel}\n` +
         `納期の目安: ${body.schedule || ''}\n` +
         `予算の目安: ${body.budget}\n` +
         `お問い合わせ内容: ${body.content}\n`;
};

exports.sendToSlack = onRequest(
    (req, res) => {
      cors(req, res, async () => {
        const {body} = req;

        if (req.method == 'POST') {
          try {
            await axios.post(slackWebhookUrl, {text: buildMessage(body)});
            res.status(200).send();
          } catch (error) {
            logger.error('Slackへのメッセージ送信エラー:', error, body);
            res.status(500).send();
          }
        } else {
          res.status(400).send();
        }
      });
    },
);
