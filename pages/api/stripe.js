import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'required',
             shipping_address_collection: {
          allowed_countries: ['PL'],
        },
            shipping_options: [
          { shipping_rate: 'shr_1Q4TNTEYWs5Kjxdwju9PNQrC' },
          { shipping_rate: 'shr_1Q4TObEYWs5Kjxdwb6NrTNzA' },
        ],
        line_items: req.body.map((item) => {
            const img = item.image[0].asset._ref;
            const newImage = img.replace('image-', 'https://cdn.sanity.io/images/kjjx92zy/production/').replace('-webp', '.webp');

             console.log('Generated Image URL:', newImage);
            
            return {
            price_data: { 
              currency: 'pln',
              product_data: { 
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        mode: 'payment',
        invoice_creation: {
            enabled: true },
        custom_fields: [
          {
           key: 'telephone',
           label: { type: 'custom', custom: 'Nr telefonu'},
           type: 'text',
       },
          {
            key: 'company',
            label: { type: 'custom', custom: 'Miejsce na Twoją dedykację'},
            type: 'text',
        },
    {
            key: 'adres',
            label: { type: 'custom', custom: 'Adres paczkomatu'},
            type: 'text',
            optional: true,
        },
    ],
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
        automatic_tax: {enabled: true},
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}