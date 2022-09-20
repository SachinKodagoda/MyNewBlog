import { buffer } from 'micro';
import Stripe from 'stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;
    let event;
    try {
      if (!sig || !webhookSecret) return;
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`webhook error: ${error.message}`);
      return res.status(400).send(`webhook error: ${error.message}`);
    }
    // eslint-disable-next-line no-console
    console.log('event', event);
    res.status(200).send();
  } else {
    res.status(405).end('Method not allowed');
  }
}
